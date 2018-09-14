import React, { Component, Fragment} from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Wrld from './components/Wrld'
import Gmaps from './components/Gmaps'
import './style/index.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/wrld" component={Wrld}/>
          <Route exact path="/gmaps" component={Gmaps}/>
          <Route exact path="/" component={Home}/>
          <Route component={Home}/>
        </Switch>
      </Fragment>
    )
  }
}

export default App;
