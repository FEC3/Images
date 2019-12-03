import React, { Component } from 'react';
import ImageInSlide from './ImageInSlide.jsx'

const ImagesSlide = (props) => (
  <div className="slide-container">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={props.images[0].url} alt="First slide"/>
        </div>
        {props.images.slice(1).map((imageUrl, index) => <ImageInSlide imageUrl={imageUrl} key={index} />)}
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon prev-pos" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon next-pos" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
)

export default ImagesSlide;