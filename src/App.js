import React, { createContext, useEffect } from 'react';
import 'reset-css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import '~~styles/style.scss';
import Gallery from '~~containers/Gallery';
import Store from '~~src/Store';

function App() {
  return (
    <Store>
      <Router>
        <Switch>
          <Route path="/">
            <Gallery />
          </Route>
          <Route path="/gallery">
            <Switch>
              <Gallery />
            </Switch>
          </Route>
        </Switch>
      </Router>
    </Store>
  );
}

export default App;
