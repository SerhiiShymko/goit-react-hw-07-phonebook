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
import { apiContacts } from './apiContacts';

export const store = configureStore({
  reducer: {
    contacts: persisteContactReducer,
    [apiContacts.reducerPath]: apiContacts.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware(
      {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      },
      apiContacts.middleware
    );
  },
});

export const persistor = persistStore(store);
