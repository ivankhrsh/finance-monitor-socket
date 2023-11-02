import React from 'react';
import FinanceList from '../FinanceList/FinanceList';

function FinanceContainer() {
  return (
    <div className="h-full w-full">
      <div className="text-center">
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Finance App</h1>
          <p className="mt-2 text-base leading-7 text-gray-600">Price tickers data in realtime</p>
          <FinanceList/>
      </div>
    </div>
  );
}

export default FinanceContainer;
