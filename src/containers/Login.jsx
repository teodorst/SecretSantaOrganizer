import React from 'react'
import  FacebookLogin from '../components/FacebookLogin.jsx'
import { connect } from 'react-redux'
import { userLoginIn } from '../actions/userActions.js'

const Login = React.createClass({
  displayName: 'Login',
  render: function () {
    return (
        <div className="loginScreen">
          <FacebookLogin appId='428228900718823' loginHandler={this.handleLogIn}/>
        </div>
    );
  },

  handleLogIn: function(loginResponse) {
      const { dispatch } = this.props;
      dispatch(userLoginIn(loginResponse)); 
      
  }
});

function getState(state) {
  return {
    user: state.user,
    games: state.games,
    currentGame: state.currentGame
  }
}


export default connect(getState)(Login);

//export default cLogin;