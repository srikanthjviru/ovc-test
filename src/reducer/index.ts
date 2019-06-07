import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as root } from './root';

// Enable redux dev tool
const middleware = compose(applyMiddleware(thunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

// Create redux store
const store = createStore(
  combineReducers({
    root
  }),
  middleware,
);

export default store;
