import React from "react";

const FooterCheckItems = (props) => {
  const dataLength  = props.store.filter((data)=> {return data.completed === false}).length;
  console.log(dataLength);
  return (
    <span className="todo-count" data-reactid=".0.2.0">
      <strong data-reactid=".0.2.0.0">{dataLength}</strong>
      <span data-reactid=".0.2.0.1"> </span>
      <span data-reactid=".0.2.0.2">items</span>
      <span data-reactid=".0.2.0.3"> left</span>
    </span>
  )
}

export default FooterCheckItems;