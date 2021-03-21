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

export const PortfolioWrapper = styled.div`
  width: 100%;
  height:100%;
  background-color: #ECE8E4;
  display: flex;
  margin-bottom: 190px;
`;

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  margin:20px 0 0 20px;
  >img{
    background-size: contain;
    width: 100%;
    height: 100%;
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

export const PortfolioAssetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;