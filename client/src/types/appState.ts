import { SocketState } from "./socketState";
import { StocksState } from "./stockState";

export interface AppState {
  socket: SocketState,
  stocks: StocksState
}