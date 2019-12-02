import React from 'react';


const Item = (props) => (
  <div>
    <button data-event-click="product-image-thumbnails" className="bullet-clickable" type="button" data-target="0" aria-controls="pip-carousel" aria-label="View image 1">
      <img src={props.image.url} value={props.image} className="image"   alt="IKEA MICKE Desk" onClick={()=> props.changeImage(props.image)} />

    </button>
  </div>
)


export default Item;