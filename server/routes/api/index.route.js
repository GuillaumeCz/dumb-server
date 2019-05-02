import express from 'express';

import noteRoutes from './note.route';
import tagRoutes from './tag.route';

const router = express.Router();

router.use('/notes', noteRoutes);
router.use('/tags', tagRoutes);

export default router;
