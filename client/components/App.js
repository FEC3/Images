import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImagesSlide from './ImagesSlide.js';
import ImagesList from './ImagesList.js';
import Bullets from './Bullets.js';
import Styled from 'styled-components';
import axios from 'axios';

const ImageServiceStyle = Styled.div`
  max-width: 750px;
  max-height: 550px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // align-items: flex-start;

`;

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
    let productId = params.get('pid')
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
          (
            <ImageServiceStyle>
              <Bullets images={this.state.images} clickToSelect={this.clickToSelect} />
              <ImagesSlide images={this.state.images} ClickToZoom={this.ClickToZoom} />
            </ImageServiceStyle>)
          : (<ImagesList images={this.state.images} handleExit={this.handleExit} />)}

      </div>
    );
  };
};

export default App;
