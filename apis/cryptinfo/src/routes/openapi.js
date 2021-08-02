const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CryptWatcher',
            version: '1.0.0',
            description: 'CryptWatcher API',
        },
    },
    apis: ['./src/routes/*.js', './src/models/*.js'],
};

const express = require("express");
const router = express.Router();
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = swaggerJSDoc(options)

router.get('/json', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
  
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = router
