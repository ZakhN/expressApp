import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import bb from 'express-busboy';
import SourceMapSupport from 'source-map-support';
import todoRoutes from './routes/todo.server.route';

const port = process.env.PORT || 3001;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern-todo-app', {
  useMongoClient: true,
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

bb.extend(app);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

SourceMapSupport.install();
app.use('/api', todoRoutes);
app.get('/', (req, res) => res.end('Api working'));

// catch 404
app.use((req, res) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

app.listen(port, () => {
  console.log(`App Server Listening at ${port}`);
});
