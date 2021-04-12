import React, {useState} from "react";
import {PortfolioWrapper,ImagesWrapper, PortfolioAssetsWrapper,TitleWrapper,Title,
    OurPortfolio, OurPortfolioTitle, Wrapper, PortfolioDivider,MobileTitle,WidgetWrapper,
    PortofolioPageWrapper} from './Portofolio.style';
import {portfolioWeb,portfolioLogo,portfolioMobile} from './portfolioImages';
import {ContactUsWidget} from "../components/utils/contactUsWidget/ContactUsWidget";

export const Portfolio = ({onClose,closeModal}) => {
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
            <PortfolioAssetsWrapper>
                <TitleWrapper>
                    <Title>Websites</Title>
                </TitleWrapper>
                <ImagesWrapper>
                    {imagesWeb}
                </ImagesWrapper>
                <PortfolioDivider/>
                <TitleWrapper>
                <Title>Logos</Title>
                </TitleWrapper>
                <ImagesWrapper>
                    {imagesLogo}
                </ImagesWrapper>
                <PortfolioDivider/>
                <TitleWrapper>
                <MobileTitle>Mobile responsive</MobileTitle>
                </TitleWrapper>
                <ImagesWrapper>
                    {imagesMobile}
                </ImagesWrapper>
            </PortfolioAssetsWrapper>
        </Wrapper>
    )
}
