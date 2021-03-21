import styled, {keyframes} from 'styled-components';
import {media} from "../components/utils/stylesVariables";

const bounce = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    -moz-box-shadow: 0 0 0 16px #e5aabe;
    box-shadow: 0 0 0 16px #e5aabe;
  }
  100% {
    -moz-box-shadow: 0 0 0 0 #e5aabe;
    box-shadow: 0 0 0 0 #e5aabe;
  }
    `;

const shimmerBackground = keyframes`
    0% {background-position:-440px 0}
    100% {background-position:440px 0}
`;

export const PortfolioWrapper = styled.div`
  width: 100%;
  height:100%;
  background-color: #ECE8E4;
  display: flex;
`;

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  
  grid-gap: 20px;
  width: 100%;
  margin:20px;
  >img{
    background-size: contain;
    width: 84%;
    height: 88%;
    cursor: zoom-in;
    :hover {
      animation: ${bounce} 1s ease-in-out;
      box-shadow:#8DA092 0px 0px 9px 0px;
    }
  };
  ${media.mobileAndTablet}{
    display: flex;
    flex-direction: column;
  }
`;

export const TitleWrapper = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
`;

export const PortfolioAssetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 190px;
`;

export const Title = styled.div`
    width: 446px;
    font-size: 72px;
    background: linear-gradient(
            45deg
            ,#402E32,#B0003A);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation-delay: 0s;
    animation: ${shimmerBackground} 8s linear infinite;
`;

export const OurPortfolio = styled.div`
  background: linear-gradient(to bottom, #171616 0%, #ece8e4 100%);
  height:4%;
  min-height:240px;
  width:100%;
`;

export const OurPortfolioTitle = styled.div`
  margin-left:4%;
    width: 446px;
    font-size: 72px;
    background: linear-gradient(
            45deg
            ,#ece8e4,#ECC091);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation-delay: 0s;
    animation: ${shimmerBackground} 8s linear infinite;
`;
