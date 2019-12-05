
import React, { Component } from 'react';
import Styles from './ImagesList.module.css'


const ImagesList = (props) => (
  <div className={Styles.imageslist}>
    <i className={`fa fa-times-circle ${Styles['close']}`}  onClick={()=> props.handleExit()}></i>
      {props.images.map((image, index) => <img className="d-block w-100" src={image.url} />)}

  </div>
)
export default ImagesList;