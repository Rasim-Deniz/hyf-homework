import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(counter);
    };
  }, [count]);

  return (
    <p>
      You have used <span id="count">{count}</span> seconds on this website
    </p>
  );
}

export default Counter;
