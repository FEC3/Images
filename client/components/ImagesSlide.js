import React, { Component } from 'react';
import ImageInSlide from './ImageInSlide.js';
import Styled from 'styled-components';

const Slide = Styled.div`
  height: auto;
  width: 60%;
  position: absolute;
  left: 100px;
  top: 200px;
  .SlideSize {
    margin:auto;
    height: 549px;
    width: 549px;
    .ImageSize{
      height: 549px;
      width: 549px;
      img{
        cursor: zoom-in;
      }
    }
  }
`;

const LeftArrow = Styled.div`
  position: absolute;
  top: 50%;
  left: 60px;
  i{
    color: black;
    font-size: 20px;
    height: 100px;
    margin-right: -30px;
    cursor:pointer
  }
`;
const RightArrow = Styled.div`
  position: absolute;
  top: 50%;
  left: 690px;
  i{
    color: black;
    font-size: 20px;
    height: 100px;
    margin-left: -30px;
    cursor:pointer
  }
`;

const ImagesSlide = (props) => (
  <Slide>
    <div id="carouselExampleControls" className="carousel slide SlideSize" data-ride="carousel" data-interval="false">
      <div className= "carousel-inner" onClick={() => props.onBigImageClick()}>
        <div className="carousel-item active ImageSize" >
          <img className="d-block w-100"  src={props.images[0].url} alt="First slide" />
        </div>
        {props.images.slice(1).map((imageUrl, index) => <ImageInSlide imageUrl={imageUrl} key={index} />)}
      </div>
    </div>
    <LeftArrow >
      <i className="fas fa-arrow-left carousel-control-prev" href="#carouselExampleControls" data-slide="prev">  </i>
      </LeftArrow>
    <RightArrow >
      <i className="fas fa-arrow-right carousel-control-next" href="#carouselExampleControls" data-slide="next"></i>
      </RightArrow>
  </Slide>
)

export default ImagesSlide;