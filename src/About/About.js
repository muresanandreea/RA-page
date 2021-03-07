import React from "react";
import {AboutWrapper} from './About.style';
import {StickySideMenu} from "../components/utils/stickySideMenu/StickySideMenuComponent";
import {
    ButtonText, ButtonWrapper,
    ButtonWrapperCurrent,
    Divider,
    SideMenuSections,
    SideMenuWrapper
} from "../components/utils/stickySideMenu/StickySideMenu.style";
import {headerLinks} from "../components/Header/constants";

export const About = () => {
    return (
        <AboutWrapper>
            <SideMenuWrapper>
                <Divider/>
                <SideMenuSections>
                    <ButtonWrapper href={headerLinks.services}><ButtonText>Services</ButtonText></ButtonWrapper>
                    <ButtonWrapper href={headerLinks.portfolio}><ButtonText>Portofolio</ButtonText></ButtonWrapper>
                    <ButtonWrapperCurrent href={headerLinks.aboutUs}><ButtonText>About us</ButtonText></ButtonWrapperCurrent>
                    <ButtonWrapper href={headerLinks.aboutUs}><ButtonText>Contact us</ButtonText></ButtonWrapper>
                </SideMenuSections>
            </SideMenuWrapper>
        </AboutWrapper>
    )
}
