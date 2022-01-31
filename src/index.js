// import React allows to write JSX - Html-like code inside react
import React from "react"
// import ReactDOM Library - is what allows to use "ReactDOM.render()"
import ReactDOM from "react-dom"

// import App component
import App from "./App.js"

// ReactDOM.render(WHAT TO RENDER, WHERE TO RENDER)
ReactDOM.render(<App />, document.getElementById("root"))
// We'll render the App component in the html element w/ id="root"
// the App component is a parent component w/ children component, so in index.js we only need to render <App />


/* Rendering Scenarios:

FIRST: rendering only one component, this does not need a wrapping container:
  ReactDOM.render(<h1>Hello World<h1>, document.getElementById("root"))

SECOND: rendering a bunch of components at once, components need to be wrapped in an container:
  ReactDOM.render(
      <div>
        <h1>Hello World</h1>
        <p>This is a parapgraph</p>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>,
      document.getElementById("root")
  )

THIRD: creating a functional component and rendering it:
    function MyInfo() {
      return (
        <div>
          <p>Her name is Simone and she is 24 years old!</p>
        </div>
      )
    }

    ReactDOM.render(<MyInfo />, document.getElementById("root"))

*/
