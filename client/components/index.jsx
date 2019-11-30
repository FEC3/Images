import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImagesSlide from './ImagesSlide.jsx'



class ImagesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesUrl: ["https://source.unsplash.com/1600x900/?corgi", "https://source.unsplash.com/1600x900/?mountain,sunset", 'https://source.unsplash.com/1600x900/?airplane', 'https://source.unsplash.com/1600x900/?guitar']
    }

  }

  render() {
    return (
      <div>
        <ImagesSlide imagesUrl={this.state.imagesUrl} />
      </div>
    )
  }
}



ReactDOM.render(<ImagesApp />, document.getElementById('imagesApp'));