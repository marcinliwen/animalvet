import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"


const Subscribe = props =>(
    <section id="subscribe" className="main-background">
        <div className="container row">
            <div className="col-4 subscribe-img">
                <Img  fluid={props.image} />
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
    </section>
)
export default Subscribe
