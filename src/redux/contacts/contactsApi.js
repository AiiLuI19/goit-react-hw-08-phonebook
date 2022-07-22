import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log('token>>>>', token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['contacts'],
  endpoints: source => ({
    getContact: source.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    deleteContact: source.mutation({
      query: contactId => {
        return { url: `/contacts/${contactId}`, method: 'DELETE' };
      },
      invalidatesTags: ['contacts'],
    }),
    addContact: source.mutation({
      query: contact => {
        return {
          url: '/contacts',
          method: 'POST',
          body: contact,
        };
      },
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
