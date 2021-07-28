"""The website"""
from h2o_wave import main #pylint: disable=W0611
from h2o_wave import Q, on, handle_on, ui, app


async def init(q: Q):
    """Initialize the app"""
    q.page['meta'] = ui.meta_card(
        box='',
        icon='../res/favicon.ico',
        theme='dark',
    )


@on('darkmode_toggle')
async def toggle_darkmode(q: Q):
    """Toggles dark mode"""
    q.page['meta'].theme = 'dark' if q.args.darkmode_toggle else 'default'


@app('/')
async def serve(q: Q):
    """Serves the main page"""
    if not q.client.initialized:
        q.client.initialized = True
    await handle_on(q)
    await q.page.save()
