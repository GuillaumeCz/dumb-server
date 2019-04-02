import Note from './../models/note.model';

const getNotes = (req, res) => {
  return res.json('getNotes');
};

const getNote = (req, res) => {
  return res.json('getNote')
  
};

const addNote = (req, res) => {
  return res.json('addNote');
}

const editNote = (req, res) => {
  return res.json('editNote');
}

export default { getNotes, getNote, addNote, editNote };
