import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './features/card/cardSlice';
import productReducer from './features/products/productsSlice';
import userReducer from './features/users/usersSlice';
import { api } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    product: productReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
