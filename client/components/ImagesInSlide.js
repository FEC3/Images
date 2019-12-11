
import React, { Component } from 'react';
import Styled from 'styled-components';


const InsideImage = Styled.div`
  a {
    cursor: zoom-in;
  }
`;

const ImagesInSlide = (props) => (
  <InsideImage className="carousel-item" >
    <a href={`#${props.id}`}><img className="d-block w-100" src={props.imageUrl.url} /></a>

  </InsideImage>
)

export default ImagesInSlide;