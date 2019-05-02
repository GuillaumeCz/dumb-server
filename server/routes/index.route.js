import express from 'express';

import ApiRoutes from './api/index.route';

const router = express.Router();

router
  .get('/', (req, res) => res.json(true));

router.use('/api', ApiRoutes);

export default router;
