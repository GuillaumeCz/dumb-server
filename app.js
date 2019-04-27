import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';

import indexRouter from './routes/index.route';

const app = express();

const PORT = 3000;
const ENV = dotenv.config().parsed;

const mongoUri = ENV.MONGO_HOST + ENV.MONGO_NAME;
const mongoPort = ENV.MONGO_PORT;

mongoose.set('useCreateIndex', true);
mongoose.connect(mongoUri, { useNewUrlParser: true, useFindAndModify: false });

const db = mongoose.connection;
db.on('error', () => {
  throw new Error(`Unable to connect to database: ${mongoUri}`);
});

db.once('open', () => console.log(`Connected to database: ${mongoUri}:${mongoPort}`));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(PORT, console.log(`running on ${PORT}`))

export default app;
