import React from 'react';


const Bullets = (props) => (
   <ul className="bullets-container" >
      <div className="image"> <img src={props.images[0].url} className={props.images[0].selected ? "withBorder" : "noBorder"} data-target="#carouselExampleControls" data-slide-to="0" onClick={() => props.onImageClick(props.images[0])} /> </div>
      <div className="image"> <img src={props.images[1].url} className={props.images[1].selected ? "withBorder" : "noBorder"} data-target="#carouselExampleControls" data-slide-to="1" onClick={() => props.onImageClick(props.images[1])} /> </div>
      <div className="image"> <img src={props.images[2].url} className={props.images[2].selected ? "withBorder" : "noBorder"} data-target="#carouselExampleControls" data-slide-to="2" onClick={(e) => props.onImageClick(props.images[2])} /> </div>
      <div className="image"> <img src={props.images[3].url} className={props.images[3].selected ? "withBorder" : "noBorder"} data-target="#carouselExampleControls" data-slide-to="3" onClick={(e) => props.onImageClick(props.images[3])} /> </div>
      <div className="image"> <img src={props.images[4].url} className={props.images[4].selected ? "withBorder" : "noBorder"} data-target="#carouselExampleControls" data-slide-to="4" onClick={(e) => props.onImageClick(props.images[4])} /> </div>

   </ul>
)

export default Bullets;