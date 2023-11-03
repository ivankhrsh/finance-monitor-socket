import React, { useEffect } from 'react'
import FinanceList from '../FinanceList/FinanceList'
import { useAppDispatch } from '../../hooks/useDispatch'
import { socketConnect } from '../../store/slices/socket/socket.slice'
import FinanceHeader from '../FinanceHeader/FinanceHeader'

function FinanceContainer () {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(socketConnect())
  })

  return (
    <div className="h-full flex flex-col items-center justify-center mb-5">
      <div className="text-center max-w-screen-lg">
        <FinanceHeader />
        <FinanceList />
      </div>
    </div>
  )
}

export default FinanceContainer
