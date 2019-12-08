
import React, { Component } from 'react';
import Styled from 'styled-components';

const ZoomedImgaes = Styled.div`
  top: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  i{
    position: fixed;
    top: 10px;
    right: 45px;
    font-size:36px;
    cursor: pointer;
    position: fixed;
    color:white
  }
`;


const ImagesList = (props) => (
  <ZoomedImgaes>
    <i className="fa fa-times-circle" onClick={()=> props.handleExit()}></i>
      {props.images.map((image, index) => <img className="d-block w-100" src={image.url} key={index}/>)}

  </ZoomedImgaes>
);
export default ImagesList;