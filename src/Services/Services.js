import React, {useState} from "react";
import {ServicesWrapper, ServicesTableWrapper, WebsiteSection,TableTitle,
    SocialMediaSection, PrintWrapper, WebsiteTitle, SocialMediaTitle, PrintTitle} from './Services.style';
import {StickySideMenu} from "../components/utils/stickySideMenu/StickySideMenuComponent";
import {WebsiteSectionContent} from "./WebsiteSection";
import {SocialMediaSectionContent} from "./SocialMedia";
import {PrintSectionContent} from "./PrintSection";

export const Services = () => {
    const [isCollapsedWeb, setIsCollapsedWeb] = useState(false);
    const [isCollapseSocial, setIsCollapsedSocial] = useState(false);
    const [isCollapsedPrint, setIsCollapsedPrint] = useState(false);
    return (
        <ServicesWrapper>
            <StickySideMenu/>
            <ServicesTableWrapper>
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
        </ServicesWrapper>
    )
}
