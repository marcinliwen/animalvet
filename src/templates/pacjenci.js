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
      <Subheader title={"Dbamy z miłością"}/>
      <div className="container">
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator=" / "
        crumbLabel={customCrumbLabel}
      />
      </div>
      <section className="section" id="pupils">
        <div className="container">
          <h2>{props.data.pacjenci.frontmatter.tytul}</h2>
          <div className="row">
            <div className="col-12">
              {props.data.pacjenci.frontmatter.list.map((item, index)=>(
                <div className="row pupils-item" key={index}>
                  <div className="col-8 d-flex order-1-mb">
                    <div className="__desc d-flex-column-center">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="col-4" >
                    <Img fluid={item.featuredImage.childImageSharp.fluid} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
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
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      },
    pacjenci : markdownRemark(frontmatter: {templateKey: {eq: "pacjenci"}}) {
      frontmatter {
        list {
          description
          title
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 360) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      title,
      tytul
      }
    }
  
  }
  `