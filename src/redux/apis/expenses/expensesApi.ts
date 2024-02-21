import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const expenseApi = createApi({
  reducerPath: 'expensesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.10.6:3000/epenses/' }),
  endpoints: (builder) => ({

    getExpenses: builder.query({
      query: () => ``,
    }),

    createExpense: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),

  }),
})

export const { useGetExpensesQuery, useCreateExpenseMutation } = expenseApi
