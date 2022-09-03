import React from "react";


const RenderTodo = (props) => {
  const isChecked = (event) => {
    console.log(props.RenderItem  )
    const checkItem = event.target.checked;
    const findTitle = event.target.closest('li').querySelector('span').innerHTML;
    props.CheckedItem(checkItem, findTitle)
  };
  const DeleteOption = (event) => {
    const findTitle = event.target.closest('li').querySelector('span').innerHTML;
    if (event.target.classList.contains('delete')) {
      
      props.deletedItem(findTitle); // object로 보냈었음
   
    }
  }

  return (
    <ul>
      {props.store.map((data, index) => {
        return <li key={index}><input type="checkbox" className="checkbox" onClick={isChecked} /><span>{data.title}</span><button className="btn delete" onClick={DeleteOption} >X</button></li>
      })}
    </ul>
  )
}

export default RenderTodo;