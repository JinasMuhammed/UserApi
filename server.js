const express = require('express');
const app = express();
const config = require('./config/');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = Number(process.env.PORT || 4000);

// body parser will receive post data from front end
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set global promise for mongoose
mongoose.Promise = global.Promise;

// db connection
mongoose.connect(config.Db, { useNewUrlParser: true }).then(
  res => {
    console.log('Database successfully connected');
  },
  err => {
    console.log(err);
  }
);
app.use(cors());

const userRoute = require('./router/');

app.use('/', userRoute);

app.listen(PORT, () => {
	console.log(`Server is running on url http://localhost:${PORT}`);
});