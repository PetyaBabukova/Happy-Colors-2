const Product = require('../models/Product');

async function getAll(query, category) {
    
    if(category){
        return await Product.find({category: category}).lean();
    } else{

        return await Product.find({}).lean();
    }
    //return products;
}


function create(data) {
    let product = new Product(data);

    return product.save();
}


module.exports = {
    getAll,
    create,
}