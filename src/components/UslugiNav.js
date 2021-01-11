import React from "react"
import { Link } from "gatsby"
import { globalHistory as history } from '@reach/router'
import { useMenuLinks } from "../hooks/navigation-links"

import rightChevron from "../images/right-chevron.svg"

const UslugiNav = (props) =>{
    const { location, navigate } = history
 
    const currentLocation = location.pathname;

    const dataLinks = useMenuLinks();
    return(
        <ul className="services-nav-list">
            {dataLinks.map(link =>(
                link.submenuLink!=null ? link.submenuLink.map(sublink=>(
            <li key={sublink.name}  className={currentLocation.includes(sublink.link) ? "active" :""}>
                <Link to={sublink.link +"#uslugi"}><span>{sublink.name}</span><img src={rightChevron} alt="strzalka" width="18px" height="18px"/></Link>
            </li>
                )) : ""
            ))}
        </ul>
    )
}

export default UslugiNav;

