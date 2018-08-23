
import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import imageOne from '../../images/carousel-one.jpg'
import imageTwo from '../../images/carousel-two.jpg'
import imageThree from '../../images/carousel-three.jpg'

const items = [
  {
    src: imageOne,
    altText: 'Dalmatia',
    caption: '',
    // header: 'Slide 1 Header'
  },
  {
    src: imageTwo,
    altText: 'Rome',
    caption: '',
  },
  {
    src: imageThree,
    altText: 'Meteora',
    caption: '',
  }
];

const CustomCarousel = () => <UncontrolledCarousel items={items} controls={false} />;

export default CustomCarousel;
