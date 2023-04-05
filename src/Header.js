import React from "react";
import './Header.css'

const Header = (props) => {
  return(
    <header >
      <h2>Animals</h2>
      <div className="input"> <p>Type animal name</p><input onChange={props.searchHandler}  ></input></div>
     
    </header>
  )
  }
export default Header