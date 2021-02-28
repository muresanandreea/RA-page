import styled from 'styled-components';

export const FooterWrapper = styled.div`
  bottom:0;
  display:flex;
  flex-direction:column;
  width: 100%;
  height:12rem;
  background-color:#171616;
  align-items: center;
  position:absolute;
  justify-content: flex-start;
`;

export const IconsWrapper = styled.div`
  display:flex;
  margin-bottom: 12px;
`;

export const ContentWrapper = styled.div`
  
`;

export const Icon = styled.div`
  padding:10px;
.fa-linkedin-in{
  color:#ECC091;
  font-size:16px;
};
  .fa-instagram{
    color:#ECC091;
    font-size:16px;
  };
  .fa-twitter{
    color:#ECC091;
    font-size:16px;
  };
  .fa-facebook-f{
    color:#ECC091;
    font-size:16px;
  }
`;

export const Divider = styled.div`
  width:84%;
  height:1px;
  background-color:#ECC091;
`;

export const CopyrightText = styled.div`
  color:#ECC091;
  font-family:Arial-Regular;
  font-size:12px;
  cursor:default;
  margin-bottom: 8px;
`;

export const PrivacyPolicyText = styled.div`
  color:#ECC091;
  font-family:Arial-Regular;
  font-size:12px;
  cursor:pointer;
  margin-bottom: 40px;
`;