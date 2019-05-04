import mongoose from 'mongoose';

import createdPlugin from './../helpers/plugins/createdPlugin';
import updatedPlugin from './../helpers/plugins/updatedPlugin';

/**
 * Tag Storage Schema
 */
const TagSchema = new mongoose.Schema({
  name: String
});

TagSchema.plugin(createdPlugin);
TagSchema.plugin(updatedPlugin);


const TagModel = mongoose.model('Tag', TagSchema);

export { TagModel as default, TagSchema };
