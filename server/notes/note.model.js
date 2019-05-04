import mongoose from 'mongoose';

import createdPlugin from './../helpers/plugins/createdPlugin';
import updatedPlugin from './../helpers/plugins/updatedPlugin';

/**
 * Note Storage Schema
 */
const NoteSchema = new mongoose.Schema({
  title: String,
  content: String
});

NoteSchema.plugin(createdPlugin);
NoteSchema.plugin(updatedPlugin);

NoteSchema.virtual('id')
  .get(function () {
    return this._id;
  })
  .set(function (id){
    this._id = id;
  })

const NoteModel = mongoose.model('Note', NoteSchema);
export { NoteModel as default, NoteSchema };
