import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Facebook from 'react-facebook-login';

export default FacebookLogin = connect( state => ({
  user: state.user,
  games: state.games,
  currentGame: state.currentGame
}))(
React.createClass({
  displayName: 'FacebookLogin',
  render: function() {
    return (
      <Facebook 
        appId='428228900718823'
        className='facebook-login'
        scope='public_profile, email, user_birthday'
        loginHandler={ this.state.resultFacebookLogin } />
    );
  } 
})
);