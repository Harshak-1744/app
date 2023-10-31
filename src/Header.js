import React from "react"
import logo from './logo192.png';

function Header() {
    return (
      <header>
        <nav className="nav">
          <img className="logo" src={logo} alt ="this is the logo"width="40px" />
          <ul className="nav-items">
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header