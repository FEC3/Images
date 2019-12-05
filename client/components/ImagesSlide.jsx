import React, { Component } from 'react';
import ImageInSlide from './ImageInSlide.jsx'

const ImagesSlide = (props) => (
  <div className="slide-container">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
      <div className="carousel-inner" onClick={() => props.onBigImageClick()}>
        <div className="carousel-item active" >
          <img className="d-block w-100" src={props.images[0].url} alt="First slide" />
        </div>
        {props.images.slice(1).map((imageUrl, index) => <ImageInSlide imageUrl={imageUrl} key={index} />)}
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <i className="fas fa-arrow-left"></i>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <i className="fas fa-arrow-right"></i>
    </a>
  </div>
)

export default ImagesSlide;