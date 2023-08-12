/**
 * Author: Anitha Gorli
 * Date: 12-JUNE-2023
 */
import React, { useState } from "react";
import QButton from "../../components/common/QButton";
import QText from "../../components/QText/QText";
import {
  CardQuestionContainer,
  FAQCardContainer,
  FAQItemSpace,
} from "../FAQ/FAQStyles";
import styled from "styled-components";
import { Grid } from "@mui/material";

export const ActionButtons = styled.button`
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-left: 1.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  border-width: 2px;
  background: ${({ theme }) => theme.color.bgGreen};
`;
export const ButtonOption = styled.button`
  font-weight: bolder;
  background-color: ${({ theme }) => theme.color.buttonBG} !important;
  float: right;
  color: ${({ theme }) => theme.color.searchwhite}; // rgb(255, 255, 255);
  text-transform: uppercase;
  box-sizing: border-box;
  margin-right: 10px;
  border-radius: 5px;
  padding: 8px 15px;
  &:hover {
    background-color: ${({ theme }) => theme.color.buttonBGHover} !important;
    color: white;
  }
`;

export const ArrowContainers = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  
  }
`;


export const CardHeader = styled.div`
padding-left: 2%;
letter-spacing: 0.1em;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;

@media only screen and (max-width: 600px) {
  flex-direction: column;

}
`

const RandDCard = ({ t, content, pos, onClick }) => {
  const { entityname, desc, data, data1, listStyle, startPosition } =
    content || {};

  return (
    <>
      <FAQCardContainer>
        <CardQuestionContainer>
          <CardHeader id={`question${pos}`}>
            <QText type="content_white" style={{ textTransform: "capitalize" }}>
              {pos + 1 + ". " + entityname}
            </QText>

            <ArrowContainers>
              <QButton
                onClick={() => onClick(entityname)}
                text={t("rAndD.access")}
              ></QButton>
            </ArrowContainers>
          </CardHeader> 

      
        </CardQuestionContainer>
      </FAQCardContainer>
      <FAQItemSpace />
    </>
  );
};

export default RandDCard;
