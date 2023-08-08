import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

interface ICard {
  products: IProduct[];
}

const initialState: ICard = {
  products: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState: initialState,
  reducers: {},
});

export default cardSlice.reducer;
