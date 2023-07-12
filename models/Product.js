const mongoose = require('mongoose');


const productShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
              // Custom validation function
              // Return true if the string is valid, false otherwise
              // You can define any custom logic here
              const invalidValues = [ 'https', 'www', '.js', '<script>', '<img>', 'src', '<', '>', '&', "'", '"',' /', '\\', ';', '(', ')', '$', '%', '+', '=', '@'];
              return !invalidValues.includes(value);
            },
            message: 'Invalid string value.', // Error message if validation fails
          },
    },
    price: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
              // Custom validation function
              // Return true if the string is valid, false otherwise
              // You can define any custom logic here
      
              // Example: Validating that the string contains only numbers, ".", and ","
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
              // Custom validation function
              // Return true if the string is valid, false otherwise
              // You can define any custom logic here
              const invalidValues = [ 'https', 'www', '.js', '<script>', '<img>', 'src', '<', '>', '&', "'", '"',' /', '\\', ';', '(', ')', '$', '%', '+', '=', '@'];
              return !invalidValues.includes(value);
            },
            message: 'Invalid string value.', // Error message if validation fails
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
              const invalidValues = ['.js', '<script>', '<img>', 'src', '<', '>', '&', "'", '"',' /', '\\', ';', '(', ')', '$', '%', '+', '=', '@'];
              return !invalidValues.includes(value);
            },
            message: 'Invalid string value.', // Error message if validation fails
          },

    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]

});

module.exports = mongoose.model('Product', productShema);
