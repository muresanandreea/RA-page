import React from 'react';
import styled from 'styled-components';

const ActionButtonWrapper = styled.div`
  display:flex;
  background-color:#ECC091;
  border-radius:8px;
`;

const ActionButtonText = styled.div`
  color:#211F1D;
  padding:12px 16px;
`;

export const ActionButton = (props) => {

    return (
        <ActionButtonWrapper>
            <ActionButtonText>{props.text}</ActionButtonText>
        </ActionButtonWrapper>
    );
}