import React, { useState } from "react";
import NewTodo from "./NewTodo";
import RenderTodo from './RenderTodo';
import TodoFooterItem from '../day2/TodoFooterItem'

const Store = (props) => {
  
  const [store, setStore] = useState([]);
  
  const OnEnteredItem = (item) => {
    setStore((prevData) => {
      return [...prevData,
      {
        title: item,
        id: Math.random().toString(),
        completed: false,
      }]
    })
  }

  const updateStoreBydelete = (findTitle) => {
    console.log(findTitle);
    setStore((prevData) => {
      return [...prevData.filter((data) => {
        return data.title !== findTitle
      })
      ]
    })
  };
  const updateStorebyCheck = (checkItem, findTitle) => {
    store.filter((data) => {
      return data.title === findTitle;
    }).map((data) => {
      return data.completed = checkItem;
    })
  } // store update
  console.log(store);
  return (
    <div>
      <div className="section">
        <NewTodo onEnter={OnEnteredItem} />
        <RenderTodo store={store} setStore = {setStore} deletedItem={updateStoreBydelete} CheckedItem={updateStorebyCheck} />
      </div>
      <TodoFooterItem store={store}/>
    </div>
  )

};

export default Store;