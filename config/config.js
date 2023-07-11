const config = {
    development: {
        PORT : 5000,
        DB_CONNECT: 'mongodb://localhost:27017/Happy-Colors'
    },
    production: {
        PORT: 80,
        DB_CONNECT: 'mongodb+srv://pbabukova:Happy.Colors.2023@cluster0.tdosqcm.mongodb.net/'
    }
}

module.exports = config[process.env.NODE_ENV.trim()]