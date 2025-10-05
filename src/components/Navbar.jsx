import React, { useState } from 'react'

const Navbar = () => {

    const [counter, setCounter] = useState(0);

    const increment=()=>{
        setCounter(counter + 1);
    }
    const decrement=()=>{
        setCounter(counter - 1);
    }


  return (
    <div>
        <h1>Count: {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Navbar