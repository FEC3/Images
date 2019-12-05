import React from 'react';
import Styles from './Bullets.module.css'


const Bullets = (props) => (
   <ul className={Styles.bulletsContainer}>
      <div className={Styles.image}> <img src={props.images[0].url} className={props.images[0].selected ? Styles.withBorder : Styles.noBorder} data-target="#carouselExampleControls" data-slide-to="0" onClick={() => props.onSmallImageClick(props.images[0])} /> </div>
      <div className={Styles.image}> <img src={props.images[1].url} className={props.images[1].selected ? Styles.withBorder : Styles.noBorder} data-target="#carouselExampleControls" data-slide-to="1" onClick={() => props.onSmallImageClick(props.images[1])} /> </div>
      <div className={Styles.image}> <img src={props.images[2].url} className={props.images[2].selected ? Styles.withBorder : Styles.noBorder} data-target="#carouselExampleControls" data-slide-to="2" onClick={() => props.onSmallImageClick(props.images[2])} /> </div>
      <div className={Styles.image}> <img src={props.images[3].url} className={props.images[3].selected ? Styles.withBorder : Styles.noBorder} data-target="#carouselExampleControls" data-slide-to="3" onClick={() => props.onSmallImageClick(props.images[3])} /> </div>
      <div className={Styles.image}> <img src={props.images[4].url} className={props.images[4].selected ? Styles.withBorder : Styles.noBorder} data-target="#carouselExampleControls" data-slide-to="4" onClick={() => props.onSmallImageClick(props.images[4])} /> </div>
   </ul>
)

export default Bullets;