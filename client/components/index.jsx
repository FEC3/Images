import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImagesSlide from './ImagesSlide.jsx'
import Bullets from './Bullets.jsx'


class ImagesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    }
    this.onImageClick = this.onImageClick.bind(this);
  }

  componentDidMount() {
    this.grabImages()
  }

  grabImages() {
    let params = new URLSearchParams(document.location.search.substring(1));
    let productId = params.get('productId')
    fetch(`http://localhost:3002/images/${productId}`)
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        data[0].selected = true;
        this.setState({
          images: data
        });
      });
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
    if (!this.state.images) {
      return <div></div>
    }
    return (

      <div>
        <ImagesSlide images={this.state.images} />
        <Bullets images={this.state.images} onImageClick={this.onImageClick} />
      </div>
    )
  };
}



ReactDOM.render(<ImagesApp />, document.getElementById('imagesApp'));