import React from "react";

const TodoFooter = () => {
  return (
    <footer>
      <span className="todo-count" data-reactid=".0.2.0">
        <strong data-reactid=".0.2.0.0">4</strong>
        <span data-reactid=".0.2.0.1"></span>
        <span data-reactid=".0.2.0.2">items</span>
        <span data-reactid=".0.2.0.3"> left</span>
      </span>
      <ul className="filters" data-reactid=".0.2.1">
        <li data-reactid=".0.2.1.0"><a href="#/" className="selected" data-reactid=".0.2.1.0.0">All</a></li>
        <span data-reactid=".0.2.1.1"> </span>
        <li data-reactid=".0.2.1.2"><a href="#/active" className="" data-reactid=".0.2.1.2.0">Active</a></li>
        <span data-reactid=".0.2.1.3"> </span><li data-reactid=".0.2.1.4">
          <a href="#/completed" className="" data-reactid=".0.2.1.4.0">Completed</a></li></ul>
    </footer>
  )

} 

export default TodoFooter;