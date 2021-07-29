"""The website"""
from h2o_wave import main #pylint: disable=W0611
from h2o_wave import Q, site, on, handle_on, ui, app


async def init(q: Q):
    """Initialize the app"""
    q.page['meta'] = ui.meta_card(box='', theme='dark')

    q.page['header'] = ui.header_card(
        box='1 1 10 1',
        title='Cryptwatcher',
        subtitle='Take a chance and peer into the future of cryptocurrency!',
    )

    q.page['toolbar'] = ui.toolbar_card(
        box='1 10 10 1',
        items=[
            ui.command(
                name='new', label='New', icon='Add', items=[
                    ui.command(name='email', label='Email Message', icon='Mail'),
                    ui.command(name='calendar', label='Calendar Event', icon='Calendar'),
                ]
            ),
            ui.command(name='upload', label='Upload', icon='Upload'),
            ui.command(name='share', label='Share', icon='Share'),
            ui.command(name='download', label='Download', icon='Download'),
        ],
        secondary_items=[
            ui.command(name='tile', caption='Grid View', icon='Tiles'),
            ui.command(name='info', caption='Info', icon='Info'),
        ],
        overflow_items=[
            ui.command(name='move', label='Move to...', icon='MoveToFolder'),
            ui.command(name='copy', label='Copy to...', icon='Copy'),
            ui.command(name='rename', label='Rename', icon='Edit'),
        ],
    )

    await q.page.save()


@on('darkmode_toggle')
async def toggle_darkmode(q: Q):
    """Toggles dark mode"""
    q.page['meta'].theme = 'dark' if q.args.darkmode_toggle else 'default'


@on('#home')
async def remove_hash(q: Q):
    """Removes the hash from args"""
    del q.args['#']


@app('/')
async def serve(q: Q):
    """Serves the main page"""
    if not q.client.initialized:
        q.client.initialized = True
        await init(q)
    await handle_on(q)

    if '#' in q.args:
        hash_ = q.args['#']
        q.page['nav'] = ui.form_card(box='1 2 2 8', items=[
            ui.text(f'#={hash_}'),
            ui.button(name='#home', label='Back', primary=True),
        ])
    else:
        q.page['nav'] = ui.nav_card(
            box='1 2 2 8',
            value='#menu/spam',
            items=[
                ui.nav_group('Menu', items=[
                    ui.nav_item(name='#coins/nano', label='Nano'),
                    ui.nav_item(name='#coins/fil', label='Filecoin'),
                    ui.nav_item(name='#coin/ada', label='Cardano'),
                    ui.nav_item(name='#coin/xlm', label='Stellar'),
                    ui.nav_item(name='#coin/miota', label='IOTA'),
                ]),
                ui.nav_group('Help', items=[
                    ui.nav_item(name='#about', label='About', icon='Info'),
                    ui.nav_item(name='#support', label='Support', icon='Help'),
                ])
            ],
        )
    await q.page.save()
