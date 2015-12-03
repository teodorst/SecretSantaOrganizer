import React from 'react'
import  FacebookLogin from '../components/FacebookLogin.jsx'
import { connect } from 'react-redux'

const MainView = React.createClass({
  diplayName: "MainView",
  render: function() {
    return (
      <div>
        Hai noroc barosane
      </div>
      );
  }
});

function getState(state) {
  return {
    user: state.user,
    games: state.games,
    currentGame: state.currentGame
  }
}


export default connect(getState)(MainView);