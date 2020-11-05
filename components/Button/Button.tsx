import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../styles/styles';

interface ButtonI {
  url?: string;
  children: ReactNode;
  onClick?: VoidFunction;
}

const StyledButton = styled.button`
  padding: 4px 10px;
  cursor: pointer;
  background: none;
  border: none;
  white-space: nowrap;

  transition: $animate;
  position: relative;

  &:active,
  &:focus {
    outline: none;
    border: none;
  }

  &:before,
  &:after {
    left: 0;
    content: '';
    position: absolute;
    bottom: -5px;
    width: 0px;
    height: 4px;
    margin: 5px 10px 0px 10px;
    z-index: 10;
    transition: all 0.3s ease-out;
    background-color: #ff9e52;
  }

  &:hover {
    &:before,
    &:after {
      width: 107%;
      opacity: 1;
    }
  }
`;

interface ButtonContext {
  isHovered: boolean;
}

export const ButtonContext = React.createContext<ButtonContext>({
  isHovered: false,
});

const Button = (props: ButtonI) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <ButtonContext.Provider value={{ isHovered }}>
      <a
        href={props.url}
        onClick={props.onClick ? props.onClick : null}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StyledButton>{props.children}</StyledButton>
      </a>
    </ButtonContext.Provider>
  );
};

export default Button;
