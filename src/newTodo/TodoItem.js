import React, { useState } from "react";
import NewTodo from "./NewTodo";
import RenderItem from "./RenderItem";

const TodoItem = (props) => {
  const [store, setStore] = useState([]); // 여기서 배열로 지정

  const onEnteredItem = (event) => {
    setStore((prevData) => {
      return [
        ...prevData,
        {
          title: event.text,
          id: Math.random().toString(),
          completed: false,
        }
      ]
    }
    )
  }
  const deleteEventItem = (findTitle) => {
    console.log(findTitle);
    setStore((prevData) => {
      return [...prevData.filter((data) => {
        return data.title !== findTitle
      })     
      ] 
    })    
  };
console.log(store);
  return (
    <div>
      <NewTodo onEnter={onEnteredItem} />
      <ul>
        <RenderItem todoList={store} updateStore={deleteEventItem} />
      </ul>
    </div>
  )
}
export default TodoItem; 