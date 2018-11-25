import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';

import ReduxPersist from '../Config/ReduxPersist';

const updateReducers = store => {
  const reducerVersion = ReduxPersist.reducerVersion;

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        // Purge store
        persistStore(store, null).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, null);
      }
    })
    .catch(() => {
      persistStore(store, null);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

updateReducers.propTypes = {
  store: PropTypes.object,
};

export default { updateReducers };
