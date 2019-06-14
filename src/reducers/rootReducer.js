import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import simpleReducer from './simpleReducer';

const rootReducer = {
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  simpleReducer: simpleReducer,
  form: formReducer
}



export default combineReducers(rootReducer);
