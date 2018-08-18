
import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import imageOne from '../../images/carousel-one.jpg'
import imageTwo from '../../images/carousel-two.jpg'
import imageThree from '../../images/carousel-three.jpg'

const items = [
  {
    src: imageOne,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: imageTwo,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: imageThree,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const CustomCarousel = () => <UncontrolledCarousel items={items} controls={false} />;

export default CustomCarousel;
