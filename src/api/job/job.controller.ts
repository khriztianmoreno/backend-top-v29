import { Request, Response } from 'express';

import {
  createJob,
  deleteJob,
  getAllJob,
  getJobById,
  getJobsByCompanyId,
  updateJob,
} from './job.service';

export async function getAllJobHandler(req: Request, res: Response) {
  const job = await getAllJob();

  return res.json(job);
}

export async function createJobHandler(req: Request, res: Response) {
  const data = req.body;

  try {
    const job = await createJob(data);

    return res.json(job);
  } catch (error: any) {
    console.log(error);
  }
}

export async function getJobByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  const job = await getJobById(id);

  return res.json(job);
}

export async function updateJobHandler(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;

  const job = await updateJob(id, data);

  return res.json(job);
}

export async function deleteJobHandler(req: Request, res: Response) {
  const { id } = req.params;

  const job = await deleteJob(id);

  return res.json(job);
}
