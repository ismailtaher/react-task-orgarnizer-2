import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = apiSlice({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ["tasks"],
  endpoints: (builder) => ({}),
});
