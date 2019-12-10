import React from 'react'
import { mount, shallow, render } from 'enzyme'
import sampleImages from './fakeData'
import App from '../client/components/App';
import ImagesSlide from '../client/components/ImagesSlide';
import ImagesInSlide from '../client/components/ImagesInSlide';
import ImagesList from '../client/components/ImagesList';
import Bullets from '../client/components/Bullets';


describe('<App/>', () => {
  test('It should render 1 div component ', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
    expect(component.find('div')).toHaveLength(1);
    expect(component.find('ImagesSlide')).toHaveLength(1);
    expect(component.find('Bullets')).toHaveLength(1);
  });

  test('Should renders state keys correctly', () => {
    const component = shallow(<App />);
    expect(component.instance().state.view).toBe("main");
    expect(component.instance().state.images.length).toEqual(5);
  });
});


describe('<ImagesSlide>', () => {
  test('It should render all components of <ImagesSlide>', () => {
    const component = shallow(<ImagesSlide images={sampleImages} />);
    expect(component).toHaveLength(1);
    expect(component.find('div')).toHaveLength(3);
    expect(component.find('div.carousel')).toHaveLength(1);
    expect(component.find('div.carousel-inner')).toHaveLength(1);
    expect(component.find('div.carousel-item')).toHaveLength(1);
    expect(component.find('ImagesInSlide')).toHaveLength(4);
    expect(component.find('img')).toHaveLength(1);
    expect(component.find('LeftArrow')).toHaveLength(0);
    expect(component.find('RighttArrow')).toHaveLength(0);
  });
});

describe('<ImagesInSlide>', () => {
  test('It should render all components of <ImagesInSlide>', () => {
    const component = shallow(<ImagesInSlide imageUrl={sampleImages[0]} />);
    expect(component).toHaveLength(1);
    expect(component.find('img')).toHaveLength(1);
  });
});

describe('<Bullets>', () => {
  test('It should render all components of <Bullets>', () => {
    const component = shallow(<Bullets images={sampleImages} />);
    expect(component).toHaveLength(1);
    expect(component.find('img.for-test')).toHaveLength(5);
  });
});

describe('<ImagesList>', () => {
  test('It should render all components of <ImagesList>', () => {
    const component = shallow(<ImagesList images={sampleImages} />);
    expect(component).toHaveLength(1);
    expect(component.find('img')).toHaveLength(5);
    expect(component.find('i')).toHaveLength(1);

  });
});


describe('ClickToZoom && handleExit', () => {
  test('It should change the value of view to "zoom" on ClickToZoom and back to "main" on handleExit', () => {
    //Change view to zoom after image in slider is click (ClickToZoom function)
    const component = mount(<App />);
    const elementClicked = component.find('div.carousel-inner');
    elementClicked.find('div.carousel-inner').simulate('click');
    expect(component.state().view).toBe('zoom');
    //Change view back to main after exit button is click (handleExit function)
    const exitClicked = component.find('i.fa');
    exitClicked.find('i.fa').simulate('click');
    expect(component.state().view).toBe('main');
    console.log(component.state().view)

  });
});

describe('clickToSelect', () => {
  test('It should change the value of selected to "true" on click', () => {
    const component = mount(<App />);
    const imgClicked = component.find('img.for-test').at(0);
    imgClicked.find('img.for-test').at(0).simulate('click');
    expect(component.state().images[0].selected).toBe(true);
  });
});





