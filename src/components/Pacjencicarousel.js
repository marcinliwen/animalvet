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
              <div>{this.state.current + 1} / {this.props.pacjenci.length}</div>
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
      <SvgIcon {...props} viewBox="0 0 16 8">
        <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5L15 4.5V3.5L0 3.5L0 4.5Z" />
      </SvgIcon>
    );
  }