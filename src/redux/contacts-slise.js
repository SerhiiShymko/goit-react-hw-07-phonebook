import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState } from './initialState';
// import { apiContacts } from 'redux/apiContacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

// export const getContactsAction = () => {
//   return async dispatch => {
//     try {
//       dispatch(contactsSlice.actions.fetching());
//       const data = await apiContacts();
//       dispatch(contactsSlice.actions.fetchingSuccess(data));
//     } catch (error) {
//       dispatch(contactsSlice.actions.fetchingError(error));
//     }
//   };
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     fetching: state => {
//       state.isLoading = true;
//     },
//     fetchingSuccess: (state, { payload }) => {
//       state.isLoading = true;
//       state.error = '';
//       state.contacts = payload;
//     },
//     fetchingError: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persisteContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
