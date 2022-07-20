import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contacts/contactsApi';
import { filterSlice } from './filter/filterSlice';
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleWar =>
    getDefaultMiddleWar().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);
