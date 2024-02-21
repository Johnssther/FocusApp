import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.10.6:3000/auth/' }),
  endpoints: (builder) => ({

    onLogin: builder.mutation({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
    }),

  }),
})

export const { useOnLoginMutation } = authApi
