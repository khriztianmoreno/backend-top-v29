import { Router } from 'express';

import {
  createCompanyHandler,
  deleteCompanyHandler,
  getAllCompanyHandler,
  getCompanyByIdHandler,
  updateCompanyHandler,
} from './company.controller';

const router = Router();

router.get('/', getAllCompanyHandler);
router.post('/', createCompanyHandler);
router.get('/:id', getCompanyByIdHandler);
router.patch('/:id', updateCompanyHandler);
router.delete('/:id', deleteCompanyHandler);

export default router;
