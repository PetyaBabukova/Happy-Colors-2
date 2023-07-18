const Product = require('../models/Product');

async function getAllCategories(category) {
    let products = await Product.find({}).lean()

    if(category){
        products =  products.filter(x => x.category.includes(category));
    }
    return products;
}


async function getAll(query) {
    let products = await Product.find({}).lean()

    if(query.search){
        let searched = query.search
        products =  products.filter(x => x.name.toLocaleLowerCase().includes(searched.toLocaleLowerCase()));
    }
    return products;
}

function getOne(id) {
    return Product.findById(id).lean();
}

function create(data) {
    let product = new Product(data);

    return product.save();
}


module.exports = {
    getAll,
    create,
    getAllCategories,
    getOne,
}