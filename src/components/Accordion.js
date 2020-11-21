import React, { useState, useRef }  from "react"


const Accordion = (prop) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        console.log(content.current.scrollHeight);
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
          );
    }
    return(
        <div className="subservices-item">
            <div className={`subservices-title accordion ${setActive}`} onClick={toggleAccordion}><h4>{prop.title}</h4></div>
            <div className="subservices-desc" 
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
            ><p>{prop.description}</p></div>
        </div>
    )
}

export default Accordion;