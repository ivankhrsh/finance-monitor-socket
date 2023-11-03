import React, { FC } from 'react';
import StockTicker from '../../types/tickers.type';
import { ArrowDown } from '../../common/arrows/ArrowDown';
import { ArrowUp } from '../../common/arrows/ArrowUp';
import { StockData } from '../../types/stockItem.type';

interface Props {
  item: StockData;
}

const FinanceItem: FC<Props> = ({ item }) => {
  const companyName = StockTicker[item.ticker] || item.ticker;
  const isChangePercentPositive = item.change_percent >= 1;

  //check conditions which color to use for displaying item
  const textColorClass = isChangePercentPositive ? 'text-green-600' : 'text-red-600';
  const arrowColor = isChangePercentPositive ? 'bg-green-100' : 'bg-red-100';
  const arrowIcon = isChangePercentPositive ? <ArrowUp /> : <ArrowDown />;

  //proper formatting  for value with minus
  const changeValue = item.change < 0 ? `-$${Math.abs(item.change)}` : `$${item.change}`;

  return (
    <div
      data-testid="finance-item"
      className="flex items-center text-center w-80 h-48 p-4 md:p-8 rounded-lg border border-gray-300 shadow-md"
    >
      <div className={`w-10 h-10 p-2 rounded-lg ${arrowColor} text-xl mr-2`}>{arrowIcon}</div>

      <div className="w-3/4">
        <p className="font-bold text-xl mb-2 md:text-2xl">{companyName}</p>
        <p className="text-gray-700 md:text-lg">Price: ${item.price}</p>
        <p className="text-gray-700 md:text-lg">Change: {changeValue}</p>
        <p className={`text-lg ${textColorClass} md:text-xl`}>
          Change Percent: {item.change_percent}%
        </p>
      </div>
    </div>
  );
};

export default FinanceItem;
