import styled from 'styled-components';
import Dev from '../../assets/homepage/Dev.svg';
import Design from '../../assets/homepage/Design.svg';
import {media} from "../../components/utils/stylesVariables";
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
  ${media.mobileAndTablet}{
    display: none;
  }
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
  ${media.mobileAndTablet}{
    display: none;
  }
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

export const MobileDevSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const MobileDesignSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const MobileDesignDevSection = styled.div`
  display:none;
  ${media.mobileAndTablet}{
    display: flex;
    width: 100vw;
    flex-direction: column;
  }
`;
export const MobileDesignButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 42vw;
  height: 70%;
  border-radius: 25px;
  border:2px solid red;
  background-color: ${props=>props.isSelected? '#B0003A':'#8DA092'};
  >div{
    color: ${props=>props.isSelected? '#fff':'#000'}
  }
`;
export const MobileDevButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 42vw;
  height: 70%;
  border-radius: 25px;
  border:2px solid red;
  background-color: ${props=>props.isSelected? '#B0003A':'#8DA092'} ;
  >div{
    color: ${props=>props.isSelected? '#fff':'#000'}
  }
`;

export const MobileDesignText = styled.div`
  font-size:18px;
  font-family: Arvo-Regular,serif;
  margin-right: 36px;
`;

export const MobileDevText = styled.div`
  font-size:18px;
  font-family: Arvo-Regular,serif;

`;

export const Buttons = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  height: 8vh;
`;

export const MobileDevImage =styled.div`
  background-image: url(${Dev});
  background-repeat: no-repeat;
  background-size: contain;
  width: 40%;
  height: 40%;
`;

export const MobileDesignImage =styled.div`
  background-image: url(${Design});
  background-repeat: no-repeat;
  background-size: contain;
  width: 40%;
  height: 40%;
`;

export const WhiteCircle = styled.div`
    width: 12px;
    height: 12px;
  background-color: #fff;
  border-radius: 50%;
  border: 6px solid ${props=>props.isSelected? '#8DA092': '#8DA092'};
`;
