import { useState } from 'react'

const Counter = (props) => {
  
    const [count, setCount] = useState(props.initialValue)

    const increment = () => {
        setCount (count + 3)// Para que incremente de 3 en 3
    }
    const decrement = () => {
        setCount (count - 1)
    }
  
  
  
    return (
    <div>Counter: {count}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter