import express from 'express';

import noteRoutes from './../../notes/note.route';
import tagRoutes from './../../tags/tag.route';

const router = express.Router();

router.use('/notes', noteRoutes);
router.use('/tags', tagRoutes);

export default router;
