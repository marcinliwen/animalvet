import React from "react"
import { Link } from "gatsby"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <section id="welcome">
      <div className="container">
        <div className="welcome-content">
          <h1>AnimalVet</h1>
          <p>Klinika weterynaryjna małych zwierząt. Opieka, szczepienia, zabiegi, porady.</p>
          <button>Umów wizytę</button>
        </div>
        <div className="welcome-img">
        <Img fluid={props.data.imgOne.childImageSharp.fluid} />
        </div>
        
        
       
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  imgOne : file(relativePath: {eq: "cat_03.png"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`