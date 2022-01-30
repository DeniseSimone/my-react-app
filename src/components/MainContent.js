import React from "react"

function MainContent() {
  const d = new Date().getDate();


  return (
    <main>
      <p>This is a paragraph.</p>
      <ul>
        <li>Today is {`${d}`} </li>
        <li>Yesterday was {d.valueOf() - 1}</li>
        <li>Tomorrow is {d.valueOf() + 1}</li>
      </ul>
    </main>
  );
}

export default MainContent
