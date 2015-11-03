import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { Login } from './containers/Login.jsx'

render((
  <Router>
    <Route path="/login" component={Login}/>
  </Router>
), document.body)