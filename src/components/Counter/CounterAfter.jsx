import React, { useContext } from 'react'
import {CounterContent} from "./CounterContext"

function CounterAfter() {

  const {count, setCount} = useContext(CounterContent)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 10)
  }

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 10 )
  }

  return (
    <div className='box-text'>
      <h1 className="text_large">Какое число</h1>
      <span className='text-span'>{count}</span>
    <div className='btn-block'>
      <button
      className='btn_one'
      onClick={handleIncrement}>+</button>
      <button
      className='btn_two'
      onClick={handleDecrement}>-</button>
     </div>
    </div>
  )
}

export default CounterAfter
