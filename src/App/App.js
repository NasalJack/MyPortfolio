import React from 'react';
import {Switch, Route} from 'react-router-dom'

//import routes

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={'/'} />
          <Route exact path={'/About'} />
          <Route exact path={'/Contact'} />
          <Route exact path={'/Projects'} />
          <Route path={'/Project/:name'} />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
