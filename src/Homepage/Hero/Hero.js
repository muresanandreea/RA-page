import React from 'react';
import AliceCarousel from "react-alice-carousel";
import './alice-carousel.css';
import {HeroWrapper} from './Hero.style';
import Image1 from '../../assets/anotherStormTrooper.jpg';
import Image2 from '../../assets/bobaFett.jpg';
import Image3 from '../../assets/stormTrooper.jpg';

const handleDragStart = e => e.preventDefault();

const items = [ <img src={Image1} onDragStart={handleDragStart}/>,
    <img src={Image2} onDragStart={handleDragStart}/>,
    <img src={Image3} onDragStart={handleDragStart}/>
];

export const Hero = () => {
    return (
        <HeroWrapper>
            <AliceCarousel mouseTracking items={items} infinite={true} autoPlay={true} autoPlayInterval={2000}
                           />
        </HeroWrapper>
    )
}