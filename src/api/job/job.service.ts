import { PrismaClient } from '@prisma/client';

import { Job } from './job.types';

const prisma = new PrismaClient();

export async function getAllJob() {
  const job = await prisma.job.findMany();
  return job;
}

export async function createJob(input: Job) {
  const job = await prisma.job.create({
    data: input,
  });

  return job;
}

export async function getJobById(id: string) {
  const job = await prisma.job.findUnique({
    where: {
      id,
    },
  });

  return job;
}

export async function updateJob(id: string, input: Job) {
  const job = await prisma.job.update({
    where: {
      id,
    },
    data: input,
  });

  return job;
}

export async function deleteJob(id: string) {
  const job = await prisma.job.delete({
    where: {
      id,
    },
  });

  return job;
}

export async function getJobsByCompanyId(companyId: string) {
  const job = await prisma.job.findMany({
    where: {
      companyId,
    },
  });

  return job;
}
