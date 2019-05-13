import mongoose from 'mongoose';

import createdPlugin from './plugins/created';
import updatedPlugin from './plugins/updated';

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
