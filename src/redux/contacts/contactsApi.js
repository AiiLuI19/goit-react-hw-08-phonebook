import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62d549f3d4406e5235575432.mockapi.io/api/v1',
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
