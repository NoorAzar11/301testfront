import React from 'react';
import Header from './componets/Header';
import Home from './componets/Home';
import FavPage from './componets/FavPage'
import {
 Router,
  Switch,
  Route
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';


import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
      <Switch>
        <Route exact path="/"><Home /> </Route>
        <Route exact path="/fav"><FavPage/> </Route>
      </Switch>
    </Router>

    )
  }
}

export default App
