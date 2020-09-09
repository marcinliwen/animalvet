import { Link } from "gatsby"

import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"

import menu_btn from "./../images/menu.svg"
import menu_close from "./../images/cancel.svg"

import "./header.css"

const Header = (props) => {
  const [menu, setMenu] = useState(false);
  const toggleHamburger =()=>{setMenu(!menu)}

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    if(menu){document.body.classList.add('menu-open')}
    else{document.body.classList.remove('menu-open')}
  });

  return(
  <header>    
     <div
      role = "button"
      tabIndex={0}
      onKeyDown={toggleHamburger}
      className={`navbar-burger burger`}
      data-target="navMenu"
      onClick={toggleHamburger}
    >
      {menu?
      <img src={menu_close} width="24px" height="24px" alt="menu"/>:
      <img src={menu_btn} width="24px" height="24px" alt="menu"/>
      
      }
    </div>
         
    <div className="header">
      <div className="container">
        <div className="logo-container">
        <Link
            to="/"
          >
            <div className="logo">
          <div>Animal</div><div>Vet</div>
            </div>
          
          </Link>
        </div>
          

        <nav 
          className={menu?"-open":""}
          //onKeyDown={toggleHamburger}
          //onClick={toggleHamburger}
        >
      
        <Link className="navbar-item" 
          activeClass="active"
          to="/uslugi"
        >
          Usługi
        </Link>
        <Link className="navbar-item" 
          activeClass="active"
          to="/zespol"
          //spy={true}
          //smooth={true}
          //offset={-65}
          //duration={1000}
          onClick={toggleHamburger}
        >
          Zespół
        </Link>
        <Link className="navbar-item" 
          activeClass="active"
          to="/pupils"
          //spy={true}
          //smooth={true}
          //offset={-65}
          //duration={1000}
          onClick={toggleHamburger}
        >
          Nasi pacjenci
        </Link>
        <Link className="navbar-item" 
          activeClass="active"
          to="/blog"
          //spy={true}
          //smooth={true}
          //offset={-65}
          //duration={1000}
          onClick={toggleHamburger}
        >
          Blog
        </Link>
        <Link className="navbar-item" 
          activeClass="active"
          to="/kontakt"
          onClick={toggleHamburger}
        >
          Kontakt
        </Link>

        <div className="contact mobile"><div><a href="tel:+48600700800">600 700 800</a> </div></div>
        </nav>
        <div className="nav_back"  onClick={toggleHamburger}></div>
        <div className="h_banner">
        <div className="contact"><a href="tel:+48600700800">600 700 800</a></div>
      </div>
    </div>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
