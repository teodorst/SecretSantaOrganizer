import { createStore } from 'redux'
import SecretSanta from '../reducers/userReducer.js'

let store = createStore(SecretSanta);

export default store;