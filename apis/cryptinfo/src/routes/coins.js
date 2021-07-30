const differenceInDate = require("../helpers/difference_in_date");
const express = require("express");
const router = express.Router();
const dummyData = [{
        "name": "Bitcoin",
        "ticker": "BTC",
        "rank": "1",
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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
        "price_usd": "10,000.00",
        "price_btc": "1.0",
        "24h_volume_usd": "1,000,000,000.00",
        "market_cap_usd": "10,000,000,000.00",
        "available_supply": "10,000,000,000.00",
        "total_supply": "10,000,000,000.00",
        "percent_change_1h": "0.00",
        "percent_change_24h": "0.00",
        "percent_change_7d": "0.00",
        "last_updated_sentiment": "1516244800000",
        "last_updated_market": "1516244800000",
        "market_values": [{
            "date": 1627629490000,
            "price_usd": "10,000.00",
            "price_btc": "1.0",
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

// Get all coins' data
router.get('/', function(req, res) {
    res.json(dummyData);
});


// Get a list of all coins' tickers
router.get('/tickers', function(req, res) {
    res.json({'tickers' : dummyData.map(({ ticker }) => ticker)});
});


// Get a specific coin's data
router.get('/:ticker', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    res.json(dummyData[index]);
});


// Get all of a specific coin's sentiment analysis values
router.get('/:ticker/sentiments', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    res.json({'sentiment': dummyData[index].sentiments});
});


// Get a specific coin's recent sentiment analysis values
router.get('/:ticker/recentSentiment', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    res.json(dummyData[index].sentiments[dummyData[index].sentiments.length - 1]);
});


// Get a specific coin's sentiment analysis values for the previous number of days
router.get('/:ticker/previousSentiments/:numDays', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    const today = new Date()
    today.setHours(0, 0, 0, 0);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    var sentiment = [];
    dummyData[index].sentiments.forEach(function(item) {
        const sentimentDate = new Date(item.date)
        sentimentDate.setHours(0, 0, 0, 0);
        if (differenceInDate(today, sentimentDate) <= req.params.numDays)
            sentiment.push(item);
    });
    res.json({'sentiment': sentiment});
});


// Get a specific coin's sentiment analysis values for a specific date range
router.get('/:ticker/specificSentiments', function(req, res) {
    if (!req.params.startDate || !req.params.endDate)
        return res.status(400).send({'message': 'Bad request'});
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


// Get all of a specific coin's market values
router.get('/:ticker/values', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    res.json({'market_values': dummyData[index].market_values});
});


// Get a specific coin's recent sentiment analysis values
router.get('/:ticker/recentValue', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    res.json(dummyData[index].market_values[dummyData[index].market_values.length - 1]);
});


// Get a specific coin's market values for the previous number of days
router.get('/:ticker/previousValues/:numDays', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    const today = new Date()
    today.setHours(0, 0, 0, 0);
    var values = [];
    dummyData[index].market_values.forEach(function(item) {
        const valueDate = new Date(item.date)
        valueDate.setHours(0, 0, 0, 0);
        if (differenceInDate(today, valueDate) <= req.params.numDays)
            values.push(item);
    });
    res.json({'market_values': values});
});


// Get a specific coin's market values for a specific date range
router.get('/:ticker/specificValues', function(req, res) {
    if (!req.params.startDate || !req.params.endDate)
        return res.status(400).send({'message': 'Bad request'});
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    var values = [];
    dummyData[index].sentiments.forEach(function(item) {
        if (req.body.startDate <= item.date && item.date <= req.body.endDate)
            values.push(item);
    });
    res.json({'market_values': values});
});


// Create a new ticker entry
router.post('/:ticker', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index > -1)
        return res.status(409).send('Already exists');
    dummyData.push(req.body);
    res.sendStatus(200)
});


// Create new sentiment value for date
router.put('/:ticker/sentiment', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    if (!req.body.sentiment)
        return res.status(400).send({'message': 'Bad request'});
    if (dummyData[index].last_updated_sentiment == res.body.sentiment.date)
        return res.status(409).send('Already exists');
    dummyData[index].sentiments.push(req.body.sentiment);
    res.sendStatus(200);
});


// Update an existing ticker entry
// Note that this currently deletes all sentiment and market values if exists
router.put('/:ticker', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    dummyData[index] = req.body;
    res.sendStatus(200);
});


// Add market data to ticker
router.put('/:ticker/addValue', function(req, res) {
    const index = getTickerIndex(req.params.ticker);
    if (index == -1)
        return res.status(404).send({'message': 'Not found'});
    if (!req.body.market_value)
        return res.status(400).send({'message': 'Bad request'});
    if (dummyData[index].last_updated_market == res.body.market_value.date)
        return res.status(409).send({'message': 'Already exists'});
    dummyData[index].last_updated_market = res.body.market_value.date;
    dummyData[index].market_values.push(req.body.market_value);
    res.sendStatus(200);
});


// Delete an existing ticker entry
router.delete('/:ticker', function(req, res) {
    var ticker = req.params.ticker;
    if (!(ticker in dummyData))
        return res.status(404).send({'message': 'Not found'});
    delete dummyData[ticker];
    res.sendStatus(200);
});


module.exports = router;
