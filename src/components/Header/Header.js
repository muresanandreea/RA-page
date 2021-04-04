import React, {useEffect, useRef, useState} from 'react';
import {Wrapper,LogoWrapper,SideMenuButtonWrapper,ButtonWrapper,ButtonText,RequestButtonWrapper,MobileMenuItemsWrapper,
    HeaderDesktopContent, MobileMenuWrapper,LinkItem, SideMenuButtonLineOne,SideMenuButtonLineTwo,
    SideMenuButtonLineThree} from './Header.style';
import {ContactUsModal} from "../ContactUs/ContactUsModal";
import {headerLinks} from "./constants";

export const Header = (props) => {
    const {isOpen} = props;
    const [contactUsModal, setContactUsModal] = useState(false);
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return (
        <Wrapper>
            <LogoWrapper href={headerLinks.homepage}/>
                <HeaderDesktopContent>
                    <ButtonWrapper href={headerLinks.services}><ButtonText>Services</ButtonText></ButtonWrapper>
                    <ButtonWrapper href={headerLinks.portfolio}><ButtonText>Portofolio</ButtonText></ButtonWrapper>
                    <ButtonWrapper href={headerLinks.aboutUs}><ButtonText>About us</ButtonText></ButtonWrapper>
                    <RequestButtonWrapper>
                    <div className="svg-wrapper" onClick = {()=>setContactUsModal(!contactUsModal)}>
                        <svg height="40" width="174" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <rect id="shape" height="40" width="174"/>
                                <text x="12" y="24" fill="#06D6A0" cursor="pointer"> Request for quotation </text>
                            </g>

                        </svg>
                    </div></RequestButtonWrapper>
                    {contactUsModal &&
                    <ContactUsModal showModal={()=> setContactUsModal(!contactUsModal)}
                                    closeModal={()=> setContactUsModal(false)}/>
                    }
                </HeaderDesktopContent>
            <SideMenuButtonWrapper  isOpen={mobileMenuIsOpen} onClick={()=>setMobileMenuIsOpen(!mobileMenuIsOpen)} >
                <SideMenuButtonLineOne isOpen={mobileMenuIsOpen}/>
                <SideMenuButtonLineTwo isOpen={mobileMenuIsOpen}/>
                <SideMenuButtonLineThree isOpen={mobileMenuIsOpen}/>
            </SideMenuButtonWrapper>
            {mobileMenuIsOpen &&
                <MobileMenuWrapper>
                    <MobileMenuItemsWrapper>
                        <LinkItem href={headerLinks.services}>Services</LinkItem>
                        <LinkItem href={headerLinks.portfolio}>Portfolio</LinkItem>
                        <LinkItem href={headerLinks.aboutUs}>About us</LinkItem>
                    </MobileMenuItemsWrapper>
                </MobileMenuWrapper>
            }
        </Wrapper>
    )
}
