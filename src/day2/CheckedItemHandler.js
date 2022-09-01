import React from "react";
// IssueList 컴포넌트

const CheckedItemHandler = (id, isChecked,props) => {
  if (isChecked) {
    props.checkedItems.filter()
    props.setCheckedItems(checkedItems);
  } else if (!isChecked && checkedItems.has(id)) {
    props.checkedItems.filter()
    props.setCheckedItems(checkedItems);
  }
};