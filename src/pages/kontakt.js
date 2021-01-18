import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"


import Subscribe from "../components/Subscribe"
import Subheader from "../components/Subheader"
import Gmap from "../components/Gmap"
import ContaktForm from "../components/ContaktForm"

import phone from "../images/phone.svg"
import mail from "../images/mail.svg"
import locationblack from "../images/location-black.svg"

import "../components/kontakt.css"

const Kontakt = (props) => {

    const {
      breadcrumb: { crumbs },
    } = props.pageContext;
  
    const customCrumbLabel = props.location.pathname.replace('/', ' ');
  
    return(
      <Layout>
      <SEO title="Kontakt" />
      <Helmet>
        <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "https://www.animalvet.com",
                "name": "Spooky technologies",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+5-601-785-8543",
                  "contactType": "Customer Support"
                }
              }
            `}
        </script>
      </Helmet>
      <Subheader title={"Dbamy z miłością"}/>
      <div className="container">
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator=" / "
        crumbLabel={customCrumbLabel}
      />
       </div>
        <section id="kontakt">
            <div className="container">
                <div className="col-12">
                    <h2>Kontakt</h2>
                </div>
                <div className="row">
                    <div className="col-4 contact__container">
                      <div className="contakt__open">
                        <h4>Jesteśmy otwarci:</h4>
                        <div>poniedziałek - piątek</div>
                        <div>10:00 - 16:00</div>
                      </div>
                      <ul className="contact__list">
                        <li>
                          <img src={locationblack} alt="adres" width="16px" />
                          <p>Zasieki 4B, 68-343 Zasieki</p>
                        </li>
                        <li>
                          <img src={phone} alt="telefon" width="16px" />
                          <p>+48 506 109 445</p>
                        </li>
                        <li>
                          <img src={mail} alt="mail" width="16px" />
                          <p>animalvet@gmail.com</p>
                        </li>

                      </ul>
                        
                        <p></p>
                    </div>
                    <div className="col-8">
                    <Gmap />
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
  
export default Kontakt

export const pageQuery = graphql`
query {
  imgContakt: file(relativePath: {eq: "kontakt-dog.png"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`
  