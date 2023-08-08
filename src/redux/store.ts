import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './features/card/cardSlice';
import productReducer from './features/products/productsSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
