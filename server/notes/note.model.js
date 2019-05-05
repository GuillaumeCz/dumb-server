import mongoose from 'mongoose';

import plugins from './../helpers/plugins';

/**
 * Note Storage Schema
 */
const NoteSchema = new mongoose.Schema({
  title: String,
  content: String
});

NoteSchema.plugin(plugins.createdPlugin);
NoteSchema.plugin(plugins.updatedPlugin);

NoteSchema.virtual('id')
  .get(function () {
    return this._id;
  })
  .set(function (id){
    this._id = id;
  })

const NoteModel = mongoose.model('Note', NoteSchema);
export { NoteModel as default, NoteSchema };
