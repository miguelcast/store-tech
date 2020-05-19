import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';

import reducer from '../store/rootReducer';

const persistConfig = {
  key: 'storeTech',
  storage: AsyncStorage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      thunk: false,
      serializableCheck: false
    })
  });
  const persistor = persistStore(store);
  return {
    store,
    persistor
  };
};
