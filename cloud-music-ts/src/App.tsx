import React from 'react';
import logo from './logo.svg';
import './App.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DiscoverMusic from './views/discoverMusic';
import PrivateFM from './views/privateFM';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">私人FM</Link>
          </li>
          <li>
            <Link to="/discoverMusic">发现音乐</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={PrivateFM}></Route>
          <Route path="/discoverMusic" component={DiscoverMusic}></Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
