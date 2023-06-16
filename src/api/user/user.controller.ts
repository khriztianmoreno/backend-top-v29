import { Request, Response } from 'express';

import {
  createUser,
  deleteUser,
  getAllUser,
  getUserByEmail,
  getUserById,
  updateUser,
} from './user.service';
import { sendMailSendGrid } from '../../utils/email';

export async function getAllUserHandler(req: Request, res: Response) {
  const users = await getAllUser();

  return res.json(users);
}

export async function createUserHandler(req: Request, res: Response) {
  const data = req.body;

  try {
    const user = await createUser(data);

    // Send email
    const emailData = {
      from: 'No reply <cristian.moreno@makeitreal.camp>',
      to: user.email,
      subject: 'Welcome to the app',
      templateId: 'd-649011f35b854690a0e5f47de11eb2f2',
      dynamicTemplateData: {
        firstName: user.firstName,
        lastName: user.lastName,
        url: `${process.env.FRONTEND_URL}/verify-account/${user.passwordResetToken}`,
      },
    };
    sendMailSendGrid(emailData);

    return res.status(201).json(user);
  } catch (error: any) {
    console.log(error);
  }
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

  // await deleteUser(id);

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
