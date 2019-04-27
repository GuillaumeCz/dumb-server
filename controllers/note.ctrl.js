import Note from './../models/note.model';

const getNotes = (req, res, err) => {
  Note.find({})
    .exec()
    .then(notes => res.json(notes))
    .catch(err => next(err));
};

const getNote = (req, res, next) => {
  const noteId = req.params.noteId;
  Note.findById(noteId)
    .exec()
    .then(note => res.json(note))
    .catch(e => next(e));
};


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
}

const editNote = (req, res, next) => {
  const noteId = req.params.noteId;
  const data = {
    title: req.body.title,
    content: req.body.content
  };

  Note.findOneAndUpdate({ _id: noteId }, data, )
    .then(note => res.json(note))
    .catch(err => next(err));
}

const deleteNote = (req, res, next) => {
  const noteId = req.params.noteId;
  Note.findByIdAndDelete(noteId)
    .then(note => res.json(true))
    .catch(err => next(err));
}

export default { getNotes, getNote, addNote, editNote, deleteNote };
