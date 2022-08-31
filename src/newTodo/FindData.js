import React from "react";

const FindData = (props) => {
  const DeleteOption = (event) => {
    const findTitle = event.target.closest('li').querySelector('span').innerHTML;
    if (event.target.classList.contains('delete')) {
      event.target.closest('li').remove();
      props.updateStore('hello');
    }
  }
  return (
    <button className="btn delete" onClick={DeleteOption} >X</button>
  )
}

export default FindData;