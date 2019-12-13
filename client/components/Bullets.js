import React from 'react';
import Styled from 'styled-components'

const ImagesWrapper = Styled.ul`
position: relative;
margin-right: 30px;
.Border {
   border: solid 1px black;
 }
`;

const Image = Styled.img`

  width:  65x;
  height: 65px;
  cursor: pointer;
  margin-bottom: 4px;
  padding: 1px;
`;

const Bullets = (props) => (
   <ImagesWrapper >
      {props.images.map((image, index) => <Image className={image.selected ? 'Border for-test' : 'for-test'}  key={index}  src={image.url} data-target="#carouselExampleControls" data-slide-to={index} onClick={() => props.clickToSelect(image)} /> )}
   </ImagesWrapper>
)

export default Bullets;