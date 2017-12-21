import React, {Component} from 'react';
import Carousel from 'react-slick';

export default class CarouselWrapper extends Component {

  render() {
    let settings = {
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true
    };
    
    let image = [
      <img key='one' className='header-background-image'
           src='https://s3.eu-central-1.amazonaws.com/absolutejobs-files-dev/images/2017/12/15/b9de3a7abdb7ac6ba4b3d317.jpeg'
           alt=''/>,
      <img key='two' className='header-background-image'
           src='https://s3.eu-central-1.amazonaws.com/absolutejobs-files-dev/images/2017/12/15/a4f67c13209e197793bf18ab.jpeg'
           alt=''/>,
      <img key='three' className='header-background-image'
           src='https://s3.eu-central-1.amazonaws.com/absolutejobs-files-dev/images/2016/12/22/7f8a131245ebd3795e2eb10e.jpeg'
           alt=''/>,
    ];
    return (
      <Carousel {...settings}>
        {image}
      </Carousel>
    )
  }

}
