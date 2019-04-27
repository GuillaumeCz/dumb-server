import express from 'express';

import indexCtrl from './../controllers/index.ctrl';

import noteRoutes from './note.route';

const router = express.Router();

router
  .get('/', indexCtrl.index)

router.use('/notes', noteRoutes);

export default router;
