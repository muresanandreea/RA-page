import React from "react";
import {HomepageWrapper} from './Homepage.style';
import {Hero} from "./Hero/Hero";
import {MidSection} from "./MidSection/MidSection";
import {PortofolioSection} from "./PortofolioSection/PoftofolioSection";

export const Homepage = () => {
    return (
        <HomepageWrapper>
            <Hero/>
            <MidSection/>
            <PortofolioSection/>
        </HomepageWrapper>
    )
}
