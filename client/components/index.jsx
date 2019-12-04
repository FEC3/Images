import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ImagesSlide from './ImagesSlide.jsx'
import Bullets from './Bullets.jsx'


class ImagesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [{  url: "https://source.unsplash.com/1600x900/?corgi", selected: false }, {  url: "https://source.unsplash.com/1600x900/?mountain,sunset", selected: false }, { url: 'https://source.unsplash.com/1600x900/?airplane', selected: false }, {  url: 'https://source.unsplash.com/1600x900/?guitar', selected: false },{  url: 'https://source.unsplash.com/1600x900/?guitar', selected: false }]
    }
    this.onImageClick = this.onImageClick.bind(this);
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
    let params = new URLSearchParams(document.location.search.substring(1));
    let productId = params.get('productId')
    $.ajax({
      type: 'GET',
      url: `http://localhost:3002/images/${productId}`
    })
      .done((data) => {
        data[0].selected =true;
        this.setState({
          images: data
        })
      })
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