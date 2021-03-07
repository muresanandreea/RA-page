import React from 'react';
import {FooterWrapper, IconsWrapper,Icon,Divider,CopyrightText,PrivacyPolicyText,ContentWrapper} from './Footer.style';

export const Footer = () => {

    return (
        <FooterWrapper>
            <Divider/>
            <ContentWrapper>
                <IconsWrapper>
                    <Icon><i className="fab fa-linkedin-in"></i></Icon>
                    <Icon href={'https://www.instagram.com/uxtaposed/'}><i className="fab fa-instagram"></i></Icon>
                    <Icon href ={'https://twitter.com/xtaposed'}> <i className="fab fa-twitter"></i></Icon>
                    <Icon href={'https://www.facebook.com/UXtaposed-106791008142813'}> <i className="fab fa-facebook-f"></i></Icon>
                </IconsWrapper>
                <CopyrightText>Copyrights© 2021 UXtaposed</CopyrightText>
                <PrivacyPolicyText>Privacy Policy</PrivacyPolicyText>
            </ContentWrapper>
        </FooterWrapper>
    )
}

