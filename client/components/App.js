import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImagesSlide from './ImagesSlide.js';
import ImagesList from './ImagesList.js';
import Bullets from './Bullets.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'main',
      images: null
    };
    this.clickToSelect = this.clickToSelect.bind(this);
    this.ClickToZoom = this.ClickToZoom.bind(this);
    this.handleExit = this.handleExit.bind(this);
  };

  componentDidMount() {
    this.grabImages()
  };

  grabImages() {
    let params = new URLSearchParams(document.location.search.substring(1));
    let productId = params.get('productId')
    axios.get(`http://localhost:3002/images/${productId}`)
      .then((res) => {
        const images = res.data;
        images[0].selected = true;
        this.setState({
          images,
        });
      })
      .catch(err => console.log(err))
  }

  clickToSelect(image) {
    const { images } = this.state;
    for (let i = 0; i < images.length; i++) {
      if (image === images[i]) {
        images[i].selected = true;
      } else {
        images[i].selected = false;
      }
    };
    this.setState({
      images,
    });
  };
  ClickToZoom() {
    this.setState({
      view: 'zoom'
    });
  };

  handleExit() {
    this.setState({
      view: 'main'
    });
  };


  render() {
    let view = this.state.view;
    if (!this.state.images) {
      return <div></div>;
    };
    return (

      <div>
        {view === 'main' ?
          (<div>
            <ImagesSlide images={this.state.images} ClickToZoom={this.ClickToZoom} />
            <Bullets images={this.state.images} clickToSelect={this.clickToSelect} />
          </div>)
          : (<ImagesList images={this.state.images} handleExit={this.handleExit} />)}

      </div>
    );
  };
};

export default App;
