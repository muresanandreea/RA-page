import React from "react";
import {PortfolioWrapper} from './Portofolio.style';
import {StickySideMenu} from "../components/utils/stickySideMenu/StickySideMenuComponent";
import {
    ButtonText, ButtonWrapper,
    ButtonWrapperCurrent,
    Divider,
    SideMenuSections,
    SideMenuWrapper
} from "../components/utils/stickySideMenu/StickySideMenu.style";
import {headerLinks} from "../components/Header/constants";

export const Portfolio = () => {

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
        </PortfolioWrapper>
    )
}
