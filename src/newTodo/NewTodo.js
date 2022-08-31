import React, { useState } from "react";

const NewTodo = (props) => {

  const [enteredData, setEnteredData] = useState({
    id: '',
    data: '',
  });

  const keypressHandler = (event) => {

    if (event.key === 'Enter') {
      const newTodoItem = {
        id: Math.random().toString(),
        text: event.target.value,
        completed: false,
      };
      setEnteredData(newTodoItem);
      props.onEnter({
        text: event.target.value,
      });
    }
  }

  return (
    <input type="text" onKeyPress={keypressHandler} />
  )
}

export default NewTodo;