import React, { useState } from "react";
import  './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="header">
          <div className="navbar-brand">
            <button className="navbar-toggler" onClick={toggleMenu}>
              
                <img src="Navbar\icons\menu.png" alt="" />
              
            </button>
          </div>
          <div className="Navbaricon">Navbar</div>
        </div>

        
        {isMenuOpen && (
          <div className="navbar-menu">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
