import React, { useState } from 'react'

const ColorSwitcher = () => {

const [bgColor, setBgColor] = useState('')

const handleChange =(event) => {
    setBgColor(event.target.value)
}

  return (
    <div>
    <select onChange={handleChange}>
      {/* Render the color options here */}
      <option value={""}>Select the color</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    </select>
    <div style={{background: bgColor, height: "20px" ,width: "20px"}}>
      {/* Change the background color of this div */}

    </div>
  </div>
  )
}

export default ColorSwitcher