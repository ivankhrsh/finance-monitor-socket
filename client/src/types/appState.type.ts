import { SocketState } from './socketState.type';
import { StocksState } from './stockState.type';

export interface AppState {
  socket: SocketState;
  stocks: StocksState;
}
