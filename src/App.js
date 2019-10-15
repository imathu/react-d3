import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './components/Home';
import Navigation from './components/boilerplate/Navigation';
import TreemapExample from './components/Treemap';


function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/treemap">
            <TreemapExample />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
