import { AsyncStorage } from 'react-native';

import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    blacklist: ['notes', 'comments'],
    whitelist: [],
    transforms: [immutablePersistenceTransform],
  },
};

export default REDUX_PERSIST;
