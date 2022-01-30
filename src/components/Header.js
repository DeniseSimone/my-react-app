import React from "react"

function Header() {
  return (
    <header className="navbar">
      <h1  >This is my navbar</h1>
    </header>
  )
}

// Note: in JSX we do not use the attribute "class" but instead "className", so whenever you want o add a class to
// and JSX element you need to write ~> classNAme="..."
// className can only be applied to actual JSX elements and not the Components created by you

export default Header
