import express from 'express';

import noteCtrl from './../controllers/note.ctrl';

const router = express.Router();

router.route('/')
  .get(noteCtrl.getNotes)
  .post(noteCtrl.addNote);

router.route('/:id')
  .get(noteCtrl.getNote)
  .put(noteCtrl.editNote)
  .delete(noteCtrl.deleteNote);

export default router;
