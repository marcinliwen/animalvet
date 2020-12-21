import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"

import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"

const Footer =() =>(
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
                        <li>500 600 700</li>
                        <li>adresmailowy@firma.pl</li>
                        <li>Zasieki 4B</li>
                        <li>68-343 Zasieki</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <div className="footer-link-title">Usługi</div>
                    <ul>
                        <li>Badania kontrolne</li>
                        <li>RTG</li>
                        <li>Profilaktyka</li>
                        <li>Szczepienie</li>
                        <li>Ortopedia</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <div className="footer-link-title">Nawigacja</div>
                    <ul>
                        <li>Zespół</li>
                        <li>Nasi klienci</li>
                        <li>Blog</li>
                        <li>Kontakt</li>
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

export default Footer;