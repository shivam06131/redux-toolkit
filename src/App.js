import { useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { decriment, incriment } from "./redux/counter";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is : {count}</h1>
      <div>
        <button onClick={() => dispatch(incriment())}>+</button>
        <button onClick={() => dispatch(decriment())}>-</button>
      </div>
    </div>
  );
}
