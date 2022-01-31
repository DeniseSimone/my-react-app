import React from "react"

// Bellow we're importing the components we'll use in this react app, but to import these components
// we firstly add to export them in their own .js files
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
import Footer from "./components/Footer.js"
import TodoItem from "./components/TodoItem.js"
import Something from "./components/Something.js"

// this Functional Component App will render n be a parent component to other components
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Something />
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      <Footer />
    </div>
  );
}

// <Header />, <MainContainer />, <CheckList /> & <Footer /> are child-components of App
// Each of these components has its own .js file, where they are declared

// export App component so that other files in the app might have access to it
export default App
