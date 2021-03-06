//import React from 'react';


// still have to see wat to do with the id value and the datetiem thing

//import { Router, Switch, Route} from 'react-router-dom'
//import Link from 'react'
//import { Route } from 'react-router-dom'
//import styles from "./styles.css"

import { configureStore } from '../../store'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import React from 'react';


import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// my components
import Trips from '../trips/index'
import CreateTrip from '../CreateTrip/index'
import RegisterUser from '../RegiserUser/index'
import LoginUser from '../LoginUser/index'
import NavBar from '../navbar/index'
export const history = createBrowserHistory()
const store = configureStore()




// We give each route either a target `component`, or we can send functions in `render` or `children` 
// that return valid nodes. `children` always returns the given node whether there is a match or not.
const App = () => (

  <Router history={history}>
    <Provider store={store}>
      <Link to="/"></Link> {' '}
      <Link to={{pathname: '/login'}}></Link>{' '}
      <Link to={{pathname: '/createTrip'}}></Link>{' '}
      <Link to={{pathname: '/nav-bar/inicio'}}></Link>{' '}

      <Switch>
        <Route exact path="/" component={RegisterUser}/>
        <Route exact path="/login" component={LoginUser} />
        <Route path='/nav-bar/inicio' component={NavBar} >
          <NavBar></NavBar>
          <Trips></Trips>
        </Route>
        <Route path="/createTrip">
          <NavBar></NavBar>
          <CreateTrip></CreateTrip>

        </Route>
      </Switch>
    </Provider>
  </Router>

);

export default App
