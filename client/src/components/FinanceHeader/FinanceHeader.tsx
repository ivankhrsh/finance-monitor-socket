import React from 'react'

function FinanceHeader () {
  return (
    <>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Finance App 📈
      </h1>
      <p className="mt-2 text-base leading-7 text-gray-600 mb-2">Stock market prices in realtime</p>
      <a
        href="https://github.com/ivankhrsh/finance-test-task"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-500 hover:rounded-lg hover:bg-yellow-100 hover: p-1"
      >
        📂 Github
      </a>
    </>
  )
}

export default FinanceHeader
