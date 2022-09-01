import React from "react";
import './TodoFooter.css';

const TodoFooter = (props) => {
  

  return (
    <footer>
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