import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>GitHub Actions Demo</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

           <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;