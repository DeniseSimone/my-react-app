import React from "react"

function MainContent() {
  const d = new Date().getDate();

  const personOne = {
    name: "Simone",
    age: 24,
    country: "Mozambique",
    info: function() {
     console.log(`Her name is ${personOne.name}, she is ${personOne.age} and is from ${personOne.country}`)
    }
  }
  personOne.info()

  function onClick() {
    document.getElementById("demo").innerHTML = "hello"
  }

  let guest = prompt("What is your name?")
  return (
    <main>
      <p>Check the date bellow:</p>
      <ul>
        <li>Today is {`${d}`} </li>
        <li>Yesterday was {d.valueOf() - 1}</li>
        <li>Tomorrow is {d.valueOf() + 1}</li>
      </ul>
      <button onClick={onClick}>Click me</button>
      <p id="demo"></p>
      <h1 style={{color: "blue", backgroundColor: "yellow"}}>Our guests name is {guest}</h1>
    </main>
  );
}

export default MainContent
