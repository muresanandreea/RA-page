import React, {useState} from "react";
import {ServicesWrapper, ServicesTableWrapper, WebsiteSection,TableTitle,Title,
    SocialMediaSection, PrintWrapper, WebsiteTitle, SocialMediaTitle, PrintTitle,ServicesPageWrapper} from './Services.style';
import {StickySideMenu} from "../components/utils/stickySideMenu/StickySideMenuComponent";
import {WebsiteSectionContent} from "./WebsiteSection";
import {SocialMediaSectionContent} from "./SocialMedia";
import {PrintSectionContent} from "./PrintSection";
import {OurPortfolio, OurPortfolioTitle, Wrapper} from "../Portofolio/Portofolio.style";
import {ContactUsWidget} from "../components/utils/contactUsWidget/ContactUsWidget";

export const Services = ({onClose}) => {
    const [isCollapsedWeb, setIsCollapsedWeb] = useState(false);
    const [isCollapseSocial, setIsCollapsedSocial] = useState(false);
    const [isCollapsedPrint, setIsCollapsedPrint] = useState(true);
    return (
        <ServicesPageWrapper>
        <OurPortfolio>
            <OurPortfolioTitle>Our <b>Services</b></OurPortfolioTitle>
        </OurPortfolio>
        <ServicesWrapper>
            <StickySideMenu/>
            <ServicesTableWrapper>
                <Title><h3>What can we do?</h3></Title>
                <WebsiteSection>
                    <TableTitle onClick={()=>setIsCollapsedWeb(!isCollapsedWeb)} isCollapsed={isCollapsedWeb}>
                        <i className="fas fa-caret-right"/>
                        <WebsiteTitle>Website</WebsiteTitle>
                    </TableTitle>
                    { isCollapsedWeb && <WebsiteSectionContent/>}
                </WebsiteSection>
                <SocialMediaSection>
                    <TableTitle onClick={()=>setIsCollapsedSocial(!isCollapseSocial)} isCollapsed={isCollapseSocial}>
                        <i className="fas fa-caret-right"/>
                    <SocialMediaTitle>Social Media</SocialMediaTitle>
                </TableTitle>
                    {isCollapseSocial && <SocialMediaSectionContent/>}
                </SocialMediaSection>
                <PrintWrapper>
                    <TableTitle onClick={()=>setIsCollapsedPrint(!isCollapsedPrint)} isCollapsed={isCollapsedPrint}>
                        <i className="fas fa-caret-right"/>
                    <PrintTitle>Print</PrintTitle>
                    </TableTitle>
                    {isCollapsedPrint && <PrintSectionContent/>}
                </PrintWrapper>
            </ServicesTableWrapper>
            <ContactUsWidget onClose={onClose}/>
        </ServicesWrapper>
        </ServicesPageWrapper>
    )
}
