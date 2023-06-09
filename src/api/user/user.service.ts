import { PrismaClient } from '@prisma/client';

import { User } from './user.types';
import { hashPassword, createHashToken } from '../../auth/utils/bcrypt';

const prisma = new PrismaClient();

export async function getAllUser() {
  const users = await prisma.user.findMany();
  return users;
}

export async function createUser(input: User) {
  if (!input.password) {
    throw new Error('Password is required');
  }

  const hashedPassword = await hashPassword(input.password);

  const expiresIn = Date.now() + 3_600_000 * 24; // 24 hours

  const data = {
    ...input,
    password: hashedPassword,
    passwordResetToken: createHashToken(input.email),
    passwordResetExpires: new Date(expiresIn), // 24 hours
  };

  const user = await prisma.user.create({
    data,
  });

  return user;
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      roles: {
        select: {
          role: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return user;
}

export async function getUserByToken(token: string) {
  const user = await prisma.user.findFirst({
    where: {
      passwordResetToken: token,
      // passwordResetExpires: {
      //   lte: new Date(),
      // },
    },
    include: {
      roles: {
        select: {
          role: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return user;
}

export async function deleteUser(id: string) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
}

export async function updateUser(data: User) {
  const user = await prisma.user.update({
    where: {
      id: data.id,
    },
    data,
  });

  return user;
}
