import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneBookReducer from './reducer';

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
