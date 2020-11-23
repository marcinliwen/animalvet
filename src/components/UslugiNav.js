import React from "react"
import { Link } from "gatsby"
import { globalHistory as history } from '@reach/router'


import rightChevron from "../images/right-chevron.svg"

const UslugiNav = (props) =>{
    const { location, navigate } = history
 
    const currentLocation = location.pathname.split('/');
    console.log(currentLocation);

    return(
        <ul className="services-nav-list">
            {props.services.map((item, index) =>(
            <li key={index}  className={currentLocation.includes(item.title) ? "active" :""}>
                <Link to={"/uslugi/" + item.title+"#uslugi"}><span>{item.title}</span><img src={rightChevron} alt="strzalka" width="18px" height="18px"/></Link>
            </li>
            ))}
        </ul>
    )
}

export default UslugiNav;

