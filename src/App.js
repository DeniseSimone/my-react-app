import React from "react"

// Bellow we're importing the components we'll use in this react app, but to import these components
// we firstly add to export them in their own .js files
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
import Footer from "./components/Footer.js"
import CheckList from "./components/CheckList"

// this Functional Component App will render n be a parent component to other components
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <CheckList />
      <Footer />
    </div>
  );
}

// <Header />, <MainContainer />, <CheckList /> & <Footer /> are child-components of App
// Each of these components has its own .js file, where they are declared

// export App component so that other files in the app might have access to it
export default App
