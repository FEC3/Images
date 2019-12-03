import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImagesSlide from './ImagesSlide.jsx'
import Bullets from './Bullets.jsx'


class ImagesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [{ id: 0, url: "https://source.unsplash.com/1600x900/?corgi", selected: false }, { id: 1, url: "https://source.unsplash.com/1600x900/?mountain,sunset", selected: false }, { id: 2, url: 'https://source.unsplash.com/1600x900/?airplane', selected: false }, { id: 3, url: 'https://source.unsplash.com/1600x900/?guitar', selected: false }]
    }
    this.onImageClick = this.onImageClick.bind(this);
  }

  onImageClick(image) {
    const { images } = this.state;
    for (let i = 0; i < images.length; i++) {
      if (image === images[i]) {
        images[i].selected = true;
      } else {
        images[i].selected = false;
      }
    }
    this.setState({
      images,
    });
  }

  render() {
    return (
      <div>
        <ImagesSlide images={this.state.images} />
        <Bullets images={this.state.images} onImageClick={this.onImageClick} />
      </div>
    )
  }
}



ReactDOM.render(<ImagesApp />, document.getElementById('imagesApp'));