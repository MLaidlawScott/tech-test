import { configureStore } from '@reduxjs/toolkit';
import { bodiesApi } from '@pe-test/celestial-store';

export const store = configureStore({
  reducer: {
    [bodiesApi.reducerPath]: bodiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bodiesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
