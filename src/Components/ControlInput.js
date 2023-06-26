import React, { useState } from "react";

const ControlInput = () => {

    const [updateText , setupdateText] = useState(" ")

    const handleChange = (event) => {
        setupdateText(event.target.value)
    }

  return (
    <div>
        <div>
        <input type="text" value={updateText} onChange={handleChange}/>
        </div>

      <p>Input text: {updateText}</p>
      
    </div>
  );
};

export default ControlInput;
