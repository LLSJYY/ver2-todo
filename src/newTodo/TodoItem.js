import { _esModule } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import NewTodo from "./NewTodo";
import RenderItem from "./RenderItem";
import TodoFooter from "../day2/TodoFooter";
import HandlerFooter from "../day2/HandlerFooter";

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
  const CheckedItemHandler = (checkItem, findTitle) => {
    store.filter((data) => {
      return data.title === findTitle;
    }).map((data) => {
      return data.completed = checkItem;
    })
    console.log(store);
  }
  // setStore((prevData) => {
  //   return [...prevData.map((data) => {
  //     return data.completed === checkItem;
  //   })
  //   ]
  // })

  return (
    <div>
      <NewTodo onEnter={onEnteredItem} />
      <ul>
        <RenderItem todoList={store} updateStore={deleteEventItem} CheckedItem={CheckedItemHandler} />
      </ul>
      {store.length > 0 && <HandlerFooter todoList={store} />}
      {store.length > 0 && <TodoFooter />}

    </div>
  )
}
export default TodoItem;
