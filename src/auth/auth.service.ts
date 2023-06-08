import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { getUserByEmail } from '../api/user/user.service';

const SECRET = process.env.JWT_SECRET as string;

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, SECRET);

    return decoded;
  } catch (error) {
    return null;
  }
}

export function signToken(payload: any) {
  const token = jwt.sign(payload, SECRET);

  return token;
}

export async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return next();
}
