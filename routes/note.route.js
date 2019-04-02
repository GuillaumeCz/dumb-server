import express from 'express';

import noteCtrl from './../controllers/note.ctrl';

const router = express.Router();

router.route('/')
  .get(noteCtrl.getNotes)
  .post(noteCtrl.addNote);

router.route('/:noteId')
  .get(noteCtrl.getNote)
  .put(noteCtrl.editNote);

export default router;
