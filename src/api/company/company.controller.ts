import { Request, Response } from 'express';

import {
  createCompany,
  deleteCompany,
  getAllCompany,
  getCompanyById,
  updateCompany,
} from './company.service';

export async function getAllCompanyHandler(req: Request, res: Response) {
  const company = await getAllCompany();

  return res.json(company);
}

export async function createCompanyHandler(req: Request, res: Response) {
  const data = req.body;

  try {
    const company = await createCompany(data);

    return res.json(company);
  } catch (error: any) {
    console.log(error);
  }
}

export async function getCompanyByIdHandler(req: Request, res: Response) {
  const company = await getCompanyById(req.params.id);

  return res.json(company);
}

export async function updateCompanyHandler(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;

  try {
    const company = await updateCompany(id, data);

    return res.json(company);
  } catch (error: any) {}
}

export async function deleteCompanyHandler(req: Request, res: Response) {
  const company = await deleteCompany(req.params.id);

  return res.json(company);
}
