import { StockData } from "./IStockData";

export interface ServerToClientListen {
  start: () => void;
  ticker: ( stocks: StockData[]) => void;
}