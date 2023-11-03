import { io, Socket } from "socket.io-client";
import { Middleware } from "@reduxjs/toolkit"
import { SocketState } from "../../types/socketState";
import { AppState } from "../../types/appState";
import { typeConnect } from "../../types/typeConnect";
import appConfig from '../../app-config.config.json'
import { ServerToClientListen } from "../../types/serverToClientListen";
import { updateStocks } from "../slices/stocks/stocks.slice";
import { toast } from "react-toast";

let socket: Socket<ServerToClientListen>;
let reconnectionAttempts = 0;
const maxReconnectionAttempts = 1;
let errorDisplayed = false;

export const socketMiddleware: Middleware<{}, AppState> = store => next => action => {
  const socketState: SocketState = store.getState().socket;
  
  if (socketState.connect === typeConnect.Disconnected && !socket) {
    socket = io(appConfig.webSocket.connect, {
      reconnection: true,
      reconnectionAttempts: maxReconnectionAttempts,
    });

    socket.on('connect', () => {
      reconnectionAttempts = 0;
      errorDisplayed = false;
      socket.emit('start');
    });

    socket.on('connect_error', () => {
      reconnectionAttempts++;
      if (reconnectionAttempts >= maxReconnectionAttempts && !errorDisplayed) {
        errorDisplayed = true;
        toast.error('Can\'t connect to server, please try again later');
      }
    });

    socket.on('ticker', (stocks) => {
      store.dispatch(updateStocks({ stocks }))
    });
  }

  next(action);
}
