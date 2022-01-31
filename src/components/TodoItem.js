import React from "react"

function TodoItem(){
  /* experiment
  const items = ["milk", "eggs", "bread", "jam", "juice"]

  option 1: Iterate over items:
  for (let i = 0; i < items.length; i++) {
    let item = `Item ${items.indexOf(items[i]) + 1}: ${items[i]}`
    console.log(item)
  }

  option 2: Iterate over items and print them on the console:
  items.forEach(function (item, index) {
    console.log(`item ${index + 1}: ${item}`);
  });
  */

  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>Check item n</p>
    </div>
  );
}

export default TodoItem
