import styled from 'styled-components';
import Dev from '../../assets/homepage/Dev.svg';
import Design from '../../assets/homepage/Design.svg';
//import {media} from "../../components/utils/stylesVariables";

export const MidSectionWrapper = styled.div`
  display:flex;
  justify-content: space-evenly;
  width: 100%;
  height: 40vh;
  background-color:#ECE8E4;
  padding: 50px 0;
`;

export const DesignSection = styled.div`
  display:flex;
  width:50%;
  padding-left: 20px;
`;

export const DesignImage = styled.div`
  width:240px;
  height:240px;
  background-image: url(${Design});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const DevSection = styled.div`
  display:flex;
`;

export const DevImage = styled.div`
  width:240px;
  height:240px;
  background-image: url(${Dev});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const SectionText = styled.div`
  padding:20px;
  color:darkgreen;
  font-family: Arvo-Regular;
  font-size:20px;
`;
