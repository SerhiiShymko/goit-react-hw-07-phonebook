import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filters-selectors';

export const selectContacts = store => store.contacts.items;

export const selectIsLoading = store => store.contacts.isLoading;
export const selectError = store => store.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
  }
);
