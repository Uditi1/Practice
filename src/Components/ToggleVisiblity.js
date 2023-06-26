import React, { useState } from "react";

const ToggleVisiblity = () => {

    const [show, setShow] = useState(false)

  return (
    <div>
     {show && <button onClick={() => setShow(false)}>Hide Text</button>}
     {!show && <button onClick={() => setShow(true)}>Show Text</button>}
      {show && <p>here is show</p> }
      {!show && " "}
    </div>
  );
};

export default ToggleVisiblity;
