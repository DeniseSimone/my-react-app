import React from "react"

function Footer() {
  let footerStyle = {
      height: "200px",
      color: "blue",
      backgroundColor: "green"
  }
   
  return (
    <footer className="footer" style={footerStyle}>
      <h3>This is a footer</h3>
    </footer>
  )

}

export default Footer
