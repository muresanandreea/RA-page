import React from "react";
import {SideMenuWrapper,Divider, ButtonWrapper,ButtonText,SideMenuSections,ButtonWrapperCurrent } from './StickySideMenu.style';
import {headerLinks} from "../../Header/constants";

export const StickySideMenu = () => {

    return (
        <SideMenuWrapper>
            <Divider/>
            <SideMenuSections>
                <ButtonWrapperCurrent href={headerLinks.services}><ButtonText>Services</ButtonText></ButtonWrapperCurrent>
                <ButtonWrapper href={headerLinks.portfolio}><ButtonText>Portofolio</ButtonText></ButtonWrapper>
                <ButtonWrapper href={headerLinks.aboutUs}><ButtonText>About us</ButtonText></ButtonWrapper>
                <ButtonWrapper href={headerLinks.aboutUs}><ButtonText>Contact us</ButtonText></ButtonWrapper>
            </SideMenuSections>
        </SideMenuWrapper>
    )
}
