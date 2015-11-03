import React, { Component } from 'react'
import { FacebookLogin } from '../components/FacebookLogin.jsx'
import { connect } from 'react-redux'

export default Login = connect( state => ({
  user: state.user,
  games: state.games,
  currentGame: state.currentGame
}))
(
  React.createClass({
    displayName: 'Login',
    render: function () {
      return (
          <div className="loginScreen">
            <FacebookLogin />
          </div>
      );
    }
  })
);
