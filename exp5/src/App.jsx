import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button onClick={handleLike}>Like 👍</button>
      <p>Likes: {likes}</p>
    </div>
  );
}

export default App;