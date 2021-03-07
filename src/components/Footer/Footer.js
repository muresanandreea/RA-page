import React from 'react';
import {FooterWrapper, IconsWrapper,Icon,Divider,CopyrightText,PrivacyPolicyText,ContentWrapper} from './Footer.style';

export const Footer = () => {

    return (
        <FooterWrapper>
            <Divider/>
            <ContentWrapper>
                <IconsWrapper>
                    <Icon href={'https://www.linkedin.com/in/uxtaposed-design-and-development-b0aa84208/'} target="_blank"><i className="fab fa-linkedin-in"></i></Icon>
                    <Icon href={'https://www.instagram.com/uxtaposed/'} target="_blank"><i className="fab fa-instagram"></i></Icon>
                    <Icon href ={'https://twitter.com/xtaposed'} target="_blank"> <i className="fab fa-twitter"></i></Icon>
                    <Icon href={'https://www.facebook.com/UXtaposed-106791008142813'} target="_blank"> <i className="fab fa-facebook-f"></i></Icon>
                </IconsWrapper>
                <CopyrightText>Copyrights© 2021 UXtaposed</CopyrightText>
                <PrivacyPolicyText>Privacy Policy</PrivacyPolicyText>
            </ContentWrapper>
        </FooterWrapper>
    )
}

