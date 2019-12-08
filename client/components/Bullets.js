import React from 'react';
import Styled from 'styled-components'

const ImagesWrapper = Styled.ul`
position: absolute;
top: 200px;
margin-left: 10px;
`;

const Image =  Styled.div`
padding: 4px;
img {
  width:  60px;
  height: 60px;
  cursor: pointer;

}
.Border {
   border: solid 2px black;
 }
`;





const Bullets = (props) => (
   <ImagesWrapper >
      <Image > <img src={props.images[0].url} className={props.images[0].selected ? 'Border for-test' :'for-test'} data-target="#carouselExampleControls" data-slide-to="0" onClick={() => props.clickToSelect(props.images[0])} /> </Image>
      <Image > <img src={props.images[1].url} className={props.images[1].selected ? 'Border for-test' :'for-test'} data-target="#carouselExampleControls" data-slide-to="1" onClick={() => props.clickToSelect(props.images[1])} /> </Image>
      <Image > <img src={props.images[2].url} className={props.images[2].selected ? 'Border for-test' :'for-test'} data-target="#carouselExampleControls" data-slide-to="2" onClick={() => props.clickToSelect(props.images[2])} /> </Image>
      <Image > <img src={props.images[3].url} className={props.images[3].selected ? 'Border for-test' :'for-test'} data-target="#carouselExampleControls" data-slide-to="3" onClick={() => props.clickToSelect(props.images[3])} /> </Image>
      <Image > <img src={props.images[4].url} className={props.images[4].selected ? 'Border for-test' :'for-test'} data-target="#carouselExampleControls" data-slide-to="4" onClick={() => props.clickToSelect(props.images[4])} /> </Image>
   </ImagesWrapper>
)

export default Bullets;