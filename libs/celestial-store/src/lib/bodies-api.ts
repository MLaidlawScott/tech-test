import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICelestialBody } from '@pe-test/shared-models';

export const bodiesApi = createApi({
  reducerPath: 'bodies',
  baseQuery: fetchBaseQuery({ baseUrl: 'h' }),
  endpoints: (builder) => ({
    getBodies: builder.query<ICelestialBody[], void>({
      query: () => 'bodies',
    }),
  }),
});

export const { useGetBodiesQuery } = bodiesApi;
