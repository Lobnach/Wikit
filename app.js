const express = require('express');
const mongoose = require('mongoose');
const connect = require('./db/connect');
const router = require('./routes/tweets');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const port = 3000;

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(YAML.load('./swagger.yml')) );
app.use(express.json());
app.use('/tweets', router);


const start = async () => {
    try {
        await connect();
        app.listen(port, () => {
        console.log('Server running on port '+port);
        });
    } catch(error) {
        console.log(error);
    }
}

start();
module.exports = app;






