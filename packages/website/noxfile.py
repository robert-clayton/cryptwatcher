"""Virtual environment management for testing and linting"""
import nox #pylint: disable=E0401
import nox_poetry #pylint: disable=E0401


nox.options.sessions = 'lint', 'tests', 'safety'


@nox_poetry.session
def lint(session: nox_poetry.session):
    """Lint using pylint."""
    locations = 'src', 'noxfile.py'
    requirements = str(session.poetry.export_requirements())
    session.install('pylint', f'-r{requirements}')
    session.run(
        'pylint',
        '--variable-rgx=^[a-z][a-z0-9]*((_[a-z0-9]+)*)?$',
        '--argument-rgx=^[a-z][a-z0-9]*((_[a-z0-9]+)*)?$',
        *locations,
    )


@nox_poetry.session
def tests(session: nox_poetry.session):
    """Runs the test suite."""
    requirements = str(session.poetry.export_requirements())
    session.install('pytest', f'-r{requirements}')
    session.run('pytest')


@nox_poetry.session
def safety(session: nox_poetry.session):
    """Run safety checks on dependencies."""
    requirements = str(session.poetry.export_requirements())
    session.install('safety')
    session.run('safety', 'check', f'-r{requirements}')
