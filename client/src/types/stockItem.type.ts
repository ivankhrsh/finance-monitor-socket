import StockTicker from './tickers.type';

export type StockData = {
  [K in keyof typeof StockTicker]: {
    ticker: K;
    exchange: string;
    price: number;
    change: number;
    change_percent: number;
    dividend: number;
    yield: number;
    last_trade_time: string;
  };
}[keyof typeof StockTicker];
