import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminapi",
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery } = api;