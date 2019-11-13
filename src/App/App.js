import React from 'react';
import {Switch, Route} from 'react-router-dom'

import About from '../Routes/About/About'
import Contact from '../Routes/Contact/Contact'
import Landing from '../Routes/Landing/Landing'
import NotFound from '../Routes/NotFound/NotFound'
import ProjectPage from '../Routes/ProjectPage/ProjectPage'
import Projects from '../Routes/Projects/Projects'

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ProjectBar from '../Components/ProjectBar/ProjectBar'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Footer />
        <Route exact path={'/projects'} component={ProjectBar}/>
        <Route path={'/project/:name'} component={ProjectBar}/>
        <Switch>
          <Route exact path={'/'} component={Landing}/>
          <Route exact path={'/about'} component={About}/>
          <Route exact path={'/contact'} component={Contact}/>
          <Route exact path={'/projects'} component={Projects}/>
          <Route path={'/project/:name'} component={ProjectPage}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
