import React from 'react';
import {Wrapper,LogoWrapper,SideMenuButtonWrapper} from './Header.style';

export const Header = () => {
    return (
        <Wrapper>
            <LogoWrapper>eBooster</LogoWrapper>
            <SideMenuButtonWrapper>
                <i className="fas fa-bars"></i>
            </SideMenuButtonWrapper>
        </Wrapper>
    )
}
