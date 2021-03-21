import React from "react";
import {PortfolioWrapper,ImagesWrapper, PortfolioAssetsWrapper} from './Portofolio.style';
import {
    ButtonText, ButtonWrapper,
    ButtonWrapperCurrent,
    Divider,
    SideMenuSections,
    SideMenuWrapper
} from "../components/utils/stickySideMenu/StickySideMenu.style";
import {headerLinks} from "../components/Header/constants";
import {portfolioWeb,portfolioLogo,portfolioMobile} from './portfolioImages';
import {Title} from "../Services/Services.style";

export const Portfolio = () => {

    const imagesWeb = portfolioWeb.map (e => {
        return <img key={e.image} alt={e.alt} src={e.image} className="img-responsive" />
    });

    const imagesLogo = portfolioLogo.map (e => {
        return <img key={e.image} alt={e.alt} src={e.image} className="img-responsive" />
    });

    const imagesMobile = portfolioMobile.map (e => {
        return <img key={e.image} alt={e.alt} src={e.image} className="img-responsive" />
    });


    return (
        <PortfolioWrapper>
                <SideMenuWrapper>
                    <Divider/>
                    <SideMenuSections>
                        <ButtonWrapper href={headerLinks.services}><ButtonText>Services</ButtonText></ButtonWrapper>
                        <ButtonWrapperCurrent href={headerLinks.portfolio}><ButtonText>Portfolio</ButtonText></ButtonWrapperCurrent>
                        <ButtonWrapper href={headerLinks.aboutUs}><ButtonText>About us</ButtonText></ButtonWrapper>
                        <ButtonWrapper href={headerLinks.aboutUs}><ButtonText>Contact us</ButtonText></ButtonWrapper>
                    </SideMenuSections>
                </SideMenuWrapper>
            <PortfolioAssetsWrapper>
                <Title><h3>Landing page</h3></Title>
                <ImagesWrapper>
                    {imagesWeb}
                </ImagesWrapper>
                <Title><h3>Logo</h3></Title>
                <ImagesWrapper>
                    {imagesLogo}
                </ImagesWrapper>
                <Title><h3>Mobile</h3></Title>
                <ImagesWrapper>
                    {imagesMobile}
                </ImagesWrapper>
            </PortfolioAssetsWrapper>
        </PortfolioWrapper>
    )
}
