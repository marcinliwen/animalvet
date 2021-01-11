import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"

import SvgIcon from '@material-ui/core/SvgIcon';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { render } from "react-dom";

class Pacjencicarousel extends React.Component{
  constructor(props){
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {current: 0};
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  
  handleChange = (index) =>{
    this.setState({current: index})
  }
  
    render() {
      var settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      return(
        <div>
           <Slider ref={c => (this.slider = c)} {...settings} beforeChange={(current, next)=>this.handleChange(next)} >
            {this.props.pacjenci.map((item, index)=>(
            <div className="clients-item" id={`item_${index}`} key={`key${index}`}>
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
           
            </Slider>
            
            <div className="slider-nav">
              <button  onClick={this.previous}>
                {this.state.current < 1 ?<Slidearrow style={{ color: '#bcbcbc', fontSize: "25px", transform: "scaleX(-1)" }}/>
                 :<Slidearrow style={{ color: '#000', fontSize: "25px", transform: "scaleX(-1)" }}/>}
                
              </button>
              <div>
                  <span className={this.state.current < 1 ? "inactive" :""} >{this.state.current + 1}</span> / <span className={this.state.current >= this.props.pacjenci.length - 1 ? "inactive" :""}>{this.props.pacjenci.length}</span></div>
              <button  onClick={this.next}>
              {this.state.current >= this.props.pacjenci.length - 1 ? 
                <Slidearrow style={{ color: '#bcbcbc', fontSize: "25px" }}/>
                :<Slidearrow style={{ color: '#000', fontSize: "25px" }}/>
              }
              </button>
            </div>
          </div>
      )
    }
    
}

export default Pacjencicarousel;

function Slidearrow(props) {
    return (
      <SvgIcon {...props} viewBox="0 0 32 14">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.8642 7.45802H0.864243V6.45802H30.8642V7.45802Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4054 0.94283L31.7032 6.94512L31.0133 7.66901L24.7155 1.66672L25.4054 0.94283Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6229 12.9161L30.6382 6.63069L31.3606 7.3221L25.3454 13.6075L24.6229 12.9161Z"/>
      </SvgIcon>
    );
  }