import React, { createContext, useState } from 'react'
import CounterAfter from './CounterAfter'

export const CounterContent = createContext()

function CounterContext() {

  const [count,setCount] = useState(0)

  return (
    <CounterContent.Provider value={{count,setCount}}>
       <h1 className='text-xxl'>Counter App</h1>
       <CounterAfter/>
    </CounterContent.Provider>
  )
}

export default CounterContext
