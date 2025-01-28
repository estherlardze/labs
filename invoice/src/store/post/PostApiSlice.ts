import { createApi } from "@reduxjs/toolkit/query/react";
import data from "../../../data.json";

export const postApiSlice = createApi({
  reducerPath: "postApi",
  baseQuery: () => {
    return { data };
  },
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = postApiSlice;
