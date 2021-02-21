import React, {useState} from 'react';
import {Wrapper,LogoWrapper,SideMenuButtonWrapper,ButtonWrapper,ButtonText,RequestButtonWrapper} from './Header.style';

export const Header = (props) => {
    const [sidemenuIsOpen, setSidemenuIsOpen] = useState(false);

    console.log(sidemenuIsOpen,'here');
    return (
        <Wrapper>
            <LogoWrapper>eBooster</LogoWrapper>
                <div style={{display:'flex',justifyContent:'center', flex:'1', marginRight:'20px'}}>
                    <ButtonWrapper><ButtonText>Services</ButtonText></ButtonWrapper>
                    <ButtonWrapper><ButtonText>Portofolio</ButtonText></ButtonWrapper>
                    <ButtonWrapper><ButtonText>About us</ButtonText></ButtonWrapper>
                    <RequestButtonWrapper><ButtonText style={{fontWeight:'700'}}>Request for quotation</ButtonText></RequestButtonWrapper>
                </div>
            <SideMenuButtonWrapper  onClick={()=>setSidemenuIsOpen(!sidemenuIsOpen)}>
                <i className="fas fa-bars" color={'#acdbdf'}></i>
            </SideMenuButtonWrapper>
        </Wrapper>
    )
}
