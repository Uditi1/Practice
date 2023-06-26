import React, { useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState([]);

    const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {

    setInputValue(event.target.value);
  
  }

  function handleSubmit() {

    if (inputValue.trim()) {
  
      setTodo([...todo, inputValue.trim()]);
  
      setInputValue('');
  
    }
  
  }

  function handleDelete(index) {

    setTodo(todo.filter((_, i) => i !== index));
  
  }

  return (
    <div>
     <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Add Todo</button>
      <ul>

  {todo.map((todos, index) => (

    <li key={index}>

      {todos}

      <button onClick={() => handleDelete(index)}>Delete</button>

    </li>

  ))}

</ul>
    </div>
  );
};

export default Todo;
