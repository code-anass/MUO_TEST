import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QText from "../QText/QText";

const AlertContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.color.buttonBG};
  border: 1px solid #ddd;
  border-radius: 4px;
  filter: brightness(90%);
  padding: 16px;
  z-index: 9999;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
  display: flex;
  flexwrap: wrap;
`;

const Alert = ({ message, duration, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onDismiss();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onDismiss]);

  if (!isVisible) {
    return null;
  }

  return (
    <AlertContainer>
      <QText type="content_white" style={{display: 'flex', flexWrap: 'wrap', fontWeight:"700" }}>{message}</QText>
    </AlertContainer>
  );
};

export default Alert;
