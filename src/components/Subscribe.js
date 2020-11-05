import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"


const Subscribe = ({data}) =>(
    <section id="subscribe" className="main-background">
        <div className="container">
            <div className="row">
                <div className="col-4 subscribe-img">
                    <Img  fluid={data.dog.childImageSharp.fluid} />
                </div>
                <div className="col-8">
                    <h3 className="main-text"><div>Bądź na bierząco,</div>zapisz się do newslettera!</h3>
                    <form>
                        <div className="form-group">
                            <input type="email" placeholder="E-mail"/>
                            <button type="submit" >Zapisz się!</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>
)

export default ()=>(
    <StaticQuery 
      query={
        graphql`
          query{
            dog : file(relativePath: {eq: "dog.png"}) {
                childImageSharp {
                    fluid{
                    ...GatsbyImageSharpFluid
                    }
                }
              },
            }
          `
      }
      render={(data)=> <Subscribe data={data}/>}
    />
  )
