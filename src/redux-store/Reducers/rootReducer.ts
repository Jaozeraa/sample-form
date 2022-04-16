import { combineReducers } from 'redux';
import formReducer from './formReducer';

const appReducer = combineReducers({
  form: formReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
