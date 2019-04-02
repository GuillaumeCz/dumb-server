import express from 'express';
import path from 'path';

import indexRouter from './routes/index.route';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(PORT, console.log(`running on ${PORT}`))

export default app;
