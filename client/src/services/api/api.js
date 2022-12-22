import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminapi",
  tagTypes: ["User", "Products"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (id) => ({
        url: `/general/user/${id}`,
      }),
      providesTags: ["User"],
    }),

    getProducts: builder.query({
      query: () => ({
        url: `/client/products`,
      }),
      providesTags: ["Products"],
    }),

    getCustomers: builder.query({
      query: () => ({
        url: `/client/customers`,
      }),
      providesTags: ["Customers"],
    }),

    // Doing the server side Pagination to get the transactions, hence sending the params
    getTransactions: builder.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: `/client/transactions`,
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
} = api;
