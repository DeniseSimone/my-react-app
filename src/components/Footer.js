import React from "react"

function Footer() {
  // style in React are represented as objects, properties n values
  let footerStyle = {
    height: "200px",
    color: "blue",
    backgroundColor: "green",
  };
  // you can access values by calling the properties
  // Ex: footerStyle.height => 200px
  // Ex: footerStyle.color => "blue"

  return (
    <footer className="footer" style={footerStyle}>
      <h3>This is a footer</h3>
    </footer>
  );
}

export default Footer
