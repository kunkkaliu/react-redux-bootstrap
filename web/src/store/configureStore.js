import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import promiseMiddleware from '../middlewares/promiseMiddleware'

import common from '../reducers/common';

const reducer = combineReducers({common});
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']})
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
