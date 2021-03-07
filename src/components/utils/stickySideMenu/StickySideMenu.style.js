import styled from 'styled-components';

export const SideMenuWrapper = styled.div`
  position: sticky;
  top: 24%;
  width: 300px;
  height: 273px;
  margin-top: 4%;
  margin-left: 4%;
  display: flex;
  background-color: #171616;
`;

export const SideMenuSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 4px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 100%;
  border-radius: 8px;
  background-color: #ECC091;
`;

export const ButtonWrapper = styled.a`
  cursor:pointer;
  text-decoration: none;
  :hover {
    background-color: #8DA092;
    >div {
      color:#171616;
      font-family: Helvetica-Bold;
      font-weight: 700;
    }
  }
`;

export const ButtonWrapperCurrent = styled.a`
  cursor:default;
  text-decoration: none;
    background-color: #8DA092;
    >div {
      color:#171616;
      font-family: Helvetica-Bold;
      font-weight: 700;
    }
  }
`;

export const ButtonText = styled.div`
    font-family: Helvetica-Regular;
    font-size:18px;
    color: #ECC091 ;
    padding: 4px;
`;