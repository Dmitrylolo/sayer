import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';

import configureStore from './CreateStore';
import ReduxPersist from '../Config/ReduxPersist';

import NotesRedux from './NotesRedux';
import CommentsRedux from './CommentsRedux';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  notes: require('./NotesRedux').reducer,
  comments: require('./CommentsRedux').reducer,
  form: formReducer,
});

export default () => {
  let finalReducers = reducers;
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  let { store } = configureStore(finalReducers);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
