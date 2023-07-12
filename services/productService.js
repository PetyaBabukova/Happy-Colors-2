const Product = require('../models/Product');

async function getAll(query) {
    let products = await Product.find({}).lean();

    return 'products'
}

function create(data) {
    let product = new Product(data);

    return product.save();
}



module.exports = {
    getAll,
    create,
}