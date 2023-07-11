const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
mongoose.connect('mongodb://localhost:27017/Happy-Colors', { useNewUrlParser: true, useUnifiedTopology: true, family: 4, })
  .then(() => {
    // Connection successful, perform your operations here
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    // Connection error
    console.error('Error connecting to MongoDB:', error);
  });
};