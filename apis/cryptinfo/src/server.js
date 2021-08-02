const express = require('express');
const app = express();
const coinsRouter = require('./routes/coins');
const port = process.env.PORT || 5000;

const swagger_jsdoc = require("swagger-jsdoc");


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CryptWatcher',
            version: '1.0.0',
            description: 'CryptWatcher API',
        },
    },
    apis: ['./src/routes/*.js']
};

const openapi_specification = await swagger_jsdoc(options)


app.use(express.json())
app.use('/coins', coinsRouter);

app.get('/', (req, res) => {
    res.send("Hello World!");
});



app.listen(port, () => `Server running on port ${port} 💥`);
