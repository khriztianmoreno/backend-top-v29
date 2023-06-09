import { Router } from 'express';

import { isAuthenticated, hasRole } from '../../auth/auth.controller';

const router = Router();

// /api/payment -> POST
router.post('/', isAuthenticated, (req, res) => {
  res.send('POST /api/payment');
});

export default router;
