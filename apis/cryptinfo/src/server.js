const express = require('express');
const app = express();
const coinsRouter = require('./routes/coins');
const port = process.env.PORT || 5000;
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');


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


const openapiSpecification = await swaggerJSDoc(options)


app.get('/json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(openapiSpecification);
});


app.use(express.json())
app.use('/coins', coinsRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.listen(port, () => `Server running on port ${port} 💥`);
