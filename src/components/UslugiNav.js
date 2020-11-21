import React from "react"
import { Link } from "gatsby"

import rightChevron from "../images/right-chevron.svg"

const UslugiNav = (props) =>{
    return(
        <ul className="services-nav-list">
            {props.services.map(item =>(
            <li>
                <Link to={"/uslugi/" + item.title}><span>{item.title}</span><img src={rightChevron} alt="strzalka" width="18px" height="18px"/></Link>
            </li>
            ))}
        </ul>
    )
}

export default UslugiNav;

