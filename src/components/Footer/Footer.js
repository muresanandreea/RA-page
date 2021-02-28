import React from 'react';
import {FooterWrapper, IconsWrapper,Icon,Divider,CopyrightText,PrivacyPolicyText,ContentWrapper} from './Footer.style';

export const Footer = () => {

    return (
        <FooterWrapper>
            <Divider/>
            <ContentWrapper>
                <IconsWrapper>
                    <Icon><i className="fab fa-linkedin-in"></i></Icon>
                    <Icon><i className="fab fa-instagram"></i></Icon>
                    <Icon> <i className="fab fa-twitter"></i></Icon>
                    <Icon> <i className="fab fa-facebook-f"></i></Icon>
                </IconsWrapper>
                <CopyrightText>Copyrights© 2021 UXtaposed</CopyrightText>
                <PrivacyPolicyText>Privacy Policy</PrivacyPolicyText>
            </ContentWrapper>
        </FooterWrapper>
    )
}

