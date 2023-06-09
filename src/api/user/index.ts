import { Router } from 'express';

import {
  createUserHandler,
  deleteUserHandler,
  getAllUserHandler,
  getUserHandler,
  updateUserHandler,
} from './user.controller';
import { isAuthenticated, hasRole } from '../../auth/auth.controller';

const router = Router();

// /api/users -> GET
router.get('/', hasRole(['ADMIN']), getAllUserHandler);

// /api/users -> POST
router.post('/', createUserHandler);

// /api/users/:id -> GET
router.get('/:id', getUserHandler);

// /api/users/:id -> DELETE
router.delete('/:id', isAuthenticated, deleteUserHandler);

// /api/users/:id -> PATCH
router.patch('/:id', updateUserHandler);

export default router;
