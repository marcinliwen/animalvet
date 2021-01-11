import React from "react"


const Button = (props) =>{
    return(
        <button className="btn"
            style={{
                color: props.color,
                background: props.background
            }}
        >
            {props.children}
        </button>
    )
}

export default Button;