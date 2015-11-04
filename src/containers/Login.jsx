import React from 'react'
import  FacebookLogin from '../components/FacebookLogin.jsx'
import { connect } from 'react-redux'

const Login = React.createClass({
  displayName: 'Login',
  render: function () {
    return (
        <div className="loginScreen">
          <FacebookLogin appId='428228900718823' />
        </div>
    );
  }
});

connect( state => ({
  user: state.user,
  games: state.games,
  currentGame: state.currentGame
}))
(
Login  
);

export default Login;