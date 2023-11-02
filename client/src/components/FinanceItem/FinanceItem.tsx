import React, { FC } from 'react';

interface Props {
  item: StockData;
}

interface StockData {
  ticker: string;
  exchange: string;
  price: number;
  change: number;
  change_percent: number;
  dividend: number;
  yield: number;
  last_trade_time: string;
}

const FinanceItem: FC<Props> = ({ item }) => {
  const textColorClass = item.change_percent >= 1 ? 'text-green-600' : 'text-red-600';

  return (
    <div className="text-center p-4 rounded-lg border border-gray-300 shadow-md">
      <p className="font-bold text-xl mb-2">{item.ticker}</p>
      <p className="text-gray-700">${item.price.toFixed(2)}</p>
      <p className="text-gray-700">Change: ${item.change.toFixed(2)}</p>
      <p className={textColorClass}>
        Change Percent: {item.change_percent.toFixed(2)}%
      </p>
    </div>
  );
}

export default FinanceItem;
