import {createSlice } from '@reduxjs/toolkit'
import { SocketState } from '../../../types/socketState'
import { typeConnect } from '../../../types/typeConnect'

const initialState: SocketState = {
  connect: typeConnect.Disconnected
}

const socketSlice = createSlice({
  name: 'webSocket',
  initialState,
  reducers: {
    socketConnect(state) {
      state.connect = typeConnect.Connected;
    },
    socketDisconnect(state) {
      state.connect = typeConnect.Disconnected;
    }
  }
});

export const { socketConnect, socketDisconnect} = socketSlice.actions;
export default socketSlice.reducer;