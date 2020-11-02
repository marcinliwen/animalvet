import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

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
       <Img fluid={props.data.dogdog.childImageSharp.fluid} />
        </div>
      </div>
    </section>
)


export default function MySubheader (props) {return(
  <StaticQuery 
    query={
      graphql`
        query{
            dogdog : file(relativePath: {eq: "dog_care.png"}) {
                childImageSharp {
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
                }
            },
          }
        `
    }
    render={(data)=> <Subheader data={data} title={props.title}/>}
  />
)
}

