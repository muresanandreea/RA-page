import styled, {keyframes} from 'styled-components';
import React from "react";
import {media} from "../components/utils/stylesVariables";


const bounce = keyframes`
    0%, 20%, 40%, 60%, 80%, 100% {transform: translateY(0);}
    50% {transform: translateY(-8px)
    `;

const shimmerBackground = keyframes`
    0% {background-position:-674px 0}
    100% {background-position:674px 0}
`;

export const ServicesWrapper = styled.div`
  display:flex;
  width: 100%;
  height:100%;
  min-height: 100vh;
`;

export const ServicesTableWrapper = styled.div`
  display:flex;
  flex-direction: column;
  color:red;
  width: 100%;
  align-items: center;
  padding: 20px;
  margin-bottom: 191px;
  ${media.mobileAndTablet}{
    padding:0;
  }
`;

export const WebsiteSection = styled.div`
`;
export const SocialMediaSection = styled.div`
`;
export const PrintWrapper = styled.div``;

export const WebsiteTitle = styled.div``;
export const SocialMediaTitle = styled.div``;
export const PrintTitle = styled.div``;

export const Row = styled.div`
  display: flex;
  padding-left: 8px;
  color:#000;`

export const WebsteSectionCotentWrapper = styled.div`
    margin: 4px 0 4px 0;
`;

export const PrintcontentWrapper = styled.div`
  margin: 4px 0 4px 0;
`;

export const TableTitle = styled.div`
  height:40px;
  width:100%;
  top:112px;
  background-color:#000;
  position: sticky;
  display:flex;
  align-items: center;
  cursor:pointer;
  border-radius: 8px;
  margin-bottom: 4px;
  .fa-caret-right {
    transform:${props=>props.isCollapsed ? 'rotate(90deg)' : 'rotate(0deg)'};
    margin-right:4px;
    margin-left:8px;
    transition-timing-function: ease-in;
    transition: 0.2s;
  }
  :hover {
    animation: ${bounce} 1.2s infinite linear;
  }
`;

export const SocialMediacontentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 0 4px 0;
`;

export const Title = styled.div`
    width: 100%;
    font-size: 72px;
    background: linear-gradient(
            45deg
            ,#402E32,#B0003A);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation-delay: 0s;
    animation: ${shimmerBackground} 8s linear infinite;
  ${media.mobileAndTablet}{
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ServicesPageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;