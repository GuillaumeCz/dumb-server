import Note from '../models/note.model';

const index = (req, res) =>  {
  var blap = {
    hello: 'world'
  };
  return res.json(blap);
}

const createRandomNote = (req, res) => {
  const note = new Note('hell');
  return res.json(note);
}


export default { index, createRandomNote };
