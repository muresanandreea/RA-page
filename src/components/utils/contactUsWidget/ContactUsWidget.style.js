import styled from 'styled-components';


export const Circle = styled.div`
  background-color: #06D6A0;
  border-radius: 50%;
  width: 65px;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 88%;
  z-index: 500;
  .fa-comment-dots{
    color:#ECE8E4;
    font-size:28px;
  };
  :hover {
    background-color: #000;
    cursor:pointer;
  };
`;