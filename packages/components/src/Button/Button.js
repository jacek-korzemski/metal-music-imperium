import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.variant === 'default' &&
    css`
      background-color: #f8f9fa;
      color: #212529;
    `}

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: #007bff;
      color: #fff;
    `}

  ${(props) =>
    props.variant === 'success' &&
    css`
      background-color: #28a745;
      color: #fff;
    `}

  ${(props) =>
    props.variant === 'warning' &&
    css`
      background-color: #ffc107;
      color: #212529;
    `}

  ${(props) =>
    props.variant === 'danger' &&
    css`
      background-color: #dc3545;
      color: #fff;
    `}

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const Button = ({ children, onClick, variant = 'default' }) => (
  <StyledButton onClick={onClick} variant={variant}>
    {children}
  </StyledButton>
);

export default Button;
