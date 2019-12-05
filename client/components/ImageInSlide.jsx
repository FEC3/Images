
import React, { Component } from 'react';

const ImageInSlide = (props) => (
  <div className="carousel-item ">
    <img className="d-block w-100" src={props.imageUrl.url} onClick={() => props.onBigImageClick()} alt="" />
  </div>
)

export default ImageInSlide;