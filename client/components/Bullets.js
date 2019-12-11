import React from 'react';
import Styled from 'styled-components'

const ImagesWrapper = Styled.ul`
position: relative;
margin-right: 40px;
`;

const Image = Styled.div`
img {
  width:  60px;
  height: 60px;
  cursor: pointer;
  margin: 4px;
  padding: 1px;
}
.Border {
   border: solid 2px black;
 }
`;


const Bullets = (props) => (
   <ImagesWrapper >
      {props.images.map((image, index) => <Image key={index} > <img src={image.url} className={image.selected ? 'Border for-test' : 'for-test'} data-target="#carouselExampleControls" data-slide-to={index} onClick={() => props.clickToSelect(image)} /> </Image>)}
   </ImagesWrapper>
)

export default Bullets;