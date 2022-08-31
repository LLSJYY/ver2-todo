import React from "react";
import './RenderItem.css';

const RenderItem = (props) => {
  const DeleteOption = (event) => {
    const findTitle = event.target.closest('li').querySelector('span').innerHTML;
  
    if (event.target.classList.contains('delete')) {
      props.updateStore(findTitle); // object로 보냈었음
    }
  }
  return (
    props.todoList.map((data, index) => {
      return <li key={index}><input type="checkbox" className="checkbox" /><span>{data.title}</span><button className="btn delete" onClick={DeleteOption} >X</button></li>
    }))
}

export default RenderItem; 