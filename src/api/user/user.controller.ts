import { Request, Response } from 'express';

import {
  createUser,
  deleteUser,
  getAllUser,
  getUserByEmail,
  getUserById,
  updateUser,
} from './user.service';

import { comparePassword } from '../../auth/utils/bcrypt';

export async function getAllUserHandler(req: Request, res: Response) {
  const users = await getAllUser();

  return res.json(users);
}

export async function createUserHandler(req: Request, res: Response) {
  const data = req.body;

  const user = await createUser(data);

  return res.json(user);
}

export async function getUserHandler(req: Request, res: Response) {
  const { id } = req.params;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  return res.json(user);
}

export async function deleteUserHandler(req: Request, res: Response) {
  const { id } = req.params;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  await deleteUser(id);

  return res.json(user);
}

export async function updateUserHandler(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  const updatedUser = await updateUser({ ...data, id });

  return res.json(updatedUser);
}

export async function loginHandler(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // compare password
    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Email or password not match' });
    }

    // jwt

    return res.json(user);
  } catch (error) {}
}
