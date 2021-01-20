import React from "react"
import { graphql } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subheader from "../components/Subheader"
import ContaktForm from "../components/ContaktForm"
import Officecounter from "../components/Officecounter"

import "../components/slider.css"



const Onas = (props) => {
    const {frontmatter} = props.data.markdownRemark;
    const certyfikaty = props.data.certyfikaty.edges;
    console.log(certyfikaty)
    const {
      breadcrumb: { crumbs },
    } = props.pageContext;
  
    const customCrumbLabel = props.location.pathname.replace('/', ' ');
  
    return(
        <Layout>
        <SEO title="O nas" pathname={props.location.pathname}/>
        <Subheader title={"Dbamy z miłością"}/>
        <div className="container">
            <Breadcrumb
                crumbs={crumbs}
                crumbSeparator=" / "
                crumbLabel={customCrumbLabel}
            />
        </div>
        <section className="section" id="onas">
            <div className="container">
            <h2>{frontmatter.title}</h2>
            <div className="row">
                <div className="col-4 onas-quot d-flex-row-center">
                    <h4><q>{frontmatter.subheader.cytat}</q></h4>
                </div>
                <div className="col-8">
                    <p>{frontmatter.subheader.p1}</p>
                    <p>{frontmatter.subheader.p2}</p>
                </div>
            </div>
            </div>
        </section>
        <section id="office">
            <div className="container">
            <div className="row">
            <div className="office-container col-8">
                <div className="office-title"><h3>{frontmatter.officecounter.title}</h3></div>
                <div className="office-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <Officecounter />
            </div>
            <div className="office-img col-4">
                <Img fluid={props.data.imgOffice.childImageSharp.fluid} />
            </div>
            </div>
        </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="office-container row">
                    <div className="office-title col-4">
                        <h3>Nasz zespół</h3>
                    </div>
                    <div className="office-text col-8">
                        <p>{frontmatter.officecounter.p}</p>                    
                    </div>
                </div>
                <div className="desctop">
                    <div className="row row-margin-b">
                        <div className="col-8">
                            <div className="office-person">
                                <Img fluid={props.data.zespol1.childImageSharp.fluid} />
                            </div>
                            
                        </div>
                        <div className="col-4">
                            <div className="office-person">
                                <Img fluid={props.data.zespol2.childImageSharp.fluid} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="office-person">
                                <Img fluid={props.data.zespol2.childImageSharp.fluid} />
                                <div className="person-desc">
                                    <h4>Imię Nazwisko</h4>
                                    <p>Lekarz weterynarii, specjalista</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="office-person">
                                <Img fluid={props.data.zespol2.childImageSharp.fluid} />
                                <div className="person-desc">
                                    <h4>Imię Nazwisko</h4>
                                    <p>Lekarz weterynarii, specjalista</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="office-person">
                                <Img fluid={props.data.zespol2.childImageSharp.fluid} />
                                <div className="person-desc">
                                    <h4>Imię Nazwisko</h4>
                                    <p>Lekarz weterynarii, specjalista</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile slider">
                    <div className="row slides">
                        <div className="col-4">
                            <div className="office-person">
                                <Img fluid={props.data.zespol2.childImageSharp.fluid} />
                                <div className="person-desc">
                                    <h4>Imię Nazwisko</h4>
                                    <p>Lekarz weterynarii, specjalista</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="office-person">
                                <Img fluid={props.data.zespol2.childImageSharp.fluid} />
                                <div className="person-desc">
                                    <h4>Imię Nazwisko</h4>
                                    <p>Lekarz weterynarii, specjalista</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="office-person">
                                <Img fluid={props.data.zespol2.childImageSharp.fluid} />
                                <div className="person-desc">
                                    <h4>Imię Nazwisko</h4>
                                    <p>Lekarz weterynarii, specjalista</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
        <section className="section" id="spec"> 
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>{frontmatter.spec.title}</h2>
                </div>
                <div className="col-12">
                    <p>{frontmatter.spec.p}</p>
                </div>
            </div>
            <div className="row">
            {certyfikaty.map(image=>(
                <div className="col-4 col-gap">
                    <Img fluid={image.node.childImageSharp.fluid} />
                </div>
            ))}
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
                <Img 
                  fluid={props.data.imgContakt.childImageSharp.fluid} 
                  placeholderStyle={{"backgroundColor": "#8EE7FF" }}
                  className="main-background"
                  />
              </div>
            </div>       
          </div>
        </section>
      </Layout>
  )}
  
export default Onas

export const pageQuery = graphql`
query($slug: String!){
  imgContakt: file(relativePath: {eq: "kontakt-dog.png"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  },
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    html
    frontmatter {
        slug
        title,
        subheader{
            cytat,
            p1,
            p2
        },
        officecounter{
            title,
            p
        },
        spec{
            title,
            p
        }
    },
    html
    },
    imgOffice : file(relativePath: {eq: "office.jpg"}){
        childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid_withWebp_noBase64
        }
        }
    },
    zespol1 : file(relativePath: {eq: "zespol1.png"}){
        childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid_withWebp_noBase64
        }
        }
    },
    zespol2 : file(relativePath: {eq: "zespol2.png"}){
        childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid_withWebp_noBase64
        }
        }
    },
    m_zespol1 : file(relativePath: {eq: "m_zespol1.png"}){
        childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid_withWebp_noBase64
        }
        }
    },
    m_zespol2 : file(relativePath: {eq: "m_zespol2.png"}){
        childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid_withWebp_noBase64
        }
        }
    },
    certyfikaty: allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "certyfikaty"}}) {
        edges {
            node {
                childImageSharp {
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    }
}
`