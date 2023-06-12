import { PrismaClient } from '@prisma/client';

import { Company } from './company.types';

const prisma = new PrismaClient();

export async function getAllCompany() {
  const company = await prisma.company.findMany();
  return company;
}

export async function createCompany(input: Company) {
  const company = await prisma.company.create({
    data: input,
  });

  return company;
}

export async function getCompanyById(id: string) {
  const company = await prisma.company.findUnique({
    where: {
      id,
    },
  });

  return company;
}

export async function getCompanyByName(name: string) {
  const company = await prisma.company.findUnique({
    where: {
      name,
    },
  });

  return company;
}

export async function updateCompany(id: string, input: Company) {
  const company = await prisma.company.update({
    where: {
      id,
    },
    data: input,
  });

  return company;
}

export async function deleteCompany(id: string) {
  const company = await prisma.company.delete({
    where: {
      id,
    },
  });

  return company;
}
