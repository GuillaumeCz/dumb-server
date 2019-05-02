import chai from 'chai';

import Note from '../server/models/note.model';
import Tag from '../server/models/tag.model';

before('Clean up test data', () => Promise.all([Note.deleteMany({}), Tag.deleteMany({})]));
