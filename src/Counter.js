import React, { useState, useEffect } from "react";

function Counter() {
  // Declare state variable 'count' and set its initial value to 0
  const [count, setCount] = useState(0);

  // useEffect hook to alert the count whenever it changes
  useEffect(() => {
    alert(`Count: ${count}`);
  }, [count]);

  // Function to handle button clicks
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Counter;
