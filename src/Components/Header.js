import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {

    return (
      <header id="header">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/about">About</NavLink></li>
            <li><NavLink exact to="/resume" >Resume</NavLink></li>
            <li><NavLink exact to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink exact to="/contact">Contact</NavLink></li>
         </ul>

      </nav>

   </header>
    );
  }
}

export default Header;
