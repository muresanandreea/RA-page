import styled,{keyframes} from 'styled-components';
import Logo from '../../assets/contactUsLogo.svg';

const showBackDrop = keyframes`
  0%{
    background-color: rgba(40,40,40,0);
  }
  100%{
    background-color: rgba(40,40,40,0.5);
  }
`;

const hideBackDrop = keyframes`
  0%{
    background-color: rgba(40,40,40,0.5);
  }
  100%{
    background-color: rgba(40,40,40,0);
  }
`;

const openModal = keyframes`
  0%{
    opacity:0
  }
  100%{
    opacity: 1;
  }
`;

const closeModal = keyframes`
  0%{
    opacity:1
  }
  100%{
    opacity:0;
  }
`;

export const Backdrop = styled.div`
  width:100vw;
  height:100vh;
  position:fixed;
  z-index:100;
  left:0;
  top:0;
  animation: ${props => (props.showBackdrop ? showBackDrop : hideBackDrop)} 0.4s 
      ${props => (props.showBackdrop ? 'ease-in' : 'ease-out')};
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(40,40,40,0.5);
`;

export const Modal = styled.div`
  z-index:500;
  background: radial-gradient(circle at 30% 107%, #7DA487 0%, #7DA487 5%, #8DA092 45%,#7DA487 60%,#8DA092 90%);
  box-sizing: border-box;
  animation: ${props => (props.showBackdrop ? openModal : closeModal)} 0.4s
  ${props => (props.showBackdrop ? 'ease-in' : 'ease-out')};
  display: flex;
  justify-content: center;
  position: relative;
  width: 40vw;
  height: 60vh;
  min-width: 340px;
  border-radius: 8px;
`;

export const ModalContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .closeButton{
    top: 4px;
    position: absolute;
    right: 8px;
    font-size: 20px;
    color: rgba(0,0,0,0.54);
    :hover{
      cursor: pointer;
    }
  }
`;

export const ContactUsButton = styled.div`
  width: 88px;
  height: 32px;
  border: 1px solid red;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:lavender;
  font-family: Helvetica-regular;
  font-size:18px;
  margin-top: 33px;
  cursor:pointer;
`;

export const FormContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 20px;
  align-items: flex-start;
`;


export const LogoWrapper = styled.div`
  background-image: url(${Logo});
  width: 228px;
  height: 141px;
  background-repeat: no-repeat;
  padding-bottom: 10%;
  padding-right: 24px;
`;


export const ContactUsFormWrapper = styled.div`
  width: 60%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.54);
  padding: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1;
  cursor:default;
`;

export const InputWrapper = styled.div`
  padding-top:20px;
`;
