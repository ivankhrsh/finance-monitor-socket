import React from 'react';
import FinanceItem from '../FinanceItem/FinanceItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { StockData } from '../../types/IStockData';

function FinanceList() {
  const stocks = useAppSelector<StockData[]>(state => state.stocks.stocks);

  return (
    <div className="mt-10 flex flex-col items-center flex-wrap gap-4 px-5 sm:flex-row sm:justify-center sm:items-center sm:gap-x-6">
      {stocks && (
        stocks.map(item => (
          <FinanceItem key={item.ticker} item={item} />
        ))
      )}

      {(stocks && stocks.length === 0) && (
        <h2 className='leading-7 text-gray-900 text-lg'>
          No active stocks...
        </h2>
      )}
    </div>
  );
}


export default FinanceList;
