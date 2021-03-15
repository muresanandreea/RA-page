import React from "react";
import {HomepageWrapper,UnderConstructionwrapper, IconWrapper, UnderConstructionText,
    UnderConstructionTextSocial, LaptopWrapper, LaptopImg} from './Homepage.style';
import Slideshow from "./Hero/index";
import {MidSection} from "./MidSection/MidSection";
import {PortofolioSection} from "./PortofolioSection/PoftofolioSection";
/*import {Hero} from "./Hero/Hero";*/
import Image1 from '../assets/anotherStormTrooper.jpg';
import Image2 from '../assets/bobaFett.jpg';
import Image3 from '../assets/stormTrooper.jpg';

export const Homepage = () => {
    return (
        <HomepageWrapper>
            {/*<Hero/>*/}
            <Slideshow
                interval={3000}
                images={[
                    Image1,Image2,Image3
                ]}/>
            <MidSection/>
            <PortofolioSection/>
{/*            <UnderConstructionwrapper>
                <LaptopWrapper>
                    <LaptopImg/>
                    <IconWrapper>
                        <i className="fas fa-cog"/>
                    </IconWrapper>
                </LaptopWrapper>
                <UnderConstructionText>COMING SOON</UnderConstructionText>
                <UnderConstructionTextSocial>
                    Meanwhile feel free to interact with our social networks
                </UnderConstructionTextSocial>
            </UnderConstructionwrapper>*/}
        </HomepageWrapper>
    )
}
