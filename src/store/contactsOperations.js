import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl : 'https://connections-api.herokuapp.com/',
  prepareHeaders: (headers, {getState}) => {
    const token = getState().user.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  }
})

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery,
  tagTypes: ['contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: (body) => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['contacts']
    }),
  }),
});

export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactsApi;
