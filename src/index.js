import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Login from './containers/Login.jsx'
import MainView from './containers/MainView.jsx'
import Store from './stores/store.js'
import { Provider } from 'react-redux'

render((
  <Provider store={Store}>
    <Router>
      <Route name="login" path="/login" component={Login}/>
      <Route name="secrets" path="/secrets" component={MainView}/>
    </Router>
  </Provider>
), document.getElementById('app'))