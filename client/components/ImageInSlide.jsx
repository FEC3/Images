
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ImageInSlide = (props) => (
  <div className="carousel-item">
    <img className="d-block w-100" src={props.url} alt="" />
  </div>
)

export default ImageInSlide;