const mongoose = require('mongoose');


const productShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlenght: 20,
    minlength: 3,
    validate: {
      validator: (value) => {
        const invalidValues = ['https', 'www', '.js', '<script>', '<img>', 'src', '<', '>', '&', "'", '"', ' /', '\\', ';', '(', ')', '$', '%', '+', '=', '@'];
        return !invalidValues.includes(value);
      },
      message: `The name should be between 3 and 50 symblos`, // Error message if validation fails
    },
  },

  category: {
    type: [String],
    required: true,
  },

  price: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[0-9.,]+$/.test(value);
      },
      message: 'Only numbers, ".", and "," are allowed.', // Error message if validation fails
    },
  },

  description: {
    type: String,
    required: true,
    maxlenght: 50,
    validate: {
      validator: (value) => {
        const invalidValues = ['https', 'www', '.js', '<script>', '<img>', 'src', '<', '>', '&', "'", '"', ' /', '\\', ';', '(', ')', '$', '%', '+', '=', '@'];
        return !invalidValues.includes(value);
      },
      message: 'The description consists invalid string values', // Error message if validation fails
    },
  },

  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        // Custom validation function
        // Return true if the string is valid, false otherwise
        // You can define any custom logic here
        const invalidValues = ['.js', '<script>', '<img>', 'src', '<', '>', '&', "'", '"', ' /', '\\', ';', '(', ')', '$', '%', '+', '=', '@'];
        return !invalidValues.includes(value);
      },
      message: 'Invalid value for image', // Error message if validation fails
    },
  },
  
  accessories: [{
    type: mongoose.Types.ObjectId,
    ref: 'Accessory'
  }]

});

module.exports = mongoose.model('Product', productShema);
