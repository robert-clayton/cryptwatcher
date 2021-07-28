"""The website"""
from h2o_wave import main #pylint: disable=W0611
from h2o_wave import Q, site, on, handle_on, ui, app


async def init(q: Q):
    """Initialize the app"""
    icon_path, _ = site.upload_file('../res/favicon.ico')
    q.page['meta'] = ui.meta_card(box='', icon=icon_path, theme='dark')

    q.page['example'] = ui.markdown_card(
        title='Hello World',
        box='1 1 2 2',
        content='This is the content of my hello world card',
    )

    q.page.save()


@on('darkmode_toggle')
async def toggle_darkmode(q: Q):
    """Toggles dark mode"""
    q.page['meta'].theme = 'dark' if q.args.darkmode_toggle else 'default'


@app('/')
async def serve(q: Q):
    """Serves the main page"""
    if not q.client.initialized:
        q.client.initialized = True
        await init(q)
    await handle_on(q)
    await q.page.save()
