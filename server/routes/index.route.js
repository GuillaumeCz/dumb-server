import express from 'express';

import indexCtrl from './../controllers/index.ctrl';

import noteRoutes from './note.route';
import tagRoutes from './tag.route';

const router = express.Router();

router
  .get('/', indexCtrl.index)

router.use('/notes', noteRoutes);
router.use('/tags', tagRoutes);

export default router;
