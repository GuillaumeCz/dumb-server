import express from 'express';

import tagCtrl from './../controllers/tag.ctrl';

const router = express.Router();

router.route('/')
  .get(tagCtrl.getTags)
  .post(tagCtrl.addTag);

router.route('/:id')
  .get(tagCtrl.getTag)
  .put(tagCtrl.editTag)
  .delete(tagCtrl.deleteTag);

export default router;
