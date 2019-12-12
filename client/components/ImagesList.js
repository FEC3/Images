
import React, { Component } from 'react';
import Styled from 'styled-components';

const ZoomedImgaes = Styled.div`
  position: absolute;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  top: 0;
  // left: 50%;
  // margin-left: -50%;
  i{
    position: fixed;
    top: 10px;
    right: 45px;
    font-size:36px;
    cursor: pointer;
    color: hsla(0,0%,100%,.5);

  }
  i:hover {
    color: hsla(0,0%,100%,2);
  }
  img{
    margin-bottom: 80px;
  }
`;

const ImagesList = (props) => (
  <ZoomedImgaes>
    <i className="fa fa-times-circle" onClick={() => props.handleExit()} ></i>
    {props.images.map((image, index) => <img id={index} className="d-block w-100" src={image.url} key={index} />)}

  </ZoomedImgaes>
);
export default ImagesList;