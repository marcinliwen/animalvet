import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"
import { useMenuLinks } from "../hooks/navigation-links"
import { useKontaktInfo } from "../hooks/kontakt-hook"

import { Helmet } from "react-helmet"


import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"

const Footer = () =>{
    const dataLinks = useMenuLinks();

    const {phone_display, mail, address, post_code } =useKontaktInfo();
    return(
    <div id="footer">
        <div className="container">
            <div className="footer-top">
                <div className="footer-links">
                    <div className="logo-container">
                        <Link
                            to="/"
                        >
                            <div className="logo">
                        <div>Animal</div><div>Vet</div>
                            </div>
                        
                        </Link>
                    </div>
                    <div className="footer-social">
                    <ul>
                        <li><a target='_blank'  href="https://www.facebook.com/AnimalVet-1331193130342453" title="facebook"><img src={facebook} alt="facebook" /></a></li>
                        <li><img src={instagram} alt="instagram" /></li>
                    </ul>
                </div>
                </div>
                <div className="footer-links">
                    <div className="footer-link-title">Kontakt</div>
                    <ul>
                        <li>{phone_display}</li>
                        <li>{mail}</li>
                        <li>{address}</li>
                        <li>{post_code}</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <div className="footer-link-title">Usługi</div>
                    <ul>
                        {dataLinks.map(link=>(
                            link.submenuLink!=null?
                                link.submenuLink.map(sublink=>(
                                    <li key={sublink.name}><Link to={sublink.link}>{sublink.name}</Link></li>
                                ))
                            :""
                        ))}
                    </ul>
                </div>
                <div className="footer-links">
                    <div className="footer-link-title">Nawigacja</div>
                    <ul>
                        {dataLinks.map(link=>(
                            <li key={link.name}><Link to={link.link}>{link.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-company">© 2020 - AnimalVet. With love for animals</div>
                <div className="footer-social">
                    <ul>
                        <li><a target='_blank'  href="https://www.facebook.com/AnimalVet-1331193130342453" title="facebook"><img src={facebook} alt="facebook" /></a></li>
                        <li><img src={instagram} alt="instagram" /></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
)
}

export default Footer;