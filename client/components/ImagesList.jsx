
import React, { Component } from 'react';

const ImagesList = (props) => (
  <div className='images-list'>
    <i className="fa fa-times-circle close" onClick={()=> props.handleExit()}></i>
      {props.images.map((image, index) => <img className="d-block w-100" src={image.url} />)}

  </div>
)
export default ImagesList;