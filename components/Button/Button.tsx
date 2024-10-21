import React, { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

interface ButtonI {
  url?: string;
  children: ReactNode;
  onClick?: VoidFunction;
  secondary?: boolean;
  fluid?: boolean;
  openInNewTab?: boolean;
  style?: CSSProperties;
}

type StyledButtonI = Pick<ButtonI, "secondary" | "fluid">;

const StyledButton = styled.button<StyledButtonI>`
  padding: ${(props) => (props.secondary ? "8px 0px" : "8px 12px")};
  width: ${(props) => (props.fluid ? "100%" : "auto")};
  cursor: pointer;
  background: none;
  border: none;
  box-shadow: ${(props) =>
    props.secondary ? "none" : "inset 0px 0px 0px 1px #ff9e52"};
  white-space: nowrap;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  transform: ${(props) => (props.secondary ? "scale(0.9)" : "none")};
  font-family: "Work Sans", sans-serif;
  text-decoration: none;

  transition: $animate;
  position: relative;
  color: #3a3441;

  &:active,
  &:focus {
    outline: none;
    border: none;
  }

  &:before,
  &:after {
    left: 0;
    content: "";
    position: absolute;
    bottom: -3px;
    width: 0px;
    height: 3px;
    margin: 5px 0px 0px 0px;
    z-index: 10;
    transition: all 0.3s ease-out;
    background-color: #ff9e52;
  }

  &:hover {
    &:before,
    &:after {
      width: 100%;
      opacity: 1;
    }
  }

  @media (max-width: 630px) {
    background-color: ${(props) => (props.secondary ? "#f5f5f5" : "none")};
    padding: 8px 12px;
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target={props.openInNewTab ? "__blank" : "_self"}
        style={{
          textDecoration: "initial",
          ...props.style,
        }}
      >
        <StyledButton {...props}>{props.children}</StyledButton>
      </a>
    </ButtonContext.Provider>
  );
};

export default Button;
