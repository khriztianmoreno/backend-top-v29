import { Request, Response, NextFunction, json } from 'express';
import jwt from 'jsonwebtoken';

import { getUserByEmail } from '../../api/user/user.service';
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

    // jwt
    const payload = {
      id: user.id,
      email: user.email,
    };
    const SECRET = 's3cr3t_5h0uld_b3_24_ch4r4ct3r5';
    const token = jwt.sign(payload, SECRET);

    return res.json({ token, profile: user });
  } catch (error) {}
}
