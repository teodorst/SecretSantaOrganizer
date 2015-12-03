import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_REQUEST } from '../actions/userActions.js';
import { combineReducers } from 'redux'
import { getGames } from '../service/secretService.js';

const initialState = {
  user: null,
  games: [],
  currentGame: null
}

export function user( state = null, action ) {
  switch( action.type ) {
    case USER_LOGGED_IN:
      return { user: action.user };
    case USER_LOGGED_OUT:
      return null;
    default:
      return state;
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

