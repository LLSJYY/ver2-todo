import React from "react";

const HandlerFooter = (props) => {
console.log(props)

const checkedItems = (store) => {
  const result = store.filter((data) => {
    return data.completed === false;
  }).length;
  console.log(store);
  return result;
}
  return (
    <span className="todo-count" data-reactid=".0.2.0">
      <strong data-reactid=".0.2.0.0">{checkedItems(props.todoList)}</strong>
      <span data-reactid=".0.2.0.1"> </span>
      <span data-reactid=".0.2.0.2">items</span>
      <span data-reactid=".0.2.0.3"> left</span>
    </span>
  )
}

export default HandlerFooter;