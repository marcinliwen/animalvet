import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Img from "gatsby-image"

import Button from "./Button"
import ArrowRight from "../components/Icons/ArrowR"
import control from "../images/control.svg"
import rtg from "../images/rtg.svg"
import profilactic from "../images/profilactic.svg"
import vaccine from "../images/vaccine.svg"
import bandage from "../images/bandage.svg"

const UslugiSection = (props) =>{
  
return(
    <section id="uslugi" className="">
      <div className="container">
        <div className="uslugi-header d-block">
            <h2>{props.title}</h2>
            <div className="row">
              <div className="border-b col-8" dangerouslySetInnerHTML={{ __html: props.html }} />
            </div>
        </div>
       <Services items={props.services} />
        {/*<div className="uslugi-content">
          <div className="uslugi-cart">
            <div className="uslugi-cart-title">
              <div className="uslugi-icon"><img src={control} alt="Badania kontrolne"/></div>
              <h3>Badania kontrolne</h3>
            </div>
            <div className="desc">
              <p>Wykonujemy badanie przed wyjazdem z kraju, chipowanie oraz wystawiamy paszporty.</p>
              <a className="uslugi-more"><span>Dowiedz się więcej </span><ArrowRight /></a>
            </div>
          </div>
          <div className="uslugi-cart">
            <div className="uslugi-cart-title">
              <div className="uslugi-icon"><img src={rtg} alt="RTG"/></div>
              <h3>Rtg</h3>
            </div>
            <div className="desc">
              <p>Wykonujemy zdjęcia RTG.</p>
              <a className="uslugi-more"><span>Dowiedz się więcej </span><ArrowRight /></a>
            </div>
          </div>
          <div className="uslugi-cart">
            <div className="uslugi-cart-title">
              <div className="uslugi-icon"><img src={profilactic} alt="profilaktyka"/></div>
              <h3>Profilaktyka</h3>
            </div>
            <div className="desc">
              <p>Wykonujemy badania krwi, moczu oraz wysyłamy próbki tkanek w przypadku badań histologicznych i cytologicznych.Prowadzimy diagnostykę alergii, chorób zakaźnych i genetycznych.</p>
              <a className="uslugi-more"><span>Dowiedz się więcej </span><ArrowRight /></a>
            </div>
          </div>
          <div className="uslugi-cart">
            <div className="uslugi-cart-title">
              <div className="uslugi-icon"><img src={vaccine} alt="Szczepienie"/></div>
              <h3>Szczepienie</h3>
            </div>
            <div className="desc">
              <p>Wykonujemy szczepienia psów, kotów oraz królików. Zarówno te wstępne jak i coroczne.</p>
              <a className="uslugi-more"><span>Dowiedz się więcej </span><ArrowRight /></a>
            </div>
          </div>
          <div className="uslugi-cart">
            <div className="uslugi-cart-title">
              <div className="uslugi-icon"><img src={bandage} alt="Ortopedia"/></div>
              <h3>Ortopedia</h3>
            </div>
            <div className="desc">
              <p>Wykonujemy osteosyntezę, leczenie zerwanych więzadeł oraz wad kostnych wrodzonych i nabytych.</p>
              <a className="uslugi-more"><span>Dowiedz się więcej </span><ArrowRight /></a>
            </div>
          </div>
</div>*/}
      </div>
    </section>
)
}

const Services = ({items}) =>{

  
  return(
    <div className="uslugi-content row">
    {items.map(item=>(
      <div className="uslugi-cart col-4">
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
  </div>
  )
}

export default UslugiSection



