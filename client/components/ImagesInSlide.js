
import React, { Component } from 'react';

const ImagesInSlide = (props) => (
  <div className="carousel-item">
    <img className="d-block w-100" src={props.imageUrl.url}/>
  </div>
);

export default ImagesInSlide;