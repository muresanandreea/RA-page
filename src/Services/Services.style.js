import styled from 'styled-components';
import React from "react";

export const ServicesWrapper = styled.div`
  display:flex;
  width: 100%;
  height:100%;
  background-color: #E1E0DF;
`;

export const ServicesTableWrapper = styled.div`
  display:flex;
  flex-direction: column;
  color:#E1E0DF;
  width: 100%;
  align-items: center;
  padding: 20px;
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
  border:1px solid #ECC091;
  color:#402E32;
  display: flex;
  padding-left: 8px;
  :nth-child(even) {
    background-color: #eee;
  }
`;

export const WebsteSectionCotentWrapper = styled.div`
    margin: 4px 0 4px 0;
`;

export const PrintcontentWrapper = styled.div`
  margin: 4px 0 4px 0;
`;

export const TableTitle = styled.div`
  height:40px;
  width:50vw;
  top:112px;
  background-color:#402E32;
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
`;

export const SocialMediacontentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 0 4px 0;
`;

export const Title = styled.div`
    font-size:36px;
    font-weight: 700;
  h3 {
    font-size: 72px;
    background: linear-gradient(
            45deg
            ,#402E32,#ECC091);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;