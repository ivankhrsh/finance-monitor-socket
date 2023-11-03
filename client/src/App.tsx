import React from 'react';
import FinanceContainer from './components/FinanceContainer/FinanceContainer';
import { ToastContainer } from 'react-toast';

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />
      <FinanceContainer />
    </>
  );
}

export default App;
