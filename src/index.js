import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Login from './containers/Login.jsx'
import Store from './stores/store.js'
import { Provider } from 'react-redux'

render((
  <Provider store={Store}>
    <Router>
      <Route path="/" component={Login}/>
    </Router>
  </Provider>
), document.getElementById('app'))