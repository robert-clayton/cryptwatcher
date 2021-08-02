"""The website"""
import os
import webbrowser
from h2o_wave import main #pylint: disable=W0611
from h2o_wave import Q, on, handle_on, ui, app
from dotenv import load_dotenv, find_dotenv
import requests

# Load dotenv into global environment
load_dotenv(find_dotenv())

# Get coin data from the API
api_url = os.getenv('API_URL')


#TODO: Replace most of these once the API is connected to a database
####   Don't want to have the API return everything stored in dummy data
####   for now as that just seems like a _poor_ idea
####   Once the API is connected to a database, these will be replaced with
####   an API call that queries everything needed for a single session.
def get_all_coin_data() -> dict:
    """Get coins from the API"""
    return requests.get(f'{api_url}/coins').json()['coins']


def get_coin_data(ticker: str) -> dict:
    """Get coin data by ticker from the API"""
    return requests.get(f'{api_url}/coins/{ticker}').json()['coin']


def get_tickers() -> dict:
    """Get all tickers from the API"""
    return requests.get(f'{api_url}/coins/tickers').json()['tickers']


def get_coin_price(ticker: str) -> dict:
    """Get the current price of a coin from the API"""
    return requests.get(f'{api_url}/coins/{ticker}/recentValue').json()['marketValue']


def get_coin_name(ticker: str) -> dict:
    """Get the name of a coin"""
    response = requests.get(f'{api_url}/coins/{ticker}/name')
    if response.ok:
        return response.json()['name']
    return 'INVALID'

async def init(q: Q):
    """Initialize the app"""
    q.args.tickers = get_tickers()
    q.page['meta'] = ui.meta_card(box='', theme='default')
    q.page['header'] = ui.header_card(
        box='1 1 9 1',
        title='Cryptwatcher',
        subtitle='Take a chance and peer into the future of cryptocurrency!',
    )
    q.page['nav'] = ui.nav_card(
        box='1 2 2 8',
        value='#coins/',
        items=[
            ui.nav_group('Cryptocurrencies', items=[
                ui.nav_item(name=f'#coins/{ticker}', label=ticker)
                for ticker in q.args.tickers
            ]),
            ui.nav_group('Help', items=[
                ui.nav_item(name='#repo', label='Repository', icon='Info'),
                ui.nav_item(name='#api', label='API', icon='Info'),
            ])
        ],
    )
    q.page['toolbar'] = ui.toolbar_card(
        box='1 10 9 1',
        items=[],
        secondary_items=[],
        overflow_items=[],
    )
    await q.page.save()


@on('#repo')
async def open_github(q: Q):
    """Repo"""
    webbrowser.open('https://www.github.com/robert-clayton/cryptwatcher')
    await q.page.save()


@on('#api')
async def open_api(q: Q):
    """OpenAPI Documentation"""
    webbrowser.open('http://localhost:5000/openapi/')
    await q.page.save()


@on('darkmode_toggle')
async def toggle_darkmode(q: Q):
    """Toggles dark mode"""
    q.page['meta'].theme = 'dark' if q.args.darkmode_toggle else 'default'
    await q.page.save()


@on('#coins/{ticker}')
async def show_coins(q: Q):
    """Show the coin data"""
    ticker = q.args['#'].split('/')[1]
    q.page['info'] = ui.form_card(box='3 2 7 8', items=[
        ui.text_xl(get_coin_name(ticker)),
        ui.text(ticker),
        ui.text_s(f'${get_coin_price(ticker)["priceUSD"]}'),
        # ui.visualization(
        #     plot='',
        #     title=coin.upper(),
        #     height=300,
        #     width=300,
        #     type='line',
        #     data=f'https://api.cryptowat.ch/markets/{coin}/ohlc',
        # ),
        ui.button(name='#home', label='Back', primary=True),
    ])
    await q.page.save()

@on('#home')
async def go_home(q: Q):
    """Go home"""
    q.page['info'] = ui.form_card(box='3 2 7 8', items=[])
    await q.page.save()


@app('/')
async def serve(q: Q):
    """Serves the main page"""
    if not q.client.initialized:
        q.client.initialized = True
        q.args['#'] = '#home'
        await init(q)
    await handle_on(q)

    q.page['meta'].theme = not q.page['meta'].theme
    await q.page.save()
