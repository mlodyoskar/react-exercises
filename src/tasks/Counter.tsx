import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState(0)
    const handleIncrement = (number: number) => {
        setCount((prevoiusCount) => prevoiusCount + number)
    }

 return (
  <div>
   <h1>Counter: {count} </h1>
      <input type="number" value={inputValue} onChange={(e) => {
          setInputValue(parseInt(e.target.value))
      }}/>
   <button onClick={() => {
       handleIncrement(inputValue)
   }}>Increment : {count}</button>
   <button onClick={() => {
       setCount(count - 1)
   }}>Decrement: {count}</button>
   <button onClick={() => {
       setCount(0)
   }}>Reset: {count}</button>
  </div>
 );
};
