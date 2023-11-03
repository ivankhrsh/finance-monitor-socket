import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { store } from './store/slices';
import { Provider } from 'react-redux';
import FinanceList from './components/FinanceList/FinanceList';
import { updateStocks } from './store/slices/stocks/stocks.slice';
import { StockData } from './types/IStockData';

test('renders header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Finance App/i);
  expect(linkElement).toBeInTheDocument();
});

describe('FinanceList component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <FinanceList />
      </Provider>
    );
  });

  it('does not render items without data', () => {
    // Clear the store to ensure no data is present
    store.dispatch(updateStocks({ stocks: [] }));

    render(
      <Provider store={store}>
        <FinanceList />
      </Provider>
    );

    const financeItems = screen.queryByTestId('finance-item');
    expect(financeItems).toBeNull();
  });

  it('renders items when data is provided', () => {
    const stocks: StockData[] = [
      {
        ticker: "AAPL",
        exchange: "NASDAQ",
        price: 241.28,
        change: -17.03,
        change_percent: -7.06,
        dividend: 0.90,
        yield: 1.79,
        last_trade_time: "2023-11-02T20:23:29.000Z",
      },
      {
        ticker: "GOOGL",
        exchange: "NASDAQ",
        price: 215.44,
        change: 146.81,
        change_percent: 68.14,
        dividend: 0.10,
        yield: 1.72,
        last_trade_time: "2023-11-02T20:23:29.000Z",
      },
      {
        ticker: "MSFT",
        exchange: "NASDAQ",
        price: 126.57,
        change: -97.99,
        change_percent: -77.42,
        dividend: 0.91,
        yield: 0.97,
        last_trade_time: "2023-11-02T20:23:29.000Z",
      },
      {
        ticker: "AMZN",
        exchange: "NASDAQ",
        price: 118.06,
        change: -98.65,
        change_percent: -83.56,
        dividend: 0.38,
        yield: 1.35,
        last_trade_time: "2023-11-02T20:23:29.000Z",
      },
      {
        ticker: "FB",
        exchange: "NASDAQ",
        price: 216.21,
        change: 69.68,
        change_percent: 32.23,
        dividend: 0.28,
        yield: 0.96,
        last_trade_time: "2023-11-02T20:23:29.000Z",
      },
      {
        ticker: "TSLA",
        exchange: "NASDAQ",
        price: 241.69,
        change: 108.72,
        change_percent: 44.98,
        dividend: 0.74,
        yield: 0.13,
        last_trade_time: "2023-11-02T20:23:29.000Z",
      }
    ];

    // Update the store with the test stocks data
    store.dispatch(updateStocks({ stocks }));

    render(
      <Provider store={store}>
        <FinanceList />
      </Provider>
    );

    const financeItems = screen.queryAllByTestId('finance-item');

    expect(financeItems).toHaveLength(stocks.length);
  });
});
