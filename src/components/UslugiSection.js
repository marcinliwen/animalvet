import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { InView } from 'react-intersection-observer';

import Img from "gatsby-image"

import Button from "./Button"
import ArrowRight from "../components/Icons/ArrowR"
import control from "../images/control.svg"
import rtg from "../images/rtg.svg"
import profilactic from "../images/profilactic.svg"
import vaccine from "../images/vaccine.svg"
import bandage from "../images/bandage.svg"

import "./uslugisection.css"

const UslugiSection = (props) =>{
  
return(
  <>{props.isHomepage ?
    <Services props={props} />
    :
    <section id="uslugi" className="">
      <div className="container">
        <div className="uslugi-header d-block">
            <h2>{props.title}</h2>
            <div className="row">
              <div className="border-b col-8" dangerouslySetInnerHTML={{ __html: props.html }} />
            </div>
        </div>
       <Services props={props}  />
      </div>
    </section>
  }
    </>
)
}

const Services = ({props}) =>{

  
  return(
    <InView triggerOnce delay={300}>
      {({ inView, ref, entry }) => ( 
        <div className={`uslugi-content row ${inView?"inview":""}`} ref={ref}>
        {props.services.map((item, index)=>(
          <div className="uslugi-cart col-4 slide-top" style={{animationDelay:`${index * 0.5}s`}}>
          <div className="uslugi-cart-title">
            <div className="uslugi-icon"><img src={item.image} alt={item.title}/></div>
            <h3><Link to={"/uslugi/" + item.title}>{item.title}</Link></h3>
          </div>
          <div className="desc">
            <p>{item.text}</p>
            <Link className="uslugi-more" to={"/uslugi/" + item.title}><span>Dowiedz się więcej </span><ArrowRight /></Link>
          </div>
        </div>
        ))}
        {props.isHomepage? 
        <div className="uslugi-cart for-btn col-4">
        <Link to="/uslugi" >
          <Button color="#fff" background="#F24C3D">Poznaj nasze usługi </Button>
        </Link>
        </div>:""}
      </div>
    )}
   </InView>
  )
}

export default UslugiSection



