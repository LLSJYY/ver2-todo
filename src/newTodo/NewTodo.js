import React, { useState } from "react";

const NewTodo = (props) => {
  
  const keypressHandler = (event) => {
    if (event.key === 'Enter') {
      return props.onEnter(event.target.value);
    }
  }

  return (
    <input type="text" onKeyPress={keypressHandler} />
  )
}

export default NewTodo;