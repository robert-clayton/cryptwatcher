const differenceInDate = require("../helpers/differenceInDate");
const express = require("express");
const router = express.Router();
const dummyData = [{
        "name": "Bitcoin",
        "ticker": "BTC",
        "rank": "1",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    }, 
    {
        "name": "Ethereum",
        "ticker": "ETH",
        "rank": "2",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    },
    {
        "name": "Bitcoin Cash",
        "ticker": "BCH",
        "rank": "3",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    },
    {
        "name": "Litecoin",
        "ticker": "LTC",
        "rank": "4",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    },
    {
        "name": "Dash",
        "ticker": "DASH",
        "rank": "5",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    },
    {
        "name": "Monero",
        "ticker": "XMR",
        "rank": "6",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    },
    {
        "name": "Zcash",
        "ticker": "ZEC",
        "rank": "7",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    },
    {
        "name": "NEO",
        "ticker": "NEO",
        "rank": "8",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    },
    {
        "name": "EOS",
        "ticker": "EOS",
        "rank": "9",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    },
    {
        "name": "Filecoin",
        "ticker": "FIL",
        "rank": "10",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    },
    {
        "name": "Ripple",
        "ticker": "XRP",
        "rank": "11",
        "priceUSD": "10,000.00",
        "priceBTC": "1.0",
        "24hVolumeUSD": "1,000,000,000.00",
        "marketCapUSD": "10,000,000,000.00",
        "availableSupply": "10,000,000,000.00",
        "totalSupply": "10,000,000,000.00",
        "percentChange1H": "0.00",
        "percentChange24H": "0.00",
        "percentChange7D": "0.00",
        "lastUpdatedSentiment": "1516244800000",
        "lastUpdatedMarket": "1516244800000",
        "marketValues": [{
            "date": 1627629490000,
            "priceUSD": "10,000.00",
            "priceBTC": "1.0",
        }],
        "sentiments": [{
            "date": 1627629490000,
            "positive": 0.7,
            "negative": 0.3,
            "neutral": 0.0,
        }]
    }
]


function getTickerIndex(ticker) {
    ticker = ticker.toUpperCase();
    for (var i = 0; i < dummyData.length; i++) {
        if (dummyData[i].ticker === ticker)
            return i
    }
    return -1;
}


/**
 * @openapi
 * /coins:
 *  get:
 *      description: Get all coins' data
 *      tags: [coins]
 *      produces: [application/json]
 *      responses:
 *          200:
 *              description: Returns all coins' data
 */
router.get('/', function(req, res) {
    res.json({'coins': dummyData});
});


/**
 * @openapi
 * /coins/tickers:
 *  get:
 *      description: Get a list of all coins' tickers
 *      tags: [coins]
 *      produces: [application/json]
 *      responses:
 *          200:
 *              description: Returns a list of all coins' data
 */
router.get('/tickers', function(req, res) {
    res.json({'tickers' : dummyData.map(({ ticker }) => ticker)});
});


/**
 * @openapi
 * /coins/{ticker}:
 *  get:
 *      description: Get a specific coin's data
 *      tags: [coins]
 *      produces: [application/json]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: Returns a specific coin's data
 *          404:
 */
router.get('/:ticker', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    res.json(dummyData[index]);
});


/**
 * @openapi
 * /coins/{ticker}/sentiment:
 *  get:
 *      description: Get all of a specific coin's sentiment analysis values
 *      tags: [coins]
 *      produces: [application/json]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: Returns a specific coin's sentiment analysis values
 *          404:
 */
router.get('/:ticker/sentiments', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    res.json({'sentiment': dummyData[index].sentiments});
});


/**
 * @openapi
 * /coins/{ticker}/recentSentiment:
 *  get:
 *      description: Get a specific coin's recent sentiment analysis values
 *      tags: [coins]
 *      produces: [application/json]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: Returns a specific coin's recent sentiment analysis values
 *          404:
 */
router.get('/:ticker/recentSentiment', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    res.json(dummyData[index].sentiments[dummyData[index].sentiments.length - 1]);
});


/**
 * @openapi
 * /coins/{ticker}/previousSentiments:
 *  get:
 *      description: Get a specific coin's sentiment analysis values for the previous number of days
 *      tags: [coins]
 *      produces: [application/json]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *          - name: numDays
 *            description: The number of previous days to get sentiment analysis values for
 *            in: body
 *            required: true
 *            type: integer
 *      responses:
 *          200:
 *              description: Returns a specific coin's sentiment analysis values for the previous number of days
 *          400:
 *              description: The number of previous days deemed invalid
 *          404:
 */
router.get('/:ticker/previousSentiments', function(req, res) {
    if (!req.body.numDays || !req.body.numDays < 1)
        return res.status(400).send({'message': 'Invalid parameter: numDays'});
    const index = getTickerIndex(req.params.ticker);
    const today = new Date()
    today.setHours(0, 0, 0, 0);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    var sentiment = [];
    dummyData[index].sentiments.forEach(function(item) {
        const sentimentDate = new Date(item.date)
        sentimentDate.setHours(0, 0, 0, 0);
        if (differenceInDate(today, sentimentDate) <= req.body.numDays)
            sentiment.push(item);
    });
    res.json({'sentiment': sentiment});
});


/**
 * @openapi
 * /coins/{ticker}/specificSentiments:
 *  get:
 *      description: Get a specific coin's sentiment analysis values for a specific date range
 *      tags: [coins]
 *      produces: [application/json]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *          - name: startDate
 *            description: The unix timestamp start date of the range
 *            in: body
 *            type: integer
 *          - name: endDate
 *            description: The unix timestamp end date of the range
 *            in: body
 *            type: integer
 *      responses:
 *          200:
 *              description: Returns a specific coin's sentiment analysis values for a specific date range
 *          400:
 *              description: One or both of the dates are deemed invalid
 *          404:
 */
router.get('/:ticker/specificSentiments', function(req, res) {
    if (!req.body.startDate)
        return res.status(400).send({'message': 'Missing parameter: startDate'});
    if (!req.body.endDate)
        return res.status(400).send({'message': 'Missing parameter: endDate'});
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    var sentiment = [];
    dummyData[index].sentiments.forEach(function(item) {
        if (req.body.startDate <= item.date && item.date <= req.body.endDate)
            sentiment.push(item);
    });
    res.json({'sentiment': sentiment});
});


/**
 * @openapi
 * /coins/{ticker}/values:
 *  get:
 *      description: Get all of a specific coin's market values
 *      tags: [coins]
 *      produces: [application/json]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: Returns all of a specific coin's market values
 *          404:
 */
router.get('/:ticker/values', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    res.json({'marketValues': dummyData[index].marketValues});
});


/**
 * @openapi
 * /coins/{ticker}/recentValue:
 *  get:
 *      description: Get a specific coin's most recent market value
 *      tags: [coins]
 *      produces: [application/json]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: Returns a specific coin's most recent market value
 *          404:
 */
router.get('/:ticker/recentValue', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    res.json(dummyData[index].marketValues[dummyData[index].marketValues.length - 1]);
});



/**
 * @openapi
 * /coins/{ticker}/previousSentiments:
 *  get:
 *      description: Get a specific coin's market values for the previous number of days
 *      tags: [coins]
 *      produces: [application/json]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *          - name: numDays
 *            description: The number of previous days to get market values for
 *            in: body
 *            required: true
 *            type: integer
 *      responses:
 *          200:
 *              description: Returns a specific coin's market values for the previous number of days
 *          400:
 *              description: The number of previous days deemed invalid
 *          404:
 */
router.get('/:ticker/previousValues', function(req, res) {
    if (!req.body.numDays || req.body.numDays < 1)
        return res.status(400).send({'message': 'Invalid parameter: numDays'});
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    const today = new Date()
    today.setHours(0, 0, 0, 0);
    var values = [];
    dummyData[index].marketValues.forEach(function(item) {
        const valueDate = new Date(item.date)
        valueDate.setHours(0, 0, 0, 0);
        if (differenceInDate(today, valueDate) <= req.body.numDays)
            values.push(item);
    });
    res.json({'marketValues': values});
});


/**
 * @openapi
 * /coins/{ticker}/previousValues:
 *  get:
 *      description: Get a specific coin's market values for a specific date range
 *      tags: [coins]
 *      produces: [application/json]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *          - name: startDate
 *            description: The unix timestamp start date of the range
 *            in: body
 *            type: integer
 *          - name: endDate
 *            description: The unix timestamp end date of the range
 *            in: body
 *            type: integer
 *      responses:
 *          200:
 *              description: Returns a specific coin's market values for a specific date range
 *          400:
 *              description: One or both of the dates are deemed invalid
 *          404:
 */
router.get('/:ticker/specificValues', function(req, res) {
    if (!req.body.startDate)
        return res.status(400).send({'message': 'Missing parameter: startDate'});
    if (!req.body.endDate)
        return res.status(400).send({'message': 'Missing parameter: endDate'});
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    var values = [];
    dummyData[index].sentiments.forEach(function(item) {
        if (req.body.startDate <= item.date && item.date <= req.body.endDate)
            values.push(item);
    });
    res.json({'marketValues': values});
});



/**
 * @openapi
 * /coins/{ticker}:
 *  post:
 *      description: Create a new ticker entry
 *      tags: [coins]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *          409:
 *              description: The ticker already exists
 */
router.post('/:ticker', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index > -1)
        return res.status(409).send('Already exists');
    dummyData.push(req.body);
    res.sendStatus(200)
});


/**
 * @openapi
 * /coins/{ticker}/sentiment:
 *  put:
 *      description: Adds a new sentiment value to a specific coin
 *      tags: [coins]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *          - name: sentiment
 *            description: The sentiment value object of the coin
 *            in: body
 *            required: true
 *            type: object
 *            schema:
 *              $ref: '#/definitions/Sentiment'
 *      responses:
 *          200:
 *          400:
 *              description: Sentiment value object deemed invalid
 *          409:
 *              description: The sentiment value object at the given date already exists
 */
router.put('/:ticker/sentiment', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    if (!req.body.sentiment || !req.body.sentiment.date)
        return res.status(400).send({'message': 'Invalid parameter: sentiment'});
    if (dummyData[index].lastUpdatedSentiment == res.body.sentiment.date)
        return res.status(409).send('Already exists');
    dummyData[index].sentiments.push(req.body.sentiment);
    res.sendStatus(200);
});


/**
 * @openapi
 * /coins/{ticker}:
 *  put:
 *      description: Updates an existing ticker entry (!!Note that this currently deletes all sentiment and market values if exists)
 *      tags: [coins]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *          - name: tickerValues
 *            description: The sentiment value object of the coin
 *            in: body
 *            required: true
 *            type: object
 *      responses:
 *          200:
 *          400:
 *              description: Ticker values object deemed invalid
 *          404:
 *              description: The ticker does not exist
 */
router.put('/:ticker', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    if (!req.body.tickerValues)
        return res.status(400).send({'message': 'Invalid parameter: tickerValues'});
    dummyData[index] = req.body.tickerValues;
    res.sendStatus(200);
});


/**
 * @openapi
 * /coins/{ticker}:
 *  put:
 *      description: Add market data to ticker
 *      tags: [coins]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *          - name: tickerValues
 *            description: The sentiment value object of the coin
 *            in: body
 *            required: true
 *            type: object
 *      responses:
 *          200:
 *          400:
 *              description: Ticker values object deemed invalid
 *          404:
 *              description: The ticker does not exist
 *          409:
 *             description: The market value object at the given date already exists
 */
router.put('/:ticker/addValue', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    if (!req.body.marketValue)
        return res.status(400).send({'message': 'Bad request'});
    if (dummyData[index].lastUpdatedMarket == res.body.marketValue.date)
        return res.status(409).send({'message': 'Already exists'});
    dummyData[index].lastUpdatedMarket = res.body.marketValue.date;
    dummyData[index].marketValues.push(req.body.marketValue);
    res.sendStatus(200);
});


/**
 * @openapi
 * /coins/{ticker}:
 *  delete:
 *      description:  Delete an existing ticker entry
 *      tags: [coins]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *          404:
 *              description: The ticker does not exist
 */
router.delete('/:ticker', function(req, res) {
    var ticker = req.params.ticker;
    if (!(ticker in dummyData))
        return res.status(404).send({'message': 'Not found'});
    delete dummyData[ticker];
    res.sendStatus(200);
});


/**
 * @openapi
 * /coins/{ticker}/prediction:
 *  get:
 *      description: Get predicted values for a specific coin at a specific date
 *      tags: [coins]
 *      produces: [application/json]
 *      parameters:
 *          - name: ticker
 *            description: The ticker of the coin
 *            in: path
 *            required: true
 *            type: string
 *          - name: date
 *            description: The date to get a predicted values for
 *            in: body
 *            required: true
 *            type: integer
 *      responses:
 *          200:
 *              description: Returns predicted values for a specific coin at a specific date
 *          400:
 *              description: The date to provide predicted values for was deemed invalid
 *          404:
 *              description: The ticker does not exist
 */
// req.body.date is the date to predict for
router.get('/:ticker/prediction/', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    if (!req.body.date)
        return res.status(400).send({'message': 'Invalid parameter: date'});
    const predictionDate = new Date(req.body.date)
    predictionDate.setHours(0, 0, 0, 0);
    if (!(predictionDate in dummyData[index].predictions))
        return res.status(404).send({'message': 'Not found'});
    const prediction = dummyData[index].predictions[predictionDate];
    res.json({'prediction': prediction});
});


module.exports = router;
