import React from "react"
//import { Link } from "gatsby"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import SvgIcon from '@material-ui/core/SvgIcon';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import { InView } from 'react-intersection-observer';
import { useIntl,Link,  FormattedMessage } from "gatsby-plugin-intl"

import ArrowRight from "../components/Icons/ArrowR"

import Button from "../components/Button"
import Officecounter from "../components/Officecounter"
import Subscribe from "../components/Subscribe"
import Pacjencicarousel from "../components/Pacjencicarousel"
import UslugiSection from "../components/UslugiSection"

import surgery from "../images/surgery-tools.svg"
import control from "../images/control.svg"
import rtg from "../images/rtg.svg"
import profilactic from "../images/profilactic.svg"
import vaccine from "../images/vaccine.svg"
import bandage from "../images/bandage.svg"
import calendar from "../images/calendar.svg"
import location from "../images/location.svg"
import time from "../images/time.svg"
import clinic from "../images/clinic.svg"

import "../components/slider.css"

const IndexPage = props => {
  
  const pacjenci = props.data.pacjenci.frontmatter.list;
  const services = props.data.services.edges[0].node.frontmatter.services;

  return(
  <Layout>
    <SEO title="Home" />
    <section id="welcome">
      <div className="container">
        <div className="welcome-content">
        <InView triggerOnce delay={7000}>
            {({ inView, ref, entry }) => ( 
                <h1 className={inView? "inview": ""} ref={ref}>AnimalVet</h1>
            )}
        </InView>
        
          <p><FormattedMessage id="main_subtitle"/></p>
          <Link to="/kontakt#kontakt-form"><Button color="#fff" background="#F24C3D">  <FormattedMessage id="appointment" /></Button></Link>
        </div>
        <div className="welcome-img">
        <Img fluid={props.data.imgOne.childImageSharp.fluid} />
        </div>
        <div className="welcome-opening"> 
        
          <div className="desctop"><img src={clinic} alt="klinika" />Jesteśmy otwarci!</div>
          <div className="address"><Link style={{display:"block"}} to={"/kontakt#kontakt"}><img src={location} alt="Lokacja"/>Zasieki 4B</Link></div>
          
          <div className="days"><Link style={{display:"block"}} to={"/kontakt#kontakt"}><img src={calendar} alt="Kalendarz"/>Pn - Pt</Link></div>
          <div className="hours"><Link style={{display:"block"}} to={"/kontakt#kontakt"}><img src={time} alt="Czas"/>10:00 - 16:00</Link></div>
        </div>
      </div>
    </section>
    <section id="uslugi">
      <div className="container">
        <div className="uslugi-header border-b">
            <h2>Popularne usługi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <UslugiSection
          services={services}
          isHomepage={true}
        />
      </div>
    </section>
    <section id="office">
      <div className="container">
        <div className="row">
          <div className="office-container col-8">
            <div className="office-title"><h3>O nas</h3></div>
            <div className="office-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
    <section id="clients">
      <div className="container ">
        <div className="row">
        <div className="col-4 client-titles">
          <h2>Zaufali nam</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link activeClass="active" to="pacjenci"><Button color="#fff" background="#F24C3D">Nasi pacjenci</Button></Link>
        </div>
        <div className="col-8 slider">
          <Pacjencicarousel pacjenci={pacjenci} />
         {/* <div className="clients-list slides">
          {pacjenci.map((item, index)=>(
            <div className="clients-item" id={`item_${index}`}>
              <div className="slide-nav">
              
                  <a className="slide-prev" href={index> 0 ? `#item_${index-1}` : ""} >
                  { index > 0
                    ? <Slidearrow style={{ color: '#000', fontSize: "25px", transform: "scaleX(-1)" }}/>
                    : <Slidearrow style={{ color: '#BCBCBC', fontSize: "25px", transform: "scaleX(-1)" }}/>
                  }
                  </a>
                  <div className="slide-counter">{index+1} / {pacjenci.length}</div>
                  <a className="slide-next" href={index<(pacjenci.length-1)?`#item_${index+1}`:""}>
                  {index<(pacjenci.length-1)
                    ? <Slidearrow style={{ color: "#000", fontSize: "25px" }}/>
                    : <Slidearrow style={{ color: "#BCBCBC", fontSize: "25px" }}/>
                  }
                  </a>
              </div>
             
              <div className="clients-text">
              <p><b>{item.title}</b></p>
              <p><q>{item.description}</q></p>
              
              </div>
              <div className="clients-img">
              <Img 
                fluid={item.featuredImage.childImageSharp.fluid} 
                placeholderStyle={{"backgroundColor": "#d5f1ff" }}
              />
              </div>
            </div>

            ))}
          </div>
                */}
            
          
        </div>
        </div>
        
      </div>
    </section>
    <Subscribe  image={props.data.dog.childImageSharp.fluid}/>
  </Layout>
)}

export default IndexPage

function Slidearrow(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 8">
      <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5L15 4.5V3.5L0 3.5L0 4.5Z" />
    </SvgIcon>
  );
}

export const pageQuery = graphql`
query {
  imgOne : file(relativePath: {eq: "doghome2.png"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  },
  imgOffice : file(relativePath: {eq: "office.png"}){
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  },
  bengal : file(relativePath: {eq: "bengal.jpg"}){
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  },
  dog : file(relativePath: {eq: "dog.png"}) {
    childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
    }
  }
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
    }
  },
  services : allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "uslugi"}}}) {
    edges {
      node {
        frontmatter {
          services {
            description
            image
            text
            title
          }
        }
      }
    }
  }
}
`