import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.10.6:3000/auth/' }),
  endpoints: (builder) => ({

    saveUser: builder.query({
      query: (name) => `register`,
    }),
    
    createUser: builder.mutation({
      query: (body) => ({
        url: 'register',
        method: 'POST',
        body,
      }),
    }),

  }),
})

export const { useSaveUserQuery, useCreateUserMutation } = userApi
