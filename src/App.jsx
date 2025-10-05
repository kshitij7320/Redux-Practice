import React from 'react'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented } from './redux/counter/counterSlice';




const App = () => {
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar/>
      <h1>{count}</h1>
      {count}
      <button onClick={()=>dispatch(incremented())}>Increment</button>
      <button onClick={()=>dispatch(decremented())}>Decrement</button>
    </div>
  )
}

export default App