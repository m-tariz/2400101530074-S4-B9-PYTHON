import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={toggle}>click me</button>

      {show && <p>Hello, this is the text!</p>}
    </div>
  );
}

export default App;