import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = (props) => {
  return(
    <header >
      <nav>
        <ul>
          <li><NavLink to="/landing" /* ='isActive' */>Home</NavLink></li>
          <li><NavLink to="/birds" /* ='isActive' */>Birds({props.birds.length})</NavLink></li>
          <li><NavLink to="/animals"/* ='isActive' */>Animals({props.animals.length})</NavLink></li>
          <li><NavLink to="/about" /* ='isActive' */>About</NavLink></li>
      </ul>
      </nav>
     
    </header>
  )
  }
export default Header