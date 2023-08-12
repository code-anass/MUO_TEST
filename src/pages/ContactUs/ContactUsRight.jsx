/**
 * Author: Amit
 * Date: 27-APR-2023
 */
import React, { useState, useEffect } from "react";

import ContactUsDetailComponent from "../../components/Contact/ContactUsDetailComponent";
import DropdownComp from "../../components/Search/DropdownComp";
import Captcha from "../../components/common/Captcha";
import InputComponent from "../../components/common/InputComponent";
import MapComponent from "../../components/common/MapComponent";
import TextArea from "../../components/common/TextArea";
import {
  ContactDropdownList,
  ContactUsSectionFilter,
  ContactUsSectionLFilter,
} from "../../data/ContactData";
import {
  BR,
  Body,
  Button,
  CBoxDiv,
  Div,
  DivLabel,
  DivRight,
  DivSubmit,
  Form,
  FormInCatDiv,
  FormInDiv,
  H1,
  H3,
  HR,
  ImageDiv,
  ImageWrapp,
  ImageWrapper,
  Input,
  Label,
  LabelPara,
  LeftContDiv,
  LeftContainer,
  LeftContainerDiv,
  LeftContainerWrapper,
  LeftDiv,
  P,
  PLabel,
  ParagraphBWrapper,
  ParagraphNWrapper,
  RightContainer,
  RightH1,
  RowWrapper,
  Rows,
} from "./ContactComponentStyle";
import { logInfo } from "../../utils/QLogger";

import BackgroundImage from "../../components/Background/BackgroundImage";
import { MainContainer } from "../W3Content/W3CStyles";
import { useDispatch, connect } from "react-redux";
import {
  clearContactUsDetails,
  postComplaint,
} from "../../redux/actions/ContactUsActions";
import { fetchIp } from "../../utils/IPAddress";
import { isDataAvailable } from "../../utils/OperationUtils";
import { useTranslation } from "react-i18next";
import LanguageChecker from "../../utils/LanguageChecker";
import QText from "../../components/QText/QText";

const ContactUsRight = (props) => {
  const isEnglish = LanguageChecker();

  // debugger
  let keyName = isEnglish ? "" : "_my";

  const { footerDetails } = props;


  const { t } = useTranslation();


  return (
    <RightContainer>
      <Rows>
        <RowWrapper>
          <DivRight>
            <RightH1>
              {/* {t('ContactUs.DH1')} */}
              {footerDetails[`footer_header${keyName}`]}
              {/* {footerDetails.footer_header}  {footerDetails.footer_desc} */}
            </RightH1>

            <ImageWrapper src="assets/hq.jpg" alt="" />
            <H3>
              {/* {t('ContactUs.DH2')} */}
              {/* {footerDetails.footer_address} */}
              {footerDetails[`footer_desc${keyName}`]}
            </H3>
            <ParagraphBWrapper>
            <QText type="htmlinverse" >{footerDetails[`footer_address${keyName}`]}</QText>

             
{/* 
              {t("ContactUs.DP1")}
              <BR />
              {t("ContactUs.DP2")}
              <BR />
              {t("ContactUs.DP3")} */}
              
            </ParagraphBWrapper>

            <ContactUsDetailComponent data={ContactUsSectionFilter} values = {[footerDetails.phone_number, footerDetails.footer_mail]} />
            <HR />
            <H3> {t("ContactUs.DP4")}</H3>

            <ContactUsDetailComponent data={ContactUsSectionLFilter} values = {[footerDetails[`contact_admin_role${keyName}`], footerDetails.contact_admin_number]} />
            <HR />
            <H3>{t("ContactUs.DP6")}</H3>
            <ParagraphNWrapper>
              {footerDetails[`operating_open${keyName}`] || t("ContactUs.DP7")}
            </ParagraphNWrapper>
            <ParagraphNWrapper>
              {footerDetails[`operating_close${keyName}`] || t("ContactUs.DP8")}
            </ParagraphNWrapper>
          </DivRight>
        </RowWrapper>
      </Rows>
    </RightContainer>
  );
};

export default ContactUsRight;
