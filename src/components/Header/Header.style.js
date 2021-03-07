import styled, {keyframes} from 'styled-components';
import Logo from '../../assets/logo.svg';


const nohover = keyframes`
  0% {
    transform: scaleX(1.05);
    height: 3.8rem;
  }
  45% {height: 5px;}
  55% {
    transform: scaleX(1.05);
    height: 5px;
    opacity: 1;
  }

  100% {
    transform: scaleX(0);
    height: 5px;
    opacity: .02;
  }
`

const hover = keyframes`
    0% {
        transform: scaleX(0);
        height: 5px;
    }
45% {
    transform: scaleX(1.05);
    height: 5px;
}
55% {height: 5px;}
100% {
    transform: scaleX(1.05);
    height: 3.8rem;
}
`;

export const Wrapper= styled.div`
  top:0;
  display:flex;
  width: 100%;
  height:7rem;
  background-color:#171616;
  box-shadow: rgb(0 0 0 /37%) 0px 0px 9px 0px;
  align-items: center;
  position:fixed;
  justify-content: space-between;
  z-index:1;
`;

export const LogoWrapper= styled.a`
  background-image:url(${Logo});
  background-repeat: no-repeat;
  width:412px;
  height: 90%;
  transition: all 0.3s ease 0s;
  margin-left: 2%;
  text-decoration: none;
`;

export const SideMenuButtonWrapper= styled.div`
  width:5rem;
  font-size: 20px;
  cursor:pointer;
  display: none;
`;

export const ButtonWrapper = styled.a`
  display:flex;
  opacity:1;
  align-items:center;
  justify-content: center;
  cursor:pointer;
  margin:0 10px;
  text-decoration: none;
`;

export const RequestButtonWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  cursor:pointer;
  border-radius:16px;
  margin-left:10rem;
  :hover{>div{color:#211F1D}}
  :before {
    content: "";
    background: #8DA092;
    position: absolute;
    width: 19%;
    height: 10%;
    margin-bottom: 24px;
    bottom:0;
    border-radius: 5px;
    transform: scaleX(0);
    z-index: -1;
  }
  :hover:before {
    animation: .5s forwards ${hover} linear;
    animation-fill-mode: forwards;
  }
`;

export const RequestButtonText = styled.div`
  font-size: 18px;
  padding: 16px;
  color: #ECC091;
  font-family: Helvetica-Regular;
  text-transform: uppercase;
`;

export const ButtonText = styled.div`
  font-size: 18px;
  padding: 16px;
  color: #ECC091;
  font-family: Helvetica-Regular;
  text-transform: uppercase;
  display:flex;
  align-items:center;
  justify-content: center;
  cursor:pointer;
  font-weight: normal;
  text-align: center;
  margin:0 10px;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 76px;
    height: 3px;
    width:10%;
    background: #8DA092;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: .25s linear;
  }
  :hover:before,
  :focus:before {
    visibility: visible;
    transform: scaleX(1);
`;

export const SideMenuWrapper = styled.div``;

