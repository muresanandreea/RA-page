import styled,{keyframes} from 'styled-components';
import LogoImage from '../../assets/stormTrooper.jpg';
import WebImage from '../../assets/bobaFett.jpg';
import MobileImage from '../../assets/anotherStormTrooper.jpg';

const boxHover = keyframes`
0%{
  opacity:0;
  transform: translateY(20px);
}
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
`

export const PortofolioSectionWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 56vh;
  background-color:#171616;
  padding: 20px 0 80px 0;
`;

export const PortofolioSectionTitle = styled.div`
  color:#ECC091;
  font-size:25px;
  font-family: Arvo-Bold;
  font-weight: 700;
`;

export const PortofolioBoxesWrapper = styled.div`
  display:flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 64px 0;
`;

export const PortofolioLogoBox = styled.div`
    width: 368px;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: #fff;
    cursor:pointer;
    justify-content: center;
    align-items: center;
  padding: 20px;
  transition: all 0.2s;
  :hover{
    transform: translate(0,-8px);
    box-shadow:#8DA092 0px 0px 9px 0px;
  }
`;

export const PortofolioLogoDescription = styled.div`

`;

export const PortofolioLogoImage = styled.div`
  background-image:url(${LogoImage});
  background-repeat: no-repeat;
  height: 184px;
  width: 104px;
  background-size: contain;
`;

export const PortofolioWebBox = styled.div`
  width: 368px;
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #fff;
  cursor:pointer;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: all 0.2s;
  :hover{
    transform: translate(0,-8px);
    box-shadow:#8DA092 0px 0px 9px 0px;
  }
`;

export const PortofolioWebDescription = styled.div`

`;

export const PortofolioWebImage = styled.div`
  background-image:url(${WebImage});
  background-repeat: no-repeat;
  height: 184px;
  width: 104px;
  background-size: contain;
`;

export const PortofolioMobileBox = styled.div`
  width: 368px;
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #fff;
  cursor:pointer;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: all 0.2s;
  :hover{
    transform: translate(0,-8px);
    box-shadow:#8DA092 0px 0px 9px 0px;
  }
`;

export const PortofolioMobileDescription = styled.div`

`;

export const PortofolioMobileImage = styled.div`
  background-image:url(${MobileImage});
  background-repeat: no-repeat;
  height: 146px;
  width: 104px;
  background-size: contain;
`;

export const SeeMoreButton = styled.div`
  background-color:#ECC091;
  :hover{
    background-color:#8DA092;
    color:#8DA092;
    box-shadow: rgb(0 0 0 /37%) 0px 0px 9px 0px;;
  }
`;

export const SeeMoreText = styled.div`
  font-family: Helvetica-Regular;
  font-size:16px;
  padding: 4px 8px;
  font-weight: 700;
  color:#171616;
`;