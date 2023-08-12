import React from "react";
import styled from "styled-components";

const Button = styled.a`
  background-color: ${({ theme }) => theme.color.buttonBG} !important;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  margin-left: 18%;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  // display: flex;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.color.buttonBGHover} !important;
    color: white;
  }
`;

const QButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      target={props.target}
      href={props.refLink ? props.refLink : null}
      style={{
        pointerEvents: "all",
        marginLeft: "auto",
        marginRight: "auto",
        ...props.style

      }}
    >
      {props.text}
    </Button>
  );
};

export default QButton;
