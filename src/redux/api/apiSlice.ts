import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => '/product',
    }),
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = api;
