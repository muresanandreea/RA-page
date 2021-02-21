import styled from 'styled-components';

export const Wrapper= styled.div`
  top:0;
  display:flex;
  width: 100%;
  height:7rem;
  background-color:#070809;
  opacity:0.7;
  box-shadow: rgb(0 0 0 /37%) 0px 0px 9px 0px;
  align-items: center;
  position:fixed;
  justify-content: space-between;
`;

export const LogoWrapper= styled.div`
  width:178px;
  height: 25px;
  transition: all 0.3s ease 0s;
  font-size: 25px;
  color:#69779b;
  opacity:1;
`;

export const SideMenuButtonWrapper= styled.div`
  width:5rem;
  font-size: 20px;
  cursor:pointer;
  display: none;
`;

export const ButtonWrapper = styled.div`
  display:flex;
  opacity:1;
  align-items:center;
  justify-content: center;
  border:1px solid #070809;
  cursor:pointer;
  margin:0 10px;
  border-radius:15px;
  :hover{
    background-color:#070809;
    border:1px solid #acdbdf;
    transition: all 0.3s ease 0s;
  }
`;

export const RequestButtonWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  border:1px solid #070809;
  background-color:#acdbdf;
  cursor:pointer;
  border-radius:15px;
  margin-left:32px;
  opacity:1;
  >div {
    color:#070809;
    transition: all 0.3s ease 0s;
    
  }
  :hover{
    background-color:#070809;
    border:1px solid #acdbdf;
    border-radius:15px;
    transition: all 0.3s ease 0s;
    >div {
      color:#acdbdf;
      transition: all 0.3s ease 0s;
    }
  }
`;

export const ButtonText = styled.div`
  font-size: 16px;
  padding: 16px;
  color: #acdbdf;    
  font-family: cambria,serif;
  text-transform: uppercase;
  
`;

export const SideMenuWrapper = styled.div``;

