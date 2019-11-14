import React from 'react';
import {Switch, Route} from 'react-router-dom'

import About from '../Routes/About/About'
import Contact from '../Routes/Contact/Contact'
import Landing from '../Routes/Landing/Landing'
import NotFound from '../Routes/NotFound/NotFound'
import ProjectPage from '../Routes/ProjectPage/ProjectPage'
import ProjectsPage from '../Routes/ProjectsPage/ProjectsPage'

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ProjectBar from '../Components/ProjectBar/ProjectBar'
import SidebarHider from '../Components/SidebarHider/SidebarHider'

import './App.css';

class App extends React.Component {

  state = {
    hiddenBar: false
  }

  toggleHide = () => {
    this.setState({ hiddenBar: !this.state.hiddenBar })
  }

  render() {
    const { hiddenBar } = this.state
    return (
      <div className="App container">
        <Header />
        <Footer />
        <Route exact path={'/projects'} render={() => <ProjectBar hiddenBar={hiddenBar}/>}/>
        <Route path={'/project/:name'} render={() => <ProjectBar hiddenBar={hiddenBar}/>}/>
        <Route exact path={'/projects'} render={() => <SidebarHider hiddenBar={hiddenBar} toggleHide={this.toggleHide}/>}/>
        <Route path={'/project/:name'} render={() => <SidebarHider hiddenBar={hiddenBar} toggleHide={this.toggleHide}/>}/>
        <Switch>
          <Route exact path={'/'} component={Landing}/>
          <Route exact path={'/about'} component={About}/>
          <Route exact path={'/contact'} component={Contact}/>
          <Route exact path={'/projects'} render={() => <ProjectsPage hiddenBar={hiddenBar}/>}/>/>
          <Route path={'/project/:index'} render={() => <ProjectPage hiddenBar={hiddenBar}/>}/>/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
