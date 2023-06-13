import { configureStore } from '@reduxjs/toolkit';
import { persisteContactReducer } from './contacts-slise';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsApi } from '../api/apiContacts';

export const store = configureStore({
  reducer: {
    contacts: persisteContactReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware(
      {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      },
      contactsApi.middleware
    );
  },
});

export const persistor = persistStore(store);
