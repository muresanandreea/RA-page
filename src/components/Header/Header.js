import React, {useState} from 'react';
import {Wrapper,LogoWrapper,SideMenuButtonWrapper,ButtonWrapper,ButtonText,RequestButtonWrapper,
    RequestButtonText} from './Header.style';

export const Header = (props) => {
    const [sidemenuIsOpen, setSidemenuIsOpen] = useState(false);

    console.log(sidemenuIsOpen,'here');
    return (
        <Wrapper>
            <LogoWrapper/>
                <div style={{display:'flex',justifyContent:'flex-end', flex:'1', marginRight:'4%'}}>
                    <ButtonWrapper><ButtonText>Services</ButtonText></ButtonWrapper>
                    <ButtonWrapper><ButtonText>Portofolio</ButtonText></ButtonWrapper>
                    <ButtonWrapper><ButtonText>About us</ButtonText></ButtonWrapper>
                    <RequestButtonWrapper><RequestButtonText style={{fontWeight:'700'}}>Request for quotation</RequestButtonText></RequestButtonWrapper>
                </div>
            <SideMenuButtonWrapper  onClick={()=>setSidemenuIsOpen(!sidemenuIsOpen)}>
                <i className="fas fa-bars" color={'#acdbdf'}></i>
            </SideMenuButtonWrapper>
        </Wrapper>
    )
}
