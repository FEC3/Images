import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImagesSlide from './ImagesSlide.jsx'
import Bullets from './Bullets.jsx'


class ImagesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUrls: [{ id: 1, url: "https://source.unsplash.com/1600x900/?corgi" }, { id: 2, url: "https://source.unsplash.com/1600x900/?mountain,sunset" }, { id: 3, url: 'https://source.unsplash.com/1600x900/?airplane' }, { id: 4, url: 'https://source.unsplash.com/1600x900/?guitar' }],
      currentImage: { id: 1, url: "https://source.unsplash.com/1600x900/?corgi" },
      imagesUrlList: [{ id: 2, url: "https://source.unsplash.com/1600x900/?mountain,sunset" }, { id: 3, url: 'https://source.unsplash.com/1600x900/?airplane' }, { id: 4, url: 'https://source.unsplash.com/1600x900/?guitar' }]
    }
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(newImage) {
  var newList =[];
  var allUrls = this.state.allUrls
  for (let i=0; i<allUrls.length; i++){
    if(newImage.id !== allUrls[i].id){
     newList.push(allUrls[i])
    }
  }
  this.setState({
   currentImage: newImage,
   imagesUrlList: newList
  })
  }

  render() {
    return (
      <div>
        <ImagesSlide currentImage={this.state.currentImage} imagesUrlList={this.state.imagesUrlList} />
        <Bullets currentImage={this.state.currentImage}  changeImage={this.changeImage} allUrls={this.state.allUrls} />
      </div>
    )
  }
}



ReactDOM.render(<ImagesApp />, document.getElementById('imagesApp'));