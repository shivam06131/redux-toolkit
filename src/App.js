import { useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { decriment, incriment } from "./redux/counter";
import { useGetDataQuery } from "./redux/rtkQuery/services/data";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { data } = useGetDataQuery();
  console.log("data", data);

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
