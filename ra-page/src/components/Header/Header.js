import React, {useState} from 'react';
import {Wrapper,LogoWrapper,SideMenuButtonWrapper,ButtonWrapper,ButtonText,RequestButtonWrapper} from './Header.style';

export const Header = (props) => {
    const [sidemenuIsOpen, setSidemenuIsOpen] = useState(false);

    console.log(sidemenuIsOpen,'here');
    return (
        <Wrapper>
            <LogoWrapper>eBooster</LogoWrapper>
            <div style={{display:'flex',justifyContent:'flex-end', flex:'0.5s', marginRight:'8px'}}>
            <ButtonWrapper><ButtonText>Services</ButtonText></ButtonWrapper>
            <ButtonWrapper><ButtonText>Portofolio</ButtonText></ButtonWrapper>
            <ButtonWrapper><ButtonText>About us</ButtonText></ButtonWrapper>
            <RequestButtonWrapper><ButtonText style={{fontWeight:'700'}}>Request for quotation</ButtonText></RequestButtonWrapper>
            <SideMenuButtonWrapper  onClick={()=>setSidemenuIsOpen(!sidemenuIsOpen)}>
                <i className="fas fa-bars" color={'#acdbdf'}></i>
            </SideMenuButtonWrapper></div>
        </Wrapper>
    )
}
