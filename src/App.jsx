import React from 'react'
import {Header} from './components/header'
import {Balance} from './components/balance'
import {incomeExpenses} from './components/incomeexp'
const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
      <Balance />
      <div className="subcontainer">
      <incomeExpenses />
      </div>
      </div>
    </div>
  )
}

export default App