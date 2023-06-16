// import { configureStore } from '@reduxjs/toolkit';

// import { apiContacts } from './apiContacts';

// export const store = configureStore({
//   reducer: {

//     [apiContacts.reducerPath]: apiContacts.reducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware(

//       apiContacts.middleware
//     );
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts-slise';
import { filterReducer } from './filter/filter-slise';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
