import styled, {keyframes} from 'styled-components';
import Logo from '../../assets/logo.svg';
import {media} from "../utils/stylesVariables";


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

const mobileMenuEnter = keyframes`
0%{
  bottom: 100%;
  opacity: 0;
}
  100%{bottom: 0;
  opacity: 1}
`;

export const Wrapper= styled.div`
  top:0;
  display:flex;
  width: 100vw;
  height:7rem;
  background-color:#171616;
  box-shadow: rgb(0 0 0 /37%) 0px 0px 9px 0px;
  align-items: center;
  position:fixed;
  justify-content: space-between;
  z-index:1;
  .spot {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding:0;
    margin:0;
  };
  .svg-wrapper {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 174px;
    /*make sure to use same height/width as in the html*/
    height: 40px;
    border-radius: 3px;
    margin-left: 5px;
    margin-right: 5px;
    padding:0;
  }
  /*
    This is where we define the fill, color, thickness,
    and stroke pattern of the SVG when there is no hover.
    The dasharray and offset together define the line position
    under the words. Here's also where the transition speed is set.
  */

  #shape {
    stroke-width: 3px;
    fill: transparent;
    stroke: #7DA487;
    stroke-dasharray: 160 400;
    stroke-dashoffset: -220;
    transition: 1s all ease;
    padding:0;
    margin:0;
    :hover{
      stroke-dasharray: 50 0;
      stroke-width: 3px;
      stroke-dashoffset: 0;
      stroke: #06D6A0;
    }
  }
  /* 
      Pushing the text up into the SVG. Without this the
      text would be below the div's.
  */

  #text {
    margin-top: -35px;
    text-align: center;
    padding:0;
    color:#06D6A0;
    margin:0;
  }

  #text a {
    color: white;
    text-decoration: none;
    font-weight: 100;
    font-size: 1.1em;
    padding:0;
    margin:0;
  }
`;

export const LogoWrapper= styled.a`
  background-image:url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
  width:412px;
  height: 90%;
  transition: all 0.3s ease 0s;
  margin-left: 2%;
  text-decoration: none;
`;

export const SideMenuButtonWrapper= styled.div`
  width:50px;
  height: 50px;
  border:1px solid ${props=>(props.isOpen ? '#fff' : '#000')};
  background-color: ${props=>(props.isOpen ? '#fff' : '#000')};
  border-radius: 25px;
  transition: all 0.3s;
  transform: ${props=>(props.isOpen ? '' : 'scale(0.7)')};
  position: relative;
  box-sizing: border-box;
  cursor:pointer;
  display: none;
  ${media.mobileAndTablet}{
    display: flex;
    z-index: 21;
  }
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
  margin-left:4rem;
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
    height: 1px;
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

export const HeaderDesktopContent = styled.div`
  display:flex;
  justify-content:flex-end;
  flex:1;
  margin-right:4%;
  ${media.mobileAndTablet}{
    display: none}
`;

export const MobileMenuWrapper = styled.div`
    position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: 10;
  animation: ${mobileMenuEnter} 0.2s ease-in forwards;
  flex-direction: column;
  align-items: center;
  display: none;
  ${media.mobileAndTablet}{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MobileMenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  width: 100vw;
  justify-content: center;
  font-size: 18px;
`;

export const LinkItem = styled.a`
  text-decoration: none;
  color: #000;
  padding-top: 20px;
`;

export const SideMenuButtonLine = styled.span`
  width: 20px;
  height:3px;
  position:absolute;
  left:14px;
  transition: all 0.3s;
  background-color: ${props=>(props.isOpen ? 'black':'red')};
  border-radius: 3px;
  
`;

export const SideMenuButtonLineThreeBasic = styled.span`
  width: 12px;
  height:3px;
  position:absolute;
  left:14px;
  transition: all 0.3s;
  background-color: ${props=>(props.isOpen ? 'black':'red')};
  border-radius: 3px;
  
`;

export const SideMenuButtonLineOne = styled(SideMenuButtonLine)`
  top:14px;
  ${props => props.isOpen ? `transform: rotate(45deg); top:23px`:``}
`;

export const SideMenuButtonLineTwo = styled(SideMenuButtonLine)`
  top:23px;
  ${props => props.isOpen ? `width:0px; left:25px`:``}
`;

export const SideMenuButtonLineThree = styled(SideMenuButtonLineThreeBasic)`
  top:33px;
  ${props => props.isOpen ? `transform: rotate(-45deg);width:20px; top:23px`:``}
`;

