import React, { Component } from 'react';
import ImageInSlide from './ImageInSlide.jsx'
import Styles from './ImagesSlide.module.css'


const ImagesSlide = (props) => (
  <div className={Styles.slideContainer}>
    <div id="carouselExampleControls" className={`carousel slide ${Styles.imagesSlide} `} data-ride="carousel" data-interval="false">
      <div className= "carousel-inner" onClick={() => props.onBigImageClick()}>
        <div className={`carousel-item active ${Styles.imageSize}`} >
          <img className={`d-block w-100 ${Styles.zoom}`}  src={props.images[0].url} alt="First slide" />
        </div>
        {props.images.slice(1).map((imageUrl, index) => <ImageInSlide imageUrl={imageUrl} key={index} />)}
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <i className={`fas fa-arrow-left ${Styles.leftArrow} `}> </i>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <i className={`fas fa-arrow-right ${Styles.rightArrow} `} ></i>
    </a>
  </div>
)


export default ImagesSlide;