import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataAPi = createApi({
  reducerPath: "DataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://4948710a-b440-49a3-b8df-ff017fdc981c.mock.pstmn.io"
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "search"
    })
  })
});

export const { useGetDataQuery } = dataAPi;
