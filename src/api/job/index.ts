import { Router } from 'express';

import {
  createJobHandler,
  deleteJobHandler,
  getAllJobHandler,
  getJobByIdHandler,
  updateJobHandler,
} from './job.controller';

const router = Router();

router.get('/', getAllJobHandler);
router.post('/', createJobHandler);
router.get('/:id', getJobByIdHandler);
router.patch('/:id', updateJobHandler);
router.delete('/:id', deleteJobHandler);

export default router;
