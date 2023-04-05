import React from "react";
import Animals from "./Animals";

const Main = (props) => {
  console.log(props.animals);
  return(
    <main>
      <Animals animals={props.animals}/>
    </main>
  )
}

export default Main