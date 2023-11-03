import { socketConnect, socketDisconnect } from './store/slices/socket/socket.slice';
import socketSlice from './store/slices/socket/socket.slice';
import stocksSlice, { updateStocks } from './store/slices/stocks/stocks.slice';
import { StockData } from './types/stockItem.type';
import { StocksState } from './types/stockState.type';
import { typeConnect } from './types/typeConnect.type';

describe('socket state reducer', () => {
  const initialState = {
    connect: typeConnect.Disconnected
  };

  it('should handle initial state', () => {
    expect(
      socketSlice(undefined, {
        type: undefined
      })
    ).toEqual(initialState);
  });

  it('should handle connect', () => {
    const prevState = {
      connect: typeConnect.Disconnected
    };
    const nextState = {
      connect: typeConnect.Connected
    };

    expect(socketSlice(prevState, socketConnect())).toEqual(nextState);
  });

  it('should handle disconnect', () => {
    const prevState = {
      connect: typeConnect.Connected
    };
    const nextState = {
      connect: typeConnect.Disconnected
    };

    expect(socketSlice(prevState, socketDisconnect())).toEqual(nextState);
  });
});

describe('stocks state reducer', () => {
  const initialState: StocksState = {
    stocks: []
  };

  it('should handle initial state', () => {
    expect(
      stocksSlice(undefined, {
        type: undefined
      })
    ).toEqual(initialState);
  });

  it('should update state', () => {
    const stocks: StockData[] = [
      {
        ticker: 'AAPL',
        exchange: 'NASDAQ',
        price: 241.28,
        change: -17.03,
        change_percent: -7.06,
        dividend: 0.9,
        yield: 1.79,
        last_trade_time: '2023-11-02T20:23:29.000Z'
      }
    ];

    expect(stocksSlice(initialState, updateStocks({ stocks }))).toEqual({ stocks });
  });
});
