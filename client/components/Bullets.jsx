import React from 'react';
import Item from './Item.jsx'


const Bullets = (props) => (
 <ul className="bullets-container" >
    {props.allUrls.map((image, index) => <Item image={image} key={index} changeImage={props.changeImage} currentImage={props.currentImage} />)}
 </ul>
)

export default Bullets;