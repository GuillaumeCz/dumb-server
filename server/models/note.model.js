import mongoose from 'mongoose';

/**
 * Note Storage Schema
 */
const NoteSchema = new mongoose.Schema({
  title: String,
  content: String
});

NoteSchema.virtual('id')
  .get(function () {
    return this._id;
  })
  .set(function (id){
    this._id = id;
  })

const NoteModel = mongoose.model('Note', NoteSchema);
export { NoteModel as default, NoteSchema };