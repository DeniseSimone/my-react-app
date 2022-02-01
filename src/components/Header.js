import React from "react"

function Header() {
  const firstName = "Denise"
  const lastName = "Simone"

  return (
    <header className="navbar">
      <h1>Welcome to my website {firstName + " " + lastName}</h1>
      {"Our guest's name is " + firstName}
      {/* `${firstName}` */} 
    </header>
  )
}

// Note: in JSX we do not use the attribute "class" but instead "className", so whenever you want o add a class to
// a JSX element you need to write ~> classNAme="..."
// className can only be applied to actual JSX elements and not the COMPONENTS created by you

export default Header
