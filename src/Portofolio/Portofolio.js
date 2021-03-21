import React, {useState} from "react";
import {PortfolioWrapper,ImagesWrapper, PortfolioAssetsWrapper,TitleWrapper,Title,
    OurPortfolio, OurPortfolioTitle, Wrapper} from './Portofolio.style';
import {
    ButtonText, ButtonWrapper,
    ButtonWrapperCurrent,
    Divider,
    SideMenuSections,
    SideMenuWrapper
} from "../components/utils/stickySideMenu/StickySideMenu.style";
import {headerLinks} from "../components/Header/constants";
import {portfolioWeb,portfolioLogo,portfolioMobile} from './portfolioImages';
import {ContactUsWidget} from "../components/utils/contactUsWidget/ContactUsWidget";

export const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(false);

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
        <Wrapper>
            <OurPortfolio>
                <OurPortfolioTitle>Our <b>Portfolio</b></OurPortfolioTitle>
            </OurPortfolio>
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
                <TitleWrapper>
                    <Title>Our <b>Websites</b></Title>
                </TitleWrapper>
                <ImagesWrapper>
                    {imagesWeb}
                </ImagesWrapper>
                <TitleWrapper>
                <Title>Our <b>Logos</b></Title>
                </TitleWrapper>
                <ImagesWrapper>
                    {imagesLogo}
                </ImagesWrapper>
                <TitleWrapper>
                <Title><b>Mobile</b> responsive</Title>
                </TitleWrapper>
                <ImagesWrapper>
                    {imagesMobile}
                </ImagesWrapper>
            </PortfolioAssetsWrapper>
            <ContactUsWidget/>
        </PortfolioWrapper>
        </Wrapper>
    )
}
