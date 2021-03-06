import React, {useState} from 'react';
import {Wrapper,LogoWrapper,SideMenuButtonWrapper,ButtonWrapper,ButtonText,RequestButtonWrapper,
    RequestButtonText} from './Header.style';
import {ContactUsModal} from "../ContactUs/ContactUsModal";
import {headerLinks} from "./constants";

export const Header = (props) => {
/*    const [contactUsModal, setContactUsModal] = useState(false);*/

    return (
        <Wrapper>
{/*            <ContactUsModal showModal={contactUsModal}
                            closeModal={(!contactUsModal)}/>*/}
            <LogoWrapper href={headerLinks.homepage}/>
{/*                <div style={{display:'flex',justifyContent:'flex-end', flex:'1', marginRight:'4%'}}>
                    <ButtonWrapper href={headerLinks.services}><ButtonText>Services</ButtonText></ButtonWrapper>
                    <ButtonWrapper href={headerLinks.portfolio}><ButtonText>Portofolio</ButtonText></ButtonWrapper>
                    <ButtonWrapper href={headerLinks.aboutUs}><ButtonText>About us</ButtonText></ButtonWrapper>
                    <RequestButtonWrapper onClick = {()=>{setContactUsModal(!contactUsModal)}}>
                        <RequestButtonText style={{fontWeight:'700'}}>Request for quotation</RequestButtonText>
                    </RequestButtonWrapper>
                </div>*/}
  {/*          <SideMenuButtonWrapper  onClick={()=>setSidemenuIsOpen(!sidemenuIsOpen)}>
                <i className="fas fa-bars" color={'#acdbdf'}></i>
            </SideMenuButtonWrapper>*/}
        </Wrapper>
    )
}
