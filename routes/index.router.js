import express from 'express';

import indexCtrl from './../controllers/index.ctrl';

const router = express.Router();

router
  /* Index */
  .get('/', indexCtrl.index)
  .get('/random', indexCtrl.createRandomNote)

export default router;
