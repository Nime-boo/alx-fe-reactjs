import { useState } from "react"; // Import the useState Hook

function Counter() {
  // Create a state variable called "count" and a function "setCount" to update it
  const [count, setCount] = useState(0); // Start at 0

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Current Count: {count}</p>
      
      {/* Buttons to control the counter */}
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
      >
        Increment
      </button>
      
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
      >
        Decrement
      </button>
      
      <button 
        onClick={() => setCount(0)} 
        style={{ margin: "5px", padding: "10px", fontSize: "16px", backgroundColor: "red", color: "white" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
