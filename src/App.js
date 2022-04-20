
import './App.css';
import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Events from './components/events'
import Buy from './components/buy'
import Tickets from './components/tickets'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ Events } exact/>
        <Route path="/buy" component={ Buy }/>
        <Route path="/tickets" component={ Tickets }/>
      </Switch>
    </div>
  );
}

export default App;
