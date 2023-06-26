import React, { useState } from 'react'

const SearchFilter = () => {
    const items = ['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape'];

    const [filterItem, setFilterItem] = useState('')

  return (
    <div>
    <input type="text" />
    <ul>
      {/* Render the filtered list of items here */}
      {/* {filterItem.map((item, index) => {
        <li key={index}>{item}</li>
      })} */}
    </ul>
  </div>
  )
}

export default SearchFilter