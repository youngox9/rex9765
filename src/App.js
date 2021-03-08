import React, { useEffect } from 'react';
import 'reset-css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import '~~styles/style.scss';
import Gallery from '~~containers/Gallery';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Gallery />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
