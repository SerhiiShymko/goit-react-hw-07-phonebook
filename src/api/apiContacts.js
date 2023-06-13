import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://648860930e2469c038fd986c.mockapi.io/api/v1',
  }),

  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});