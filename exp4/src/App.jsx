import React, { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh"
      }}
    >
      <button onClick={() => setDark(!dark)}>toggle</button>
      <h1>{dark ? "Dark" : "Light"} Mode</h1>
    </div>
  );
}

export default App;