"""Service that watches for new updates from cryptowat.ch and Twitter about given cryptos"""
# from datetime import datetime, timedelta

import cryptowatch as cw
from dotenv import dotenv_values

# Load environment variables and set api key
config = dotenv_values('.env')
cw.api_key = config['CRYPTOWATCH_PUBLIC_KEY']

def main() -> None:
    """Main."""
    print(help(cw.assets.get(asset='BTC')))

    # for market in cw.markets.list('kraken').markets:
    #      # Forge current market ticker, like KRAKEN:BTCUSD
    #     ticker = "{}:{}".format(market.exchange, market.pair).upper()
    #     # Request weekly candles for that market
    #     candles = cw.markets.get(ticker, ohlc=True, periods=["1w"])

    #     # Each candle is a list of [close_timestamp, open, high, low, close, volume, volume_quote]
    #     # Get close_timestamp, open and close from the most recent weekly candle
    #     close_ts, wkly_open, wkly_close = (
    #         candles.of_1w[-1][0],
    #         candles.of_1w[-1][1],
    #         candles.of_1w[-1][4],
    #     )

    #     # Compute market performance, skip if open was 0
    #     if wkly_open == 0:
    #         continue
    #     perf = (wkly_open - wkly_close) * 100 / wkly_open

    #     # If the market performance was 5% or more, print it
    #     if perf >= 5:
    #         open_ts = datetime.utcfromtimestamp(close_ts) - timedelta(days=7)
    #         print("{} gained {:.2f}% since {}".format(ticker, perf, open_ts))