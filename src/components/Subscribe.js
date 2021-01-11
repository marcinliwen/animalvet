import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"
import addToMailchimp from "gatsby-plugin-mailchimp"

class MailChimpForm extends React.Component {
    constructor() {
      super()
      this.state = { email: "", result: null }
    }
    _handleSubmit = async e => {
      e.preventDefault()
      const result = await addToMailchimp(this.state.email)
      this.setState({result: result})
    }
    
    handleChange = event => {
      this.setState({ email: event.target.value })
    }

    render() {
       
        
      return(
        <section id="subscribe" className="main-background">
            <div className="container">
                <div className="row">
                    <div className="col-4 subscribe-img">
                        <Img  fluid={this.props.data.dog.childImageSharp.fluid} />
                    </div>
                    <div className="col-8">
                        <h3 className="main-text"><div>Bądź na bierząco,</div>zapisz się do newslettera!</h3>
                        {this.state.result &&  (this.state.result.result === "error" ? <span className="alert">Już subskrybujesz nasz newsletter.</span> : <span className="alert">Dziękujemy, od dziś subskrybujesz nasz newsletter.</span>)}
                        <form onSubmit={this._handleSubmit}>
                            <div className="form-group">
                                <input type="email" placeholder="E-mail" onChange={this.handleChange}/>
                                <button className="btn" type="submit" >Zapisz się!</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
)}
      }
export default ()=>(
    <StaticQuery 
      query={
        graphql`
          query{
            dog : file(relativePath: {eq: "dog.png"}) {
                childImageSharp {
                    fluid{
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
              },
            }
          `
      }
      render={(data)=> <MailChimpForm data={data}/>}
    />
  )
