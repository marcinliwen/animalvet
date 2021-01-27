import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { InView } from 'react-intersection-observer';

import Img from "gatsby-image"

import Button from "./Button"
import "./subheader.css"

const Subheader = (props) =>(
    <section id="subheader" className="main-background subheader">
      <div className="container">
        <div className="-content">
          <InView triggerOnce delay={7000}>
            {({ inView, ref, entry }) => ( 
            <h2 className={inView? "inview": ""} ref={ref}>{props.title}</h2>
            )}
            </InView>
            <Link to="/kontakt#kontakt-form"><Button color="#fff" background="#F24C3D">Umów wizytę</Button></Link>
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
            dogdog : file(relativePath: {eq: "seconddog.png"}) {
                childImageSharp {
                  fluid{
                    ...GatsbyImageSharpFluid_withWebp_noBase64
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

