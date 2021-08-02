const express = require('express');
const app = express();
const coinsRouter = require('./routes/coins');
const openAPIRouter = require('./routes/openapi');
const port = process.env.PORT || 5000;

app.use(express.json())
app.use('/coins', coinsRouter);
app.use('/openapi', openAPIRouter);
app.listen(port, () => `Server running on port ${port} 💥`);
