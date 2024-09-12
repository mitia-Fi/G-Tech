const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();


const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works 🐻' });
});

app.use('/api', require('./routes/api.route'));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});



//const PORT = process.env.PORT || 4000;
//you can change your port as the same from env 
app.listen(process.env.PORT || 4000, () => {
  console.log('Server is listening on port 4000');
});
//app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
