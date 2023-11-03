import { StockData } from './stockItem.type';

export interface ServerToClientListen {
  start: () => void;
  ticker: (stocks: StockData[]) => void;
}
