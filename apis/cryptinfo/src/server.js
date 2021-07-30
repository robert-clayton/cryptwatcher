const express = require('express');
const app = express();
const coinsRouter = require('./routes/coins');
const port = process.env.PORT || 5000;

app.use(express.json())
app.use('/v1/coins', coinsRouter);

app.get('/', (req, res) => {
    res.send("Hello World!");
});



app.listen(port, () => `Server running on port ${port} 💥`);
