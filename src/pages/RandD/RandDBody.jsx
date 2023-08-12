import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  fetchLogin,
  fetchAccessRequest,
  FETCH_ACCEPT_REQUEST,
  fetchR_AND_DDetails,
} from "../../redux/actions/R_and_D_Actions";
import { connect, useDispatch } from "react-redux";
import { logInfo } from "../../utils/QLogger";
import { isDataAvailable } from "../../utils/OperationUtils";
import LanguageChecker from "../../utils/LanguageChecker";
import { RandDData } from "./RandD_Data";
import { FormContainer, FormContent } from "./RandD_Styles";
import RandDCard, { ButtonOption } from "./RandDCard";
import ModalPopup from "../../components/Model/ModelPopup";
import {
  DivLabel,
  Form,
  FormInDiv,
  Input,
  Label,
  LabelPara,
  LabelRnD,
} from "../ContactUs/ContactComponentStyle";
import InputComponent from "../../components/common/InputComponent";
import {
  ACCESS_TOKEN_KEY,
  MAX_LENGTH_NAME,
  PerPage,
} from "../../utils/Constants";
import { useTranslation } from "react-i18next";
import StyledProgressBar from "../../components/common/ProgressBar";
import QText from "../../components/QText/QText";
import { API_ERROR, API_SUCCESS } from "../../redux/actions/ApiActions";
import Alert from "../../components/common/AlertComp";
import Pagination from "../../components/Pagination/Pagination";

const RandDBody = (state, props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isEnglish = LanguageChecker();
  const [counter, setCounter] = useState(-1);
  const [data, setData] = useState([]);
  const [isOpen, SetIsOpen] = useState(false);
  const [rowData, SetRowData] = useState("");
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");

  const [rowDomain, SetRowDomain] = useState("");

  const [error, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [table, setTable] = useState({});

  // Pagination
  const [pagenumber, setPagenumber] = useState(0);

  let len = data.length;
  const postdata = data.slice(0, len);
  const perpage = PerPage;
  const pageclick = pagenumber * perpage;
  const countpage = Math.ceil(postdata.length / perpage);

  const changePage = ({ selected }) => {
    setPagenumber(selected);
  };

  const handleDismiss = () => {
    setShowAlert(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const customeAlertMessage = (message) => {
    if (rowData) {
      setAlertMessage(`${table?.displayname?.toUpperCase()} - ${message} `);
      handleShowAlert();
    }
  };

  var i = 1;

  function setOpen(data) {
    setTable(data);
    SetRowData(data.entityname);
    SetRowDomain(data.domain);
    SetIsOpen(true);
  }

  function handleCancel() {
    SetEmail("");
    SetName("");
    SetIsOpen(false);
  }

  const handleNameChange = (event) => {
    SetName(event.target.value);
  };

  const handleEmailChange = (event) => {
    SetEmail(event.target.value);
  };

  const validateForm = async (props) => {
    var errors = {};

    if (name.trim().length === 0) {
      errors.name = "ContactUs.nameEmpty";
      setErrors(errors);
      return;
    }

    if (email.trim().length === 0) {
      errors.email = "ContactUs.emailEmpty";
      setErrors(errors);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "ContactUs.emailInvalid";
      setErrors(errors);
      return;
    }
    // setErrors('')

    handleSubmit();
  };
  useEffect(() => {
    logInfo(state.errorResponse, "R&D Access errorResponse");
    setIsLoading(false);

    if (
      isDataAvailable(state.errorResponse) &&
      isDataAvailable(state.errorResponse.type)
    ) {
      if (
        state.errorResponse.type === `${FETCH_ACCEPT_REQUEST}${API_SUCCESS}`
      ) {
        customeAlertMessage(t("rAndD.submitSuccess"));
      }
      if (state.errorResponse.type === `${FETCH_ACCEPT_REQUEST}${API_ERROR}`) {
        customeAlertMessage(t("rAndD.submitFailure"));
      }
    }
  }, [state.errorResponse]);

  const handleSubmit = (event) => {
    // event.preventDefault();
    setIsLoading(true);
    let obj = {
      input: {
        name: name,
        email: email,
        entity: rowData,
        domain: rowDomain,
      },
    };
    dispatch(fetchAccessRequest(obj));
    SetEmail("");
    SetName("");
    SetIsOpen(false);
  };

  useEffect(() => {
    logInfo(state.loginToken, "loginToken");
    if (data === RandDData) {
      dispatch(fetchR_AND_DDetails(state.loginToken));
    }
  }, [state.loginToken]);

  useEffect(() => {
    logInfo(state.randDDetails, "R&D Page");

    if (isDataAvailable(state.randDDetails)) {
      //bindResponseToUI(state.randDDetails);
      logInfo(state.randDDetails, "R & D Page");
      setData(state.randDDetails);
    } else {
      setData(RandDData);
    }
  }, [state.randDDetails]);

  useEffect(() => {
    if (counter <= 0) {
      setCounter((counter) => counter + 1);
    }
    if (counter === 1) {
      setCounter((counter) => counter + 1);
      //dispatch(fetchR_AND_DDetails());
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (token) {
        dispatch(fetchR_AND_DDetails("helo"));
      } else {
        dispatch(fetchLogin());
      }
    }
  }, [counter]);

  return (
    <div>
      {showAlert && (
        <Alert
          message={alertMessage}
          duration={4000}
          onDismiss={handleDismiss}
        />
      )}
      {isLoading && <StyledProgressBar />}

      <div className="wow fadeInRight animated">
        {postdata?.slice(pageclick, pageclick + perpage)?.map((el, index) => (
          <RandDCard
            key={"RandDCard" + index}
            pos={index}
            t={t}
            content={el}
            onClick={() => setOpen(el)}
          ></RandDCard>
        ))}
      </div>
      <ModalPopup
        isOpen={isOpen}
        onClose={handleCancel}
        title={t("rAndD.popupTitle") + rowData}
      >
        <QText style={{ margin: "5px" }} type="h3">
          {t("rAndD.popupDesc")}
        </QText>

        <FormContainer>
          <FormContent>
            <FormInDiv>
              <DivLabel>
                <LabelRnD htmlFor="form-name">{t("ContactUs.name")}</LabelRnD>{" "}
                <InputComponent
                  style={{ minWidth: "150px" }}
                  maxLength={MAX_LENGTH_NAME}
                  inputValue={name}
                  data={SetName}
                />
                <LabelPara>
                  {error?.name?.length > 0 && t(error.name)}
                </LabelPara>
              </DivLabel>
            </FormInDiv>
            <FormInDiv>
              <DivLabel>
                <LabelRnD htmlFor="form-email">{t("ContactUs.email")}</LabelRnD>{" "}
                <InputComponent
                  style={{ minWidth: "150px" }}
                  maxLength={MAX_LENGTH_NAME}
                  inputValue={email}
                  data={SetEmail}
                />
                <LabelPara>
                  {error?.email?.length > 0 && t(error.email)}
                </LabelPara>
                <LabelPara />
              </DivLabel>
            </FormInDiv>

            <br />
            <ButtonOption
              style={{ marginBottom: "10px" }}
              type="submit"
              onClick={validateForm}
            >
              {t("rAndD.submit")}
            </ButtonOption>
          </FormContent>
        </FormContainer>
      </ModalPopup>
      <Pagination countpage={countpage} changePage={changePage} />

      {/* {isOpen && (
        <Overlay>
      
        </Overlay>
      )} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  randDDetails: state.randDDetails,
  loginToken: state.loginToken,
});

export default connect(mapStateToProps)(RandDBody);
