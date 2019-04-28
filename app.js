import express from 'express';
import path from 'path';

import config from './config/config';
import database from './config/database';
import indexRouter from './server/routes/index.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/health-check', (req, res) => res.json('Ok'));
app.use('/api', indexRouter);

app.listen(config.port, console.log(`running on ${config.port}`))

export default app;
