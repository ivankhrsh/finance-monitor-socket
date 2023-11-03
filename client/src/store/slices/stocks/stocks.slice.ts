import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StocksState } from '../../../types/stockState';
import { StockData } from '../../../types/IStockData';

const initialState: StocksState = {
  stocks: []
}

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    updateStocks(state, action: PayloadAction<{ stocks: StockData[]}>) {
      state.stocks = action.payload.stocks;
    },
  }
});

export const { updateStocks} = stocksSlice.actions;
export default stocksSlice.reducer;