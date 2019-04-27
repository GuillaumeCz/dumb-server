import mongoose from 'mongoose';

import config from './config';

const mongoUri = config.mongo.host + config.mongo.name;

mongoose.set('useCreateIndex', true);
mongoose.connect(mongoUri, { useNewUrlParser: true, useFindAndModify: false });

const db = mongoose.connection;
db.on('error', () => {
  throw new Error(`Unable to connect to database: ${mongoUri}`);
});

db.once('open', () => console.log(`Connected to database: ${mongoUri}:${config.mongo.port}`));

export { db as default };
