import React, { useState, useRef }  from "react"
import Accordion from "./Accordion"


const Subservices = (props) => {
    

    return(
        <div className="subservices-items">
            {props.subservices.map(item => (
                <Accordion title={item.title} description={item.description} />
            ))}
        </div>
    )
}

export default Subservices