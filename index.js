const express = require ('express');
const {engine} = require ('express-handlebars');

const config = require('./config/config');
const expressConfig = require('./config/express');
const routes = require('./routes');

const app = express();

expressConfig(app, engine);

app.use(routes);

app.listen(config.PORT, ()=>{
    console.log(`Server is running on port ${config.PORT}...`);
});