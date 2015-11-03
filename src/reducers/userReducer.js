import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_REQUEST } from '../actions/userActions.js';
import { combineReducers } from 'redux'

const initialState = {
  user: null,
  games: [],
  currentGame: null
}

export function user( state = null, action ) {
  switch( action.type ) {
    case USER_LOGGED_IN
      return 'gigel';
    case USER_LOGGED_OUT
      return null;
  }
}

export function games ( state = [], action ) {
  return [];
}

export function currentGame(state = null, action ) {
  return null;
}

const SecretSanta = combineReducers({
  user: user,
  games: games,
  currentGame: currentGame
});

export default SecretSanta;

