import { Link } from "gatsby"

import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import { globalHistory as history } from '@reach/router'

import { useMenuLinks } from "../hooks/navigation-links"
import { useKontaktInfo } from "../hooks/kontakt-hook"

import menu_btn from "./../images/menu.svg"
import menu_close from "./../images/cancel.svg"
import phone from "./../images/phone.svg"

import "./header.css"

const Header = (props) => {
  const [menu, setMenu] = useState(false);
  const toggleHamburger =()=>{setMenu(!menu)}

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    if(menu){
      document.querySelector("html").classList.add('menu-open')
      console.log(document.querySelector("html"))
    }
    else{ 
      console.log(document.querySelector("html"))
      document.querySelector("html").classList.remove('menu-open')
    }
  });

  const { location, navigate } = history
 
  const currentLocation = location.pathname;

  const dataLinks = useMenuLinks();

  const { phone_number , phone_display } = useKontaktInfo();

  console.log(props.logo);
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
         
    <div className="header main-background">
      <div className="container">
        <div className="logo-container">
        <Link
            to="/"
          >
            <div className="logo">
            <img src={props.logo} alt="logo" width="52px" />
            </div>
          
          </Link>
        </div>
          

        <nav 
          className={menu?"-open":""}
        >
          <ul>
          {dataLinks.map(link=>(
            <li>
              <Link 
              key={link.name} 
              to={link.link}
              activeClass="active"
              onClick={toggleHamburger}
              className={`navbar-item ${currentLocation.includes(link.link) ? "active" :""}`} 
            >{link.name}</Link>
            {link.submenuLink!=null
            ?<ul className="submenu">
              {link.submenuLink.map(sublink=>(
                <li key={sublink.name}><Link to={sublink.link}>{sublink.name}</Link></li>
              ))}
            </ul>
            :""}
            </li>
           
          ))}
          </ul>
      {/*
        <Link className={`navbar-item ${currentLocation.includes("uslugi") ? "active" :""}`} 
          activeClass="active"
          to="/uslugi"
        >
          Usługi
        </Link>
        <Link className={`navbar-item ${currentLocation.includes("onas") ? "active" :""}`} 
          activeClass="active"
          to="/onas"
          //spy={true}
          //smooth={true}
          //offset={-65}
          //duration={1000}
          onClick={toggleHamburger}
        >
          O nas
        </Link>
        <Link className={`navbar-item ${currentLocation.includes("pacjenci") ? "active" :""}`}  
          activeClass="active"
          to="/pacjenci"
          //spy={true}
          //smooth={true}
          //offset={-65}
          //duration={1000}
          onClick={toggleHamburger}
        >
          Nasi pacjenci
        </Link>
        <Link className={`navbar-item ${currentLocation.includes("kontakt") ? "active" :""}`} 
          activeClass="active"
          to="/kontakt"
          onClick={toggleHamburger}
        >
          Kontakt
        </Link>
      */}
        {/*<div className="contact mobile"><div><a href={`tel:${phone_number}`}>{phone_display}</a> </div></div>*/}
        </nav>
        <div className="nav_back"  onClick={toggleHamburger}></div>
        <div className="h_banner">
        <div className="contact">
          <a href={`tel:${phone_number}`}>
            {phone_display}
            </a>
        </div>
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
