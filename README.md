# cryptwatcher
<p align="center"><img src=./res/logo.png></p>

<p align="center">Monorepo for the CryptWatcher project.</p>


## Status
<p><img src=https://github.com/robert-clayton/cryptwatcher/actions/workflows/checks-predictor.yml/badge.svg?branch=master></p>
<p><img src=https://github.com/robert-clayton/cryptwatcher/actions/workflows/checks-watcher.yml/badge.svg?branch=master></p>
<p><img src=https://github.com/robert-clayton/cryptwatcher/actions/workflows/checks-website.yml/badge.svg?branch=master></p>
<p><img src=https://github.com/robert-clayton/cryptwatcher/actions/workflows/checks-api.yml/badge.svg?branch=master></p>

## Goal
To create a web app and all required backend services/api that displays predictions on the price of a crypto currency based on market conditions (e.g. ticker history, sentiment analysis, etc).


## Dependency Requirements
- Repo
    - [git](https://git-scm.com/)
- Website
    - [Python 3.9.6](https://www.python.org/downloads/release/python-396/)
    - [Poetry](https://python-poetry.org/)
    - [Nox](https://python-nox.readthedocs.io/en/stable/)
    - [h2o-wave](https://github.com/h2oai/wave/releases/)
- Watcher
    - [Python 3.9.6](https://www.python.org/downloads/release/python-396/)
    - [Poetry](https://python-poetry.org/)
    - [Nox](https://python-nox.readthedocs.io/en/stable/)
- Predictor
    - [Python 3.9.6](https://www.python.org/downloads/release/python-396/)
    - [Poetry](https://python-poetry.org/)
    - [Nox](https://python-nox.readthedocs.io/en/stable/)
- Models
    - [Python 3.9.6](https://www.python.org/downloads/release/python-396/)
    - [Poetry](https://python-poetry.org/)
- API
    - [Node.js 14.17.4 LTS](https://nodejs.org/en/)
    - [Yarn](https://classic.yarnpkg.com/en/docs/install)


## Roadmap
0. [x] Set up the repo
1. [ ] Create MVP version of the webapp
    - [ ] DevOps Implementation
        - [x] Automated testing
        - [x] Automated linting
        - [x] Automated safety checks
        - [ ] Automated deployment
    - [ ] UI
        - [ ] Create a base layout for the webapp
        - [x] Can switch between showing different cyptocurrencies
        - [ ] Show the name/price/info of the selected crypto
        - [ ] Link to the crypto currency's ticker history and other information sources
        - [ ] Show most recent sentiment analysis for the selected crypto
        - [ ] Show the predicted price of the selected crypto
        - [ ] Show the predicted price of the selected crypto in the graph
            - [ ] Include certainty range
    - [ ] Pulls data from database via WaveDB using API defined in the following step
2. [ ] Create an API for the webapp
    - [ ] DevOps Implementation
        - [ ] Automated testing
        - [x] Automated linting
        - [ ] Automated safety checks
        - [ ] Automated deployment
    - [x] Base API structure (e.g. endpoints, error handling, etc)
        - [x] PUT new ticker market data
        - [x] PUT updated ticker data
        - [x] POST new ticker
        - [x] POST new ticker sentiment values for date (e.g. positive, negative, neutral)
        - [x] GET all tickers list
        - [x] GET most recent market value of a ticker
        - [x] GET all market values of ticker
        - [x] GET all market values of ticker for the previous N days
        - [x] GET all market values of ticker for a specific range of dates
        - [x] GET most recent sentiment analysis value of ticker
        - [x] GET all sentiment analysis value of ticker
        - [x] GET all sentiment analysis values of ticker for the previous N days
        - [x] GET all sentiment analysis values of ticker for a specific range of dates
    - [ ] Update API to work with a database model
3. [ ] Create a headless service that obtains market data from various sources and feeds it into a remote SQLite database
    - [ ] DevOps Implementation
        - [x] Automated testing
        - [x] Automated linting
        - [x] Automated safety checks
        - [ ] Automated deployment
    - [ ] Data collection - Ticker History
    - [ ] Data collection - Tweets
4. [ ] Train a set of models that predict the price of a given crypto currency
    - [ ] Load historical market data from the database via the API
    - [ ] Train a model which performs sentiment analysis of a cyrptocurrency's tweets
    - [ ] Train a model to predict the price of a crypto currency based on market conditions
        - [ ] Chain output of sentiment analysis model into the price prediction model's input
    - [ ] Ability to deploy more accurately trained models
5. [ ] Create a headless service that interacts with the trained models and provides predictions to the remote database whenever a new market condition is encountered
    - [ ] DevOps Implementation
        - [x] Automated testing
        - [x] Automated linting
        - [x] Automated safety checks
        - [ ] Automated deployment
    - [ ] Watches market conditions for changes and updates the database accordingly
    - [ ] Interacts with the trained models to provide predictions
    - [ ] Provides predictions to the remote database
6. [ ] Create a ReactJS version of the webapp using the same API as the h2o-wave version
    - [ ] DevOps Implementation
        - [ ] Automated testing
        - [ ] Automated linting
        - [ ] Automated safety checks
        - [ ] Automated deployment
    - [ ] Uses the same API as the h2o-wave version
    - [ ] Interactive graphs
    - [ ] User-suggested cryptocurrencies to begin tracking