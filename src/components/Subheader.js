import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"

import Button from "./Button"
import "./subheader.css"

const Subheader = (props) =>(
    <section id="subheader" className="main-background subheader">
      <div className="container">
        <div className="-content">
            <h2>{props.title}</h2>
            <Button color="#fff" background="#ff6290">Umów wizytę</Button>
        </div>
        <div className="-img">
        <Img fluid={props.image} />
        </div>
      </div>
    </section>
)

export default Subheader