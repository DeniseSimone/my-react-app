import React from "react"

function Something() {
  const date = new Date() // fetching the current date
  const hours = date.getHours() // translating the date into current hours
  let timeOfDay // declared empty variable, meaning this variable can later on assume other values, we'll be assiging values
  //
  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "yellow"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "green"
  } else {
    timeOfDay = "night"
    styles.color = "blue"
  }

  return (
    <div>
      <h4>It's {`${hours}`}:00 hours</h4>
      <h3 style={styles}>Good {timeOfDay}</h3>
    </div>
  );
}



export default Something
