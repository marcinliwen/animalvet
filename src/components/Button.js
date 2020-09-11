import React from "react"


const Button = (props) =>{
    return(
        <button 
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