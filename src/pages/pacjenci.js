import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Img from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"

//import Subscribe from "../components/Subscribe"
import Subheader from "../components/Subheader"
import ContaktForm from "../components/ContaktForm"



const Pacjenci = (props) => {
    //const {frontmatter} = props.data.markdownRemark;
  
    const {
      breadcrumb: { crumbs },
    } = props.pageContext;
  
    const customCrumbLabel = props.location.pathname.replace('/', ' ');
  
    return(
      <Layout>
      <SEO title="Pacjenci" />
      <Subheader title={"Traktujemy z miłością"}/>
      <div className="container">
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator=" / "
        crumbLabel={customCrumbLabel}
      />
      </div>
      <section id="kontakt-form" className="background__secondadry">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <ContaktForm />
              </div>
              <div className="col-4">
                <Img fluid={props.data.imgContakt.childImageSharp.fluid} className="main-background"/>
              </div>
            </div>       
          </div>
        </section>
    </Layout>
  )}
  
  export default Pacjenci

  export const pageQuery = graphql`
  query{
    imgContakt: file(relativePath: {eq: "kontakt-dog.png"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
  `