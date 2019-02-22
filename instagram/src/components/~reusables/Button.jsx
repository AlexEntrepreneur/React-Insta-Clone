// import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  padding: .7rem .9rem;
  font-size: inherit;
  font-weight: bold;
  border-radius: .4rem;
  border: 1px solid #dbdbdb;
  color: #262626;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  &:active, &:disabled {
    opacity: .7;
  }
  
  &:disabled {
    cursor: default;
  }
`;

export const ButtonPrimary = styled(Button)`
  border: none;
  background-color: #3897f0;
  color: white;
`;

export const TextButton = styled(Button)`
  border: none;
`;

export const TextButtonPrimary = styled(TextButton)`
  color: #3897f0;
`;
