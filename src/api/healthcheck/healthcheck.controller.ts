import { Request, Response } from 'express';

export function healthcheckHandler(req: Request, res: Response) {
  return res.status(200).json({
    uptime: process.uptime(),
    message: 'OK',
  });
}
