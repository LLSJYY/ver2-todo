import React from "react";

const HandlerFooter = (props) => {
console.log(props)
  return (
    <span className="todo-count" data-reactid=".0.2.0">
      <strong data-reactid=".0.2.0.0">{props.todoList.length}</strong>
      <span data-reactid=".0.2.0.1"> </span>
      <span data-reactid=".0.2.0.2">items</span>
      <span data-reactid=".0.2.0.3"> left</span>
    </span>
  )
}

export default HandlerFooter;