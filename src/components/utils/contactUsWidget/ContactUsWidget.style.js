import styled from 'styled-components';


export const Circle = styled.div`
  background-color: #B0003A;
  border-radius: 50%;
  width: 80px;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  .fa-comment-dots{
    color:#ECE8E4;
    font-size:28px;
  }
  position: sticky;
  top:864px;
  z-index: 10;
  :hover {
    box-shadow: 0 0 4px 0 rgb(22 45 61 / 25%);
    cursor:pointer;
  };
`;