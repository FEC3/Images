
import React, { Component } from 'react';
import Styles from './ImagesSlide.module.css'


const ImageInSlide = (props) => (
  <div className={`carousel-item ${Styles.imageSize}`}>
    <img className={`d-block w-100 ${Styles.zoom}`} src={props.imageUrl.url} onClick={() => props.onBigImageClick()} alt="" />
  </div>
)

export default ImageInSlide;