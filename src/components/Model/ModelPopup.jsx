import "./ModalPopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import React, { useRef, useEffect, useCallback } from "react";
import { MdClose } from "react-icons/md";
import QText from "../QText/QText";
const CloseIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.footerArrowColor};
`;

const Header = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;

  color: ${({ theme }) => theme.fontColor.def_color};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
`;

const CloseModalButton = styled(MdClose)`
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #111;
  opacity: 0.5;
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 10;

  &:hover {
    transition: all 0.25 ease-in-out;
    opacity: 1;
  }
`;

const ModalPopup = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;
  

  return (
    <div className="modal-overlay">
      <div
        className="modal-content wow fadeInUp animated"
        data-wow-delay="0.3s"
        style={{
          visibility: "visible",
          WebkitAnimationDelay: "0.3s",
          MozAnimationDelay: "0.3s",
          animationDelay: "0.3s",
        }}
      >
        {/* <div className="modal-content"> */}
        <Header>
          <QText
            style={{ textTransform: "capitalize" }}
            tx={title}
            type="h41"
          ></QText>

          <h3>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => onClose()}
            />
          </h3>
        </Header>
        <div className="modal-body">{children}</div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ModalPopup;
