import mongoose from 'mongoose';

/**
 * Tag Storage Schema
 */
const TagSchema = new mongoose.Schema({
  name: String
});

const TagModel = mongoose.model('Tag', TagSchema);

export { TagModel as default, TagSchema };
