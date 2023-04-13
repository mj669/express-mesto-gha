const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = { _id: '6436826a7a4e739a33cc197f' };
  next();
});

app.use(router);

app.use((req, res) => {
  res.status(404).send({
    message: 'Страница не найдена',
  });
});

app.listen(PORT);
