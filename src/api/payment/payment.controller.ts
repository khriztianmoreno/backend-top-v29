import { Request, Response } from 'express';

import { createPayment, getAllPayment } from './payment.service';

export async function getAllPaymentHandler(req: Request, res: Response) {
  const payment = await getAllPayment();

  return res.json(payment);
}

export async function createPaymentHandler(req: Request, res: Response) {
  const data = req.body;

  try {
    const payment = await createPayment(data);

    return res.json(payment);
  } catch (error: any) {
    console.log(error);
  }
}
