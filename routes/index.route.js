import express from 'express';

import indexCtrl from './../controllers/index.ctrl';

import noteRoutes from './note.route';

const router = express.Router();

router
  .get('/', indexCtrl.index)
  .get('/health-check', (req, res) => res.send('OK'))

router.use('/notes', noteRoutes);

export default router;
