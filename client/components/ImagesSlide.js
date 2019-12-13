import React, { Component } from 'react';
import ImagesInSlide from './ImagesInSlide.js';
import Styled from 'styled-components';

const Slide = Styled.div`
  position: relative;
  align-items: center;
  margin-left: 50px;
  .SlideSize {
    height: 500px;
    width: 500px;
    cursor: zoom-in;
  }
`;

const LeftArrow = Styled.div`
  position: absolute;
  top: 50%;
  left: -45px;
  i{
    color: black;
    font-size: 20px;
    cursor:pointer
  }
`;

const RightArrow = Styled.div`
  position: absolute;
  top: 50%;
  left: 525px;
  i{
    color: black;
    font-size: 20px;
    cursor:pointer
  }
`;


const ImagesSlide = (props) => (

  <Slide>
    <div id="carouselExampleControls" className="carousel slide SlideSize" data-ride="carousel" data-interval="false">
      <div className="carousel-inner" onClick={() => props.ClickToZoom()} >
        {console.log(props.firstImg)}
        <div className="carousel-item active" >
          <img className="d-block w-100" src={props.images[0].url} />
        </div>
        {props.images.slice(1).map((imageUrl, index) => <ImagesInSlide imageUrl={imageUrl} key={index} id={index + 1} />)}
      </div>
    </div>
    <LeftArrow >
      <i className="fas fa-arrow-left carousel-control-prev" href="#carouselExampleControls" data-slide="prev">  </i>
    </LeftArrow>
    <RightArrow >
      <i className="fas fa-arrow-right carousel-control-next" href="#carouselExampleControls" data-slide="next"></i>
    </RightArrow>
  </Slide>
);


export default ImagesSlide;