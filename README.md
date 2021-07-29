# cryptwatcher
Monorepo for a crypto predictor web app

## Goal
To create a web app that displays predictions on the price of a crypto currency based on market conditions (e.g. ticker history, sentiment analysis, etc).

## Roadmap
0. [x] Set up the repo
1. [ ] Create MVP version of the webapp
    - [ ] Automated testing 
    - [x] Automated linting
    - [x] Automated safety checks
    - [ ] Automated deployment
    - [ ] UI
        - [ ] Create a base layout for the webapp
        - [ ] Can switch between showing different cyptocurrencies
        - [ ] Show the name/price/info of the selected crypto
        - [ ] Link to the crypto currency's ticker history and other information sources
        - [ ] Show most recent sentiment analysis for the selected crypto
        - [ ] Show the predicted price of the selected crypto
        - [ ] Show the predicted price of the selected crypto in the graph
            - [ ] Include certainty range
    - [ ] Pulls data from database via WaveDB using API defined in the following step
2. [ ] Create an API for the webapp
    - [ ] Automated testing
    - [ ] Automated linting
    - [ ] Automated safety checks
    - [ ] Automated deployment
    - [ ] Base API structure (e.g. endpoints, error handling, etc)
        - [ ] POST new ticker value
        - [ ] POST new ticker
        - [ ] POST new ticker sentiment values for date (e.g. positive, negative, neutral)
        - [ ] GET all tickers list
        - [ ] GET all market values of ticker
        - [ ] GET all market values of ticker for a specific day
        - [ ] GET all market values of ticker for a specific month
        - [ ] GET all market values of ticker for a specific year
        - [ ] GET all market values of ticker for a specific range of dates
        - [ ] GET all sentiment values of ticker
        - [ ] GET all sentiment values of ticker for a specific day
        - [ ] GET all sentiment values of ticker for a specific month
        - [ ] GET all sentiment values of ticker for a specific year
        - [ ] GET all sentiment values of ticker for a specific range of dates
3. [ ] Create a headless service that obtains market data from various sources and feeds it into a remote SQLite database
    - [ ] Automated testing
    - [ ] Automated linting
    - [ ] Automated safety checks
    - [ ] Automated deployment
    - [ ] Data collection - Ticker History
    - [ ] Data collection - Tweets
4. [ ] Train a set of models that predict the price of a given crypto currency
    - [ ] Load historical market data from the database via the API
    - [ ] Train a model to predict the price of a crypto currency based on market conditions
    - [ ] Ability to deploy more accurately trained models
5. [ ] Create a headless service that interacts with the trained models and provides predictions to the remote database whenever a new market condition is encountered
    - [ ] Automated testing
    - [ ] Automated linting
    - [ ] Automated safety checks
    - [ ] Automated deployment
    - [ ] Watches market conditions for changes and updates the database accordingly
    - [ ] Interacts with the trained models to provide predictions
    - [ ] Provides predictions to the remote database
6. [ ] Create a ReactJS version of the webapp using the same API as the h2o-wave version
    - [ ] Automated testing
    - [ ] Automated linting
    - [ ] Automated safety checks
    - [ ] Automated deployment
    - [ ] Uses the same API as the h2o-wave version
    - [ ] Interactive graphs
    - [ ] User-suggested cryptocurrencies to begin tracking