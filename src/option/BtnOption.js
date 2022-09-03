import React from "react";
import BtnActive from "./BtnActive";
import BtnAll from "./BtnAll";
import BtnCompleted from "./BtnCompleted"

const BtnOption = (props) => {
  const store = props.store
  return (
    <div>
    <BtnAll store = {store}/>
    <BtnActive store = {store}/>
    <BtnCompleted store = {store}/>
    </div>
  )
}

export default BtnOption;