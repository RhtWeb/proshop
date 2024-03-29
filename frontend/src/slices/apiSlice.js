import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constant';


const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// reducerPath : string | baseQuery : string(fetchQuery) | tagTypes : [string] | endpoints (builder)

const apiSlice = createApi({
  // reducerPath: 'api',  // api is by default so not needed to specify
  baseQuery,
  tagTypes: ['product', 'order', 'user'],
  endpoints: (builder) => ({}),
});

export default apiSlice;

