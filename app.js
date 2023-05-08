const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const NotFoundError = require('./errors/NotFoundError');
const { errors } = require('celebrate');
const handleErrorDefault = require('./middlewares/handleErrorDefault');

const router = require('./routes/index');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   req.user = {
//     _id: '6444357f98456e1951b6b1bb',
//   };
//   next();
// });

app.use(router);

// app.all('*', (req, res, next) => {
//   next(new NotFoundError('Неверный адрес'));
// });
app.use(errors());
app.use(handleErrorDefault);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
