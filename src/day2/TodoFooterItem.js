import React from "react";
import FooterSelectBox from "./FooterSelectBox";
import FooterCheckItem from "./FooterCheckItems";

const TodoFooterItem = (props) => {
  const store = props.store;
  return (
    <div>
      <FooterCheckItem store = {store} />
      <FooterSelectBox store = {store}/>
    </div> 
  )
};

export default TodoFooterItem;