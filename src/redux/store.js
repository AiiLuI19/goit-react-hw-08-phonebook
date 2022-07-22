import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contacts/contactsApi';
import { filterSlice } from './filter/filterSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { default as authReducer } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleWar =>
    getDefaultMiddleWar({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),

  //   middleware: getDefaultMiddleWar =>
  //     getDefaultMiddleWar().concat(contactsApi.middleware),
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);
