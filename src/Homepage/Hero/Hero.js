import React from 'react';
import AliceCarousel from "react-alice-carousel";
import './alice-carousel.css';
import {HeroWrapper} from './Hero.style';
import Image1 from '../../assets/landscape1.jpg';
import Image2 from '../../assets/landscape2.jpg';
import Image3 from '../../assets/landscape3.jpg';
import Image4 from '../../assets/landscape4.jpg';
import Image5 from '../../assets/landscape5.jpg';

const handleDragStart = e => e.preventDefault();

const items = [ <img src={Image1} onDragStart={handleDragStart}/>,
    <img src={Image2} onDragStart={handleDragStart}/>,
    <img src={Image3} onDragStart={handleDragStart}/>,
    <img src={Image4} onDragStart={handleDragStart}/>,
    <img src={Image5} onDragStart={handleDragStart}/>
];

export const Hero = () => {
    return (
        <HeroWrapper>
            <AliceCarousel mouseTracking items={items} infinite={true} autoPlay={true} autoPlayInterval={2000}
                           />
        </HeroWrapper>
    )
}