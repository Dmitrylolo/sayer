import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Rehydration from '../Services/Rehydration';
import ReduxPersist from '../Config/ReduxPersist';
import Config from '../Config/DebugConfig';

// creates the store
export default rootReducer => {
  /* ------------- Redux Configuration ------------- */
  const middleware = [];

  /* ------------- Thunk Middleware ------------- */
  middleware.push(thunk);

  /* ------------- Assemble Middleware ------------- */

  const store = createStore(rootReducer, applyMiddleware(...middleware));

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store);
  }

  return {
    store,
  };
};
