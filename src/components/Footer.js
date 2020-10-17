import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"

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
                        <li>Fb</li>
                        <li>Inst</li>
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
                <div className="footer-company">© 2020 - AnimalVet. With love for you</div>
                <div className="footer-social">
                    <ul>
                        <li>Fb</li>
                        <li>Ins</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
)

export default Footer;