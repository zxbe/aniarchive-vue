import * as preact from '/web_modules/preact.js';
import Router from '/web_modules/preact-router.js';
import HomePage from '../../pages/index.js';
import FilmPage from '../../pages/film.js';
import PersonPage from '../../pages/person.js';
import StudioPage from '../../pages/studio.js';

const App: preact.FunctionComponent = () => (
  <Router>
    <HomePage path="/" />
    <FilmPage path="/film/:id" />
    <PersonPage path="/person/:id" />
    <StudioPage path="/studio/:id" />
  </Router>
);

export default App;