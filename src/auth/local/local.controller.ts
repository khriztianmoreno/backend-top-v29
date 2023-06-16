import { Request, Response } from 'express';

import {
  getUserByEmail,
  getUserByToken,
  updateUser,
} from '../../api/user/user.service';
import { createAuthResponse } from './local.service';
import { comparePassword } from '../utils/bcrypt';

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

    const response = createAuthResponse(user);

    return res.json(response);
  } catch (error) {}
}

export async function activateHandler(req: Request, res: Response) {
  const { token } = req.params;

  try {
    const user = await getUserByToken(token);

    if (!user) {
      return res.status(404).json({
        message: 'Invalid token',
      });
    }

    if (user.passwordResetExpires) {
      if (Date.now() > user.passwordResetExpires.getTime()) {
        return res.status(400).json({
          message: 'Token expired',
        });
      }
    }

    const data = {
      ...user,
      isActive: true,
      passwordResetToken: null,
      passwordResetExpires: null,
    };

    await updateUser(data);

    const response = createAuthResponse(user);

    return res.json(response);
  } catch (error) {}
}
