import status from 'http-status';

import Note from './note.model';

const getNotes = (req, res, next) => 
  Note.find({})
    .exec()
    .then(notes => res.json(notes))
    .catch(error => next(error));

const getNote = (req, res) => 
  Note.findById(req.params.id)
    .exec()
    .then(note => res.json(note))
    .catch(() => res.status(status.NOT_FOUND).send({ error: 'Not found' }));


const addNote = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  const newNote = new Note({
    title: title,
    content: content
  });

  return newNote.save()
    .then(note => res.json(note))
    .catch(err => next(err));
};

const editNote = (req, res, next) => 
  Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(note => res.json(note))
    .catch(err => next(err));

const deleteNote = (req, res, next) => 
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json(true))
    .catch(err => next(err));

export default { getNotes, getNote, addNote, editNote, deleteNote };
