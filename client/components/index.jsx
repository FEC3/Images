import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImagesSlide from './ImagesSlide.jsx'
import ImagesList from './ImagesList.jsx'
import Bullets from './Bullets.jsx'


class ImagesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'main',
      images: null
    }
    this.onSmallImageClick = this.onSmallImageClick.bind(this);
    this.onBigImageClick = this.onBigImageClick.bind(this);
    this.handleExit = this.handleExit.bind(this);
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
  onSmallImageClick(image) {
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
  onBigImageClick() {
    this.setState({
      view: 'zoom'
    });
  }

  handleExit(){
    this.setState({
      view: 'main'
    });
  }


  render() {
    let view = this.state.view;
    if (!this.state.images) {
      return <div></div>
    }
    return (

      <div>
        {view === 'main' ?
          (<div>
            <ImagesSlide images={this.state.images} onBigImageClick={this.onBigImageClick} />
            <Bullets images={this.state.images} onSmallImageClick={this.onSmallImageClick} />
          </div>)
          : (<ImagesList images={this.state.images} handleExit={this.handleExit} />)}

      </div>
    )
  };
}



ReactDOM.render(<ImagesApp />, document.getElementById('imagesApp'));