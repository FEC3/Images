import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImagesSlide from './ImagesSlide.js';
import ImagesList from './ImagesList.js';
import Bullets from './Bullets.js';
// import Styled from 'styled-components';
import axios from 'axios';

const ImageServiceStyle = window.styled.div`
  max-width: 700px;
  max-height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;

`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'main',
      images: [ { "url" : "", "selected" : false }, { "url" : "", "selected" : false }, { "url" : "", "selected" : false }, { "url" : "", "selected" : false }, { "url" : "", "selected" : false } ]
    };

    this.clickToSelect = this.clickToSelect.bind(this);
    this.ClickToZoom = this.ClickToZoom.bind(this);
    this.handleExit = this.handleExit.bind(this);
  };

  async componentDidMount() {
    await this.grabImages()
  };

  grabImages() {
    let params = new URLSearchParams(document.location.search.substring(1));
    let pid = params.get('pid')

    axios.get(`/images/${pid}`)
      .then((res) => {
        const images = res.data;
        images[0].selected = true;
        this.setState({
          images,
          view: 'main'
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
      view: 'main',
    });
  };


  render() {
    let view = this.state.view;
    if (view ==="") {
      return <ImageServiceStyle></ImageServiceStyle>;
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
