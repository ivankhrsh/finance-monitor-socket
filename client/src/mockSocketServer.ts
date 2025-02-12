import Server from 'socket.io-client';

export const createMockClientServer = () => {
  const socket = Server('http://localhost:4000');

  socket.on('connection', () => {
    const tickerData = [
      {
        ticker: 'AAPL',
        exchange: 'NASDAQ',
        price: 150.0,
        change: 1.0,
        change_percent: 0.67,
        dividend: 0.5,
        yield: 1.0,
        last_trade_time: '2023-11-02T20:23:29.000Z'
      }
    ];

    // Simulate the 'start' event
    socket.emit('start', tickerData);
  });

  return socket;
};
