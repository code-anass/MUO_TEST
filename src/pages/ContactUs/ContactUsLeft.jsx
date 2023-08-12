/**
 * Author: Amit
 * Date: 27-APR-2023
 */
import React, { useState, useEffect } from "react";

import Captcha from "../../components/common/Captcha";
import InputComponent from "../../components/common/InputComponent";
import MapComponent from "../../components/common/MapComponent";
import TextArea from "../../components/common/TextArea";
import {
  ContactDropdownList,
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
import StyledProgressBar from "../../components/common/ProgressBar";
import Alert from "../../components/common/AlertComp";
import { MAX_LENGTH_CAPTCHA, MAX_LENGTH_NAME, MAX_LENGTH_REMARKS } from "../../utils/Constants";
import DropdownComp from "../../components/Search/DropdownComp";

const ContactUsLeft = (state) => {
  const basePath = "assets/images/settings/";

  const { t } = useTranslation();

  const imageLocal = basePath + "contact_bg.jpg";

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [category, setCategory] = useState("");
  const [reset, setReset] = useState(false)
  const [captchaData, setCaptchaData] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [dropDownLIst, setDropDownLIst] = useState(ContactDropdownList)
  const [showAlert, setShowAlert] = useState(false);
  const [dropDownClear, setDropDownClear] = useState("hel");
  const [error, setErrors] = useState();

  const handleDismiss = () => {
    setShowAlert(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };
  var errors = {};
  const validateForm = async (props) => {
    

    if (name.trim().length === 0) {
      errors.name = t("ContactUs.nameEmpty");
      setErrors(errors);
      return;
    }

    if (email.trim().length === 0) {
      errors.email = t("ContactUs.emailEmpty");
      setErrors(errors);
      console.log(errors);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = t("ContactUs.emailInvalid");
      setErrors(errors);
      return;
    }
    if (category.trim().length === 0 || category === t(dropDownLIst[0].title)) {
      errors.category = t("ContactUs.categoryEmpty");
      setErrors(errors);
      return;
    }

    if (remarks.trim().length === 0) {
      errors.remarks = t("ContactUs.remarksEmpty");
      setErrors(errors);
      return;
    }
    logInfo(captchaData, inputCaptcha);

    if (captchaData !== inputCaptcha || inputCaptcha.trim() === "") {
      errors.captcha = t("ContactUs.captchaNotValid");
      setErrors(errors);
      return;
    }
    setErrors({});

    let deviceIp = await fetchIp();

    let body = {
      name: name,
      email: email,
      remarks: remarks,
      category: category,
      deviceip: deviceIp,
    };

    setIsLoading(true);

    dispatch(postComplaint(body));
  };

  // function itemClickEvent(item) {

  //   let obj = JSON.parse(item)
  //   setCategory(t(obj.title));
  // }


  function itemClickEvent(item) {
    const obj = JSON.parse(item);
    setCategory(t(obj.title));
    setDropDownClear(JSON.parse(item));

  }



  function captchaGenerated(captcha) {
    setCaptchaData(captcha);
  }

  function resetViews() {
    setName("");
    setEmail("");
    setRemarks("");
    // setDropDownLIst(dropDownLIst)
    setDropDownClear("");
    setInputCaptcha("");
    logInfo(dropDownLIst);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    validateForm();
    logInfo('errrrr --------------',error);

    if (Object.keys(errors).length === 0) {
      resetViews()

    }
    logInfo('category', category);
  };




  useEffect(() => {

    if (
      isDataAvailable(state.contactUsDetails) &&
      isDataAvailable(state.contactUsDetails.result.message)
    ) {
      resetViews();
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(clearContactUsDetails());
      handleShowAlert();
      // alert("Your Complaint has been received. Thank you");
    }
  }, [state.contactUsDetails]);

  useEffect(() => {
    if (isDataAvailable(state.notification)) {
      setIsLoading(false);
    }
  }, [state.notification]);

  return (
    <Div>
      {showAlert && (
        <Alert
          message={t('Success.submit')}
          duration={3000}
          onDismiss={handleDismiss}
        />
      )}
      {isLoading && <StyledProgressBar />}

      <LeftContDiv>
        <H1>{t("ContactUs.contactUs")}</H1>
        {/* <CB > */}
        <P>{t("ContactUs.desc")}</P>
        {/* </CB> */}
        <CBoxDiv>
          <MapComponent t={t} />
          <FormInDiv>
            <Form action="/app/muo/web/site/contact" method="post">
              <Input
                type="hidden"
                name="_csrf-joms"
              />
              <DivLabel>
                <Label htmlFor="contactform-name">{t("ContactUs.name")}</Label>{" "}
                <InputComponent maxLength={MAX_LENGTH_NAME} inputValue={name} data={setName} />
                <LabelPara>
                  {error?.name?.length > 0 && t(error.name)}
                </LabelPara>
              </DivLabel>
            </Form>
          </FormInDiv>
          <FormInDiv>
            <DivLabel>
              <Label htmlFor="contactform-email">{t("ContactUs.email")}</Label>{" "}
              <InputComponent maxLength={MAX_LENGTH_NAME} inputValue={email} data={setEmail} />
              <LabelPara>
                {error?.email?.length > 0 && t(error.email)}
              </LabelPara>
              <LabelPara />
            </DivLabel>
          </FormInDiv>
          <FormInCatDiv>
            <DivLabel>
              <Label htmlFor="contactform-kategori">
                {t("ContactUs.category")}
              </Label>
              <DropdownComp
                dropdownList={dropDownLIst}
                stylesSelect={true}
                stylesOption={true}
                onItemClick={itemClickEvent}
                value={dropDownClear}
              // reset={reset}
              />
              <LabelPara>{error?.category?.length > 0 && t(error.category)}</LabelPara>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="contactform-body">{t("ContactUs.remark")}</Label>

              <TextArea
                errorValue={error}
                inputValue={remarks}
                data={setRemarks}
                maxLength={MAX_LENGTH_REMARKS}
              />
              <LabelPara>
                {error?.remarks?.length > 0 && t(error.remarks)}
              </LabelPara>

              <LabelPara />
            </DivLabel>
            <DivLabel>
              <Label htmlFor="contactform-verifycode">
                {t("ContactUs.code")}
              </Label>

              {/* Captcha components */}
              <ImageDiv>
                <Captcha captchaCreated={captchaGenerated} />
                <ImageWrapp>
                  <InputComponent
                    inputValue={inputCaptcha}
                    data={setInputCaptcha}
                    maxLength={MAX_LENGTH_CAPTCHA}
                  />
                </ImageWrapp>
              </ImageDiv>
              <PLabel style={{ marginTop: "0px" }}>
                {error?.captcha?.length > 0 && t(error.captcha)}
              </PLabel>

              {/* <LabelPara /> */}
            </DivLabel>

            <DivSubmit>
              <Button onClick={onSubmit}>{t("ContactUs.Hantar")}</Button>
            </DivSubmit>
          </FormInCatDiv>
        </CBoxDiv>
      </LeftContDiv>
    </Div>
  );
};

const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  contactUsDetails: state.contactUsDetails,
});

export default connect(mapStateToProps)(ContactUsLeft);
