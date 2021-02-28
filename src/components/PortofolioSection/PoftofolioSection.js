import React from 'react';
import {PortofolioSectionWrapper, PortofolioSectionTitle, PortofolioBoxesWrapper,
    PortofolioLogoBox,PortofolioLogoDescription,PortofolioLogoImage,
    PortofolioWebBox,PortofolioWebDescription,PortofolioWebImage,
    PortofolioMobileBox,PortofolioMobileDescription,PortofolioMobileImage} from './PortofolioSection.style';

export const PortofolioSection = () => {

    return (
        <PortofolioSectionWrapper>
            <PortofolioSectionTitle>Portofolio</PortofolioSectionTitle>
            <PortofolioBoxesWrapper>
            <PortofolioLogoBox>
                <PortofolioLogoImage/>
                <PortofolioLogoDescription>Bacon ipsum dolor amet drumstick shoulder meatball jowl jerky cupim bresaola shank chislic. Prosciutto pork loin drumstick, turducken ball tip hamburger bacon cow filet mignon porchetta short ribs frankfurter ground round.
                </PortofolioLogoDescription>
            </PortofolioLogoBox>
                <PortofolioWebBox>
                    <PortofolioWebImage/>
                    <PortofolioWebDescription>Chislic kielbasa fatback ham hock pastrami drumstick frankfurter. Flank pork loin drumstick short loin salami meatloaf. Venison frankfurter ball tip meatball tri-tip, tenderloin tail buffalo pork jowl pork loin biltong ground round. Tail meatball kielbasa shankle.
                    </PortofolioWebDescription>
                </PortofolioWebBox>
                <PortofolioMobileBox>
                    <PortofolioMobileImage/>
                    <PortofolioMobileDescription>Pastrami doner filet mignon, sausage tail cow biltong ribeye kevin pancetta venison beef brisket cupim. Corned beef salami hamburger turkey, beef pork chop kevin strip steak ham hock beef ribs cupim cow tenderloin biltong.
                    </PortofolioMobileDescription>
                </PortofolioMobileBox>
            </PortofolioBoxesWrapper>

        </PortofolioSectionWrapper>

    )
};