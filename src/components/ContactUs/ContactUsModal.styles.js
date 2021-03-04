import styled,{keyframes} from 'styled-components';

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
  background-color: white;
  box-sizing: border-box;
  animation: ${props => (props.showBackdrop ? openModal : closeModal)} 0.4s
  ${props => (props.showBackdrop ? 'ease-in' : 'ease-out')};
  display: flex;
  justify-content: center;
  position: relative;
  width: 345px;
  border-radius: 8px;
`;

export const ModalContentWrapper = styled.div`
  width: 100%;
  padding: 25px 28px 28px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
