import React from "react";
import {AboutWrapper,AboutUsContent,AboutUsText} from './About.style';
import {StickySideMenu} from "../components/utils/stickySideMenu/StickySideMenuComponent";
import {
    ButtonText, ButtonWrapper,
    ButtonWrapperCurrent,
    Divider,
    SideMenuSections,
    SideMenuWrapper
} from "../components/utils/stickySideMenu/StickySideMenu.style";
import {headerLinks} from "../components/Header/constants";
import {OurPortfolio, OurPortfolioTitle, PortfolioWrapper} from "../Portofolio/Portofolio.style";
import {ServicesPageWrapper} from "../Services/Services.style";
import {ContactUsWidget} from "../components/utils/contactUsWidget/ContactUsWidget";

export const About = ({onClose}) => {
    return (
        <AboutWrapper>
            <OurPortfolio>
                <OurPortfolioTitle>About <b>Us</b></OurPortfolioTitle>
            </OurPortfolio>
            <AboutUsContent>
            <SideMenuWrapper>
                <Divider/>
                <SideMenuSections>
                    <ButtonWrapper href={headerLinks.services}><ButtonText>Services</ButtonText></ButtonWrapper>
                    <ButtonWrapper href={headerLinks.portfolio}><ButtonText>Portofolio</ButtonText></ButtonWrapper>
                    <ButtonWrapperCurrent href={headerLinks.aboutUs}><ButtonText>About us</ButtonText></ButtonWrapperCurrent>
                    <ButtonWrapper href={headerLinks.aboutUs}><ButtonText>Contact us</ButtonText></ButtonWrapper>
                </SideMenuSections>
            </SideMenuWrapper>
                <AboutUsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </AboutUsText>
                <ContactUsWidget onClose={onClose}/>
            </AboutUsContent>
        </AboutWrapper>
    )
}
