import React from "react"
import { Link } from "gatsby"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../components/Button"

import control from "../images/control.svg"
import rtg from "../images/rtg.svg"
import profilactic from "../images/profilactic.svg"
import vaccine from "../images/vaccine.svg"
const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <section id="welcome">
      <div className="container">
        <div className="welcome-content">
          <h1>AnimalVet</h1>
          <p>Gabinet weterynaryjny małych zwierząt. Opieka, szczepienia, zabiegi, porady.</p>
        <Button color="#fff" background="#ff6290">Umów wizytę</Button>
        </div>
        <div className="welcome-img">
        <Img fluid={props.data.imgOne.childImageSharp.fluid} />
        </div>
        <div className="welcome-opening"> 
          <div className="address">Zasieki 4B</div>
          <div className="days">Pn - Pt</div>
          <div className="hours">10:00 - 16:00</div>
        </div>
        
       
      </div>
    </section>
    <section id="uslugi">
      <div className="container">
        <div className="uslugi-header">
            <h2>Popularne usługi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className="uslugi-content">
          <div className="uslugi-cart">
            <div className="uslugi-cart-title">
              <div className="uslugi-icon"><img src={control} alt="Badania kontrolne"/></div>
              <h3>Badania kontrolne</h3>
            </div>
            <div className="desc">
              <p>Wykonujemy badanie przed wyjazdem z kraju, chipowanie oraz wystawiamy paszporty.</p>
            </div>
          </div>
          <div className="uslugi-cart">
            <div className="uslugi-cart-title">
              <div className="uslugi-icon"><img src={rtg} alt="RTG"/></div>
              <h3>Rtg</h3>
            </div>
            <div className="desc">
              <p>Wykonujemy zdjęcia RTG.</p>
            </div>
          </div>
          <div className="uslugi-cart">
            <div className="uslugi-cart-title">
              <div className="uslugi-icon"><img src={profilactic} alt="profilaktyka"/></div>
              <h3>Profilaktyka</h3>
            </div>
            <div className="desc">
              <p>Wykonujemy badania krwi, moczu oraz wysyłamy próbki tkanek w przypadku badań histologicznych i cytologicznych.Prowadzimy diagnostykę alergii, chorób zakaźnych i genetycznych.</p>
            </div>
          </div>
          <div className="uslugi-cart">
            <div className="uslugi-cart-title">
              <div className="uslugi-icon"><img src={vaccine} alt="Szczepienie"/></div>
              <h3>Szczepienie</h3>
            </div>
            <div className="desc">
              <p>Wykonujemy szczepienia psów, kotów oraz królików. Zarówno te wstępne jak i coroczne.</p>
            </div>
          </div>
          <div className="uslugi-cart for-btn">
            <Button color="#fff" background="#ff6290">Poznaj nasze usługi </Button>
          </div>
          
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