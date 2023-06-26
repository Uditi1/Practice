import React, { useState } from "react";

const CharacterCounter = () => {

    const [characterCount, setCharactercount] = useState('')

    const handleChange = (event) => {
        setCharactercount(event.target.value)
    } 

  return (
    <div>
      <textarea value={characterCount} onChange={handleChange} />
      <p>Character count: {characterCount.length}</p>
    </div>
  );
};

export default CharacterCounter;
