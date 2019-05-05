import mongoose from 'mongoose';

import plugins from './../helpers/plugins';

/**
 * Tag Storage Schema
 */
const TagSchema = new mongoose.Schema({
  name: String
});

TagSchema.plugin(plugins.createdPlugin);
TagSchema.plugin(plugins.updatedPlugin);


const TagModel = mongoose.model('Tag', TagSchema);

export { TagModel as default, TagSchema };
