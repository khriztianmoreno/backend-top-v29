import { PrismaClient } from '@prisma/client';

import { Payment } from './payment.types';

const prisma = new PrismaClient();

export async function getAllPayment() {
  const payment = await prisma.payment.findMany();
  return payment;
}

export async function createPayment(input: Payment) {
  const payment = await prisma.payment.create({
    data: input,
  });

  return payment;
}

export async function getPaymentById(id: string) {
  const payment = await prisma.payment.findUnique({
    where: {
      id,
    },
  });

  return payment;
}

export async function updatePayment(id: string, input: Payment) {
  const payment = await prisma.payment.update({
    where: {
      id,
    },
    data: input,
  });

  return payment;
}

export async function deletePayment(id: string) {
  const payment = await prisma.payment.delete({
    where: {
      id,
    },
  });

  return payment;
}
