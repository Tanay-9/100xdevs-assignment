"use client";
import { useState } from "react";
export default function Interactive() {
  const [count, setcount] = useState(0);

  const handleCount = () => {
    setcount(c => c+1);
  }
  
  return (
    <div className="flex items-center justify-center flex-col">
      <p>this is an interactive page try clicking the counter button below</p>

      <button onClick={()=>handleCount()}>Counter</button>
      <p>{count}</p>
    </div>
  );
}
