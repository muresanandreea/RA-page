import React, {useEffect, useRef, useState} from 'react';
import {Wrapper,LogoWrapper,SideMenuButtonWrapper,ButtonWrapper,ButtonText,RequestButtonWrapper,
    RequestButtonText} from './Header.style';
import {ContactUsModal} from "../ContactUs/ContactUsModal";
import {headerLinks} from "./constants";

export const Header = () => {
    const [contactUsModal, setContactUsModal] = useState(false);
    return (
        <Wrapper>
            <LogoWrapper href={headerLinks.homepage}/>
                <div style={{display:'flex',justifyContent:'flex-end', flex:'1', marginRight:'4%'}}>
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
                </div>
  {/*          <SideMenuButtonWrapper  onClick={()=>setSidemenuIsOpen(!sidemenuIsOpen)}>
                <i className="fas fa-bars" color={'#acdbdf'}></i>
            </SideMenuButtonWrapper>*/}
        </Wrapper>
    )
}
