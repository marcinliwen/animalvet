import React from 'react'
//import PropTypes from 'prop-types'
const BASE_URL = "https://www.google.com/maps/embed/v1/place?key=";
const GKEY = "AIzaSyDI_zdFaLx4vnV2Ypd05BqGnBV_nM_a1Jk";
const TARGET = "Zasieki 4B,Polska";

const Gmap = () => 
    
    (
    <iframe className="gmap" title="mapa dojazdu" 
    style={{
        width: "100%",
        height: "400px",
        border: "none"
    }}
    src={`${BASE_URL}${GKEY}&q=${TARGET}` }allowfullscreen>
    </iframe>       
    )

export default Gmap;
