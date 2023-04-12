import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = (props) => {
  return(
    <header >
      <nav>
        <ul>
          <li><NavLink to="/landing" activeClassName='isActive'>Home</NavLink></li>
          <li><NavLink to="/birds" activeClassName='isActive'>Birds({props.birds.length})</NavLink></li>
          <li><NavLink to="/animals"activeClassName='isActive'>Animals({props.animals.length})</NavLink></li>
          <li><NavLink to="/about" activeClassName='isActive'>About</NavLink></li>
      </ul>
      </nav>
     
    </header>
  )
  }
export default Header