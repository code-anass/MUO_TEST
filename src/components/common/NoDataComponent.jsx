/**
 * Author:  Anitha Gorli
 * Date: 15-JUNE-2023
 */
import React from "react";
import styled from "styled-components";



export const NoDataContainer = styled.p`
  margin: 1rem;
  color: ${({ theme }) => theme.fontColor.def_color};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  font-weight: 600;
  align-item: flex-start;
  font-size: ${({ theme }) => theme.fontSize.extremeLarge}px;
  line-height: 1.1;
  // color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  padding-bottom: 20px;
  text-align: center;
  position: relative;
  margin-bottom: 10px;
  font-weight: 500;
`;

const NoDataComponent = (props) => {
  return (
    <NoDataContainer
      onClick={props.onClick}
      style={{
        pointerEvents: "all",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {props.children}
    </NoDataContainer>
  );
};

export default NoDataComponent;
