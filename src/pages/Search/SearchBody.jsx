import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  AnchorTag,
  AnchorTag1,
  Button,
  ButtonAnchor,
  Container,
  Card,
  Form,
  FormBlockDiv,
  FormContainer,
  HeaderContainer,
  Hr,
  Input,
  LI,
  SearchContainer,
  Span,
  Ul,
  SharedBy,
  CardContent,
  LinkStyles,
  Content,
  CardFooter,
  FooterText,
  FooterFontBold,
  Heading,
  HrBreak,
  ButtonOption,
  NoDataContain,
  SpanHighLight,
  SpanNotHighLight,
  MoreDetailDiv,
} from "./SearchStyle";
import { useState } from "react";
import { SearchData, LimitDropdownList } from "../../data/SearchData";
import ModalPopup from "../../components/Model/ModelPopup";
import { H2, PRE } from "../../components/Model/ModelPopStyle";
import { tableData } from "../../data/TableContent";
import { saveAndDownloadFile } from "../../utils/SaveFile";
import { connect, useDispatch } from "react-redux";
import { fetchEntityData } from "../../redux/actions/EntityDataActions";
import { logInfo } from "../../utils/QLogger";
import { Search } from "bootstrap-icons-react";

import {
  globalSearchResults,
  isDataAvailable,
} from "../../utils/OperationUtils";
import {
  fetchLogin,
  fetchR_AND_DDetails,
} from "../../redux/actions/R_and_D_Actions";
import QText from "../../components/QText/QText";
import QButton from "../../components/common/QButton";
import DropdownComp from "../../components/Search/DropdownComp";
import Alert from "../../components/common/AlertComp";
import StyledProgressBar from "../../components/common/ProgressBar";
import TextWithDownArrow from "../../components/common/TextWithDownArrow";
import { ACCESS_TOKEN_KEY, PerPage } from "../../utils/Constants";
import Pagination from "../../components/Pagination/Pagination";
import TextHilight from "../../components/common/TextHilight";
import { RandDData } from "../RandD/RandD_Data";

const SearchBody = (state) => {
  const t = state.t;

  const searchKey = state.searchKey;

  const [inputVal, setInputValue] = useState(searchKey);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [singleEntity, setEntityData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [popUp, setpopUp] = useState(false);
  const [jsonId, setJsonId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadPopUpOpen, setDownloadePoUpIsOpen] = useState(false);

  const [counter, setCounter] = useState(-1);
  const [recordLimit, setRecordLimit] = useState(-1);
  const [table, setTable] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  // Pagination
  const [pagenumber, setPagenumber] = useState(0);
  const [search, setSearch] = useState(false);

  let len = filteredData?.length;
  const postdata = filteredData?.length > 0 ?  filteredData?.slice(0, len) : [];
  const perpage = PerPage;
  const pageclick = pagenumber * perpage;
  const countpage = Math.ceil(postdata?.length / perpage);

  const changePage = ({ selected }) => {
    setPagenumber(selected);
  };

  const handleDismiss = () => {
    setShowAlert(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeDownloadModal = () => {
    setDownloadePoUpIsOpen(false);
  };
  const handleChange = (e) => {
    e.preventDefault();
  };

  function itemClickEvent(item) {
    logInfo(item, "selected");
    let obj = JSON.parse(item);
    setRecordLimit(obj.title);
  }

  const searchData = (e) => {
    logInfo("clicked It", inputVal);
    e.preventDefault();
    setSearch(true)
    if (isDataAvailable(inputVal)) {
      const filteredData = globalSearchResults(inputVal, data);
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  };
  let requestBody = {
    domain: "complaints",
    entity: "complaints",
    limit: "10",
  };

  const showJson = (records) => {
    logInfo("clicke", records);
    openModal();
  };
  const downloadFile = (records) => {
    saveAndDownloadFile(records, table.displayname);
    customeAlertMessage("File has been downloaded sucessfully. Thank you");
    handleShowAlert();
  };

  const downloadAPI = (row) => {
    requestBody.domain = row.domain;
    requestBody.limit = recordLimit;
    requestBody.entity = row.entityname;
    setIsLoading(true);
    dispatch(fetchEntityData(requestBody));
  };

  const downloadPopup = (row) => {
    setRecordLimit(10);
    setTable(row);
    setDownloadePoUpIsOpen(true);
  };

  const customeAlertMessage = (message) => {
    if (table && table.displayname) {
      setAlertMessage(`${table?.displayname?.toUpperCase()} - ${message} `);
      handleShowAlert();
    }

    // setRecordLimit(10)
    // requestBody.domain = row.domain;
    // requestBody.limit = 10;
    // requestBody.entity = row.entityname;
  };

  const preview = (row) => {
    setRecordLimit(1);
    setTable(row);
    requestBody.domain = row.domain;
    requestBody.limit = 1;
    requestBody.entity = row.entityname;
    setIsLoading(true);
    dispatch(fetchEntityData(requestBody));
  };

  useEffect(() => {
    if (counter <= 0) {
      setCounter((counter) => counter + 1);
    }
    if (counter === 1) {
      setCounter((counter) => counter + 1);
      //dispatch(fetchR_AND_DDetails());
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (token) {
        dispatch(fetchR_AND_DDetails("hel"));
      } else {
        dispatch(fetchLogin());
      }
    }
  }, [counter]);



  useEffect(() => {
    if (isDataAvailable(state.loginToken)) {
      logInfo(state.loginToken, "loginToken");
    if (data === RandDData) {
      dispatch(fetchR_AND_DDetails(state.loginToken));
    }
  }
  }, [state.loginToken]);

  const onHandleChange = (e) => {
    e.preventDefault()

    if (e.target.value === "") {
      setInputValue(e.target.value)
      setFilteredData(data);

    } else {
      setInputValue(e.target.value)

    }

  }


    
  useEffect(() => {
    logInfo(state.randDDetails, "R&D Page search");

    if (isDataAvailable(state.randDDetails)) {
      //bindResponseToUI(state.randDDetails);
      logInfo(state.randDDetails, "R & D Page search");
      setData(state.randDDetails);
      if (isDataAvailable(inputVal)) {
        const filteredData = globalSearchResults(inputVal, state.randDDetails);
        setFilteredData(filteredData);
      } else {
        setFilteredData(state.randDDetails);
      }
    } else {
      setData(RandDData);
    }
  }, [state.randDDetails]);



  // useEffect(() => {
  //   logInfo(state.entities, "Logger Search Page");

  //   if (isDataAvailable(state.entities)) {
  //     logInfo(state.entities, "Entities---- resp");
  //     setData(state.entities);
  //     if (isDataAvailable(inputVal)) {
  //       const filteredData = globalSearchResults(inputVal, state.entities);
  //       setFilteredData(filteredData);
  //     } else {
  //       setFilteredData(state.entities);
  //     }
  //   }
  // }, [state.entities]);

  useEffect(() => {
    logInfo(state.entityData, "Preview Entity");
    setIsLoading(false);
    setDownloadePoUpIsOpen(false);

    if (isDataAvailable(state.entityData)) {
      //bindResponseToUI(state.randDDetails);
      logInfo(state.entityData, "entityData---- resp");
      setEntityData(state.entityData);

     
      if (state?.entityData?.length <= 0) {
        customeAlertMessage("No records found to Preview / Download.");
        return;
      }
      if (recordLimit > 0) {
        if (recordLimit === 1) {
          showJson(state.entityData);
        } else {
          downloadFile(state.entityData);
        }
      }
    } else {
      customeAlertMessage("No records found to Preview / Download.");
    }
  }, [state.entityData]);

  useEffect(() => {
    logInfo(state.errorResponse, "Preview Entity errorResponse");
    setIsLoading(false);

    if (
      isDataAvailable(state.errorResponse) &&
      isDataAvailable(state.errorResponse.type) &&
      state.errorResponse.type === "[Entity-Data-Details]"
    ) {
      customeAlertMessage("Unable to Preview / Download. Please try again");
      //bindResponseToUI(state.randDDetails);
      logInfo(state.errorResponse.meta, "entityData---- errorResponse resp");
    }
  }, [state.errorResponse]);

  return (
    <SearchContainer>
      {showAlert && (
        <Alert
          message={alertMessage}
          duration={3000}
          onDismiss={handleDismiss}
        />
      )}
      {isLoading && <StyledProgressBar />}

      <Hr />
      <Container>
        <HeaderContainer>
          <br />
          <br />

          <Heading>{t("searchFilter.Header")}</Heading>
          <br />
        </HeaderContainer>

        <FormBlockDiv>
          <FormContainer>
            <Form>
              <Input
                type="text"
                value={inputVal}
                placeholder={t("searchFilter.SearchPH")}
                onChange={(e) => onHandleChange(e)}
              />
              <Button
                type="submit"
                data-style="zoom-in"
                data-spinner-size={30}
                onClick={searchData}
              >
                <Span>
                  {/* <Search/> */}
                  {t("searchFilter.Search")}
                </Span>
              </Button>
            </Form>
          </FormContainer>

          {/* <ButtonAnchor>
            <Ul>
              <LI>
                <AnchorTag
                  data-toggle="pill"
                  href="#custom-tabs-one-home"
                  role="tab"
                  aria-controls="custom-tabs-one-home"
                  aria-selected="true"
                >
                  {t("searchFilter.Information")}
                </AnchorTag>
              </LI>
              <LI>
                <AnchorTag1
                  data-toggle="pill"
                  href="#custom-tabs-one-profile"
                  role="tab"
                  aria-controls="custom-tabs-one-profile"
                  aria-selected="false"
                >
                  {t("searchFilter.Data")}
                </AnchorTag1>
              </LI>
            </Ul>
          </ButtonAnchor> */}
          {
            <ModalPopup
              isOpen={isOpen}
              onClose={closeModal}
              title={t("searchFilter.preview")}
            >
              {/* <H2>{t("searchFilter.JsonContent")}</H2> */}
              <PRE>{JSON.stringify(singleEntity, null, 2)}</PRE>
            </ModalPopup>
          }
          {
            <ModalPopup
              isOpen={isDownloadPopUpOpen}
              onClose={closeDownloadModal}
              title={t("searchFilter.download")}
            >

              <div
                style={{
                  display: "flex",
                  margin: "3rem",
                  flexDirection: "row",
                }}
              >
                <QText
                  type="p"
                  tx={"searchFilter.limit"}
                  style={{
                    marginBottom: "0",
                    textTransform: "capitalize",
                    flex: "1",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                  }}
                ></QText>
                <div
                  style={{
                    background: "green",
                    flex: "2",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <DropdownComp
                    download={true}
                    dropdownList={LimitDropdownList}
                    stylesSelect={true}
                    stylesOption={true}
                    onItemClick={itemClickEvent}
                  />
                </div>
              </div>
              <ButtonOption
                style={{ textTransform: "none" }}
                onClick={() => {
                  downloadAPI(table);
                }}
              >
                {t("searchFilter.downloadCSV")}
              </ButtonOption>
            </ModalPopup>
          }

          {search == true ?

            postdata?.map((value, index) => (
              <Card key={"searchResults" + index + "_" + value.entityname}>
                <Span>
                  <CardContent
                    role="tabpanel"
                    aria-labelledby="custom-tabs-one-home-tab"
                  >
                    <QText
                      type="h3"
                      style={{ marginBottom: "0", textTransform: "capitalize" }}
                    >
                      {inputVal != "" ? (
                        <TextHilight
                          search={[inputVal]}
                          text={value.displayname}
                        />
                      ) : (
                        value.displayname
                      )}
                    </QText>
                    <ButtonOption
                      onClick={() => {
                        downloadPopup(value);
                      }}
                    >
                      {t("searchFilter.download")}
                    </ButtonOption>
                    <ButtonOption id={index} onClick={() => preview(value)}>
                      {t("searchFilter.preview")}
                    </ButtonOption>
                    <Content
                      style={{
                        marginBottom: "0px",
                        marginTop: "5px",
                        padding: "0px",
                      }}
                    >
                      {t("searchFilter.domain") + ": "}
                      {inputVal != "" ? (
                        <TextHilight search={[inputVal]} text={value.domain} />
                      ) : (
                        value.domain
                      )}
                    </Content>
                    {value.tags && (
                      <div
                        style={{
                          marginTop: "5px",
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        {value?.tags?.map((item, id) => (
                          <LinkStyles key={id}>{item}</LinkStyles>
                        ))}
                      </div>
                    )}

                    <Content style={{ marginTop: "5px", marginBottom: "0px" }}>
                      {t("searchFilter.description") + ": "}
                      {inputVal != "" ? (
                        <TextHilight
                          search={[inputVal]}
                          text={value.description}
                        />
                      ) : (
                        value.description
                      )}
                    </Content>

                    <div
                      style={{
                        marginTop: "5px",
                        marginBottom: "10px",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {value?.more?.map((val, i) => (
                        <div key={i + "MoreDetails" + val.name}>
                          <CardFooter>
                            <FontAwesomeIcon icon={val.icon} color="black" />
                          </CardFooter>
                          <FooterText>
                            <FooterFontBold> {val.name}</FooterFontBold>
                          </FooterText>
                        </div>
                      ))}
                    </div>
                    <HrBreak />
                  </CardContent>
                </Span>
              </Card>
            ))

            :

            postdata
              ?.slice(pageclick, pageclick + perpage)
              ?.map((value, index) => (
                <Card key={"searchResults" + index + "_" + value.entityname}>
                  <Span>
                    <CardContent
                      role="tabpanel"
                      aria-labelledby="custom-tabs-one-home-tab"
                    >
                      <QText
                        type="h3"
                        style={{ marginBottom: "0", textTransform: "capitalize" }}
                      >
                        {inputVal != "" ? (
                          <TextHilight
                            search={[inputVal]}
                            text={value.displayname}
                          />
                        ) : (
                          value.displayname
                        )}
                      </QText>
                      <ButtonOption
                        onClick={() => {
                          downloadPopup(value);
                        }}
                      >
                        {t("searchFilter.download")}
                      </ButtonOption>
                      <ButtonOption id={index} onClick={() => preview(value)}>
                        {t("searchFilter.preview")}
                      </ButtonOption>
                      <Content
                        style={{
                          marginBottom: "0px",
                          marginTop: "5px",
                          padding: "0px",
                        }}
                      >
                        {t("searchFilter.domain") + ": "}
                        {inputVal != "" ? (
                          <TextHilight search={[inputVal]} text={value.domain} />
                        ) : (
                          value.domain
                        )}
                      </Content>
                      {value.tags && (
                        <div
                          style={{
                            marginTop: "5px",
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          {value?.tags?.map((item, id) => (
                            <LinkStyles key={id}>{item}</LinkStyles>
                          ))}
                        </div>
                      )}

                      <Content style={{ marginTop: "5px", marginBottom: "0px" }}>
                        {t("searchFilter.description") + ": "}
                        {inputVal != "" ? (
                          <TextHilight
                            search={[inputVal]}
                            text={value.description}
                          />
                        ) : (
                          value.description
                        )}
                      </Content>

                      <div
                        style={{
                          marginTop: "5px",
                          marginBottom: "10px",
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        {value?.more?.map((val, i) => (
                          <MoreDetailDiv key={i + "MoreDetails" + val.name}>
                            <CardFooter>
                              <FontAwesomeIcon icon={val.icon} color="black" />
                            </CardFooter>
                            <FooterText>
                              <FooterFontBold> {val.name}</FooterFontBold>
                            </FooterText>
                          </MoreDetailDiv>
                        ))}
                      </div>
                      <HrBreak />
                    </CardContent>
                  </Span>
                </Card>
              ))

          }

          {!filteredData ||
            (filteredData?.length <= 0 && (
              <NoDataContain>{t("insightsDetatil.nodata")}</NoDataContain>
            ))}
        </FormBlockDiv>

        <Pagination countpage={countpage} changePage={changePage} />
      </Container>
    </SearchContainer>
  );
};

const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  randDDetails: state.randDDetails,
  entityData: state.entityData,
  loginToken: state.loginToken,
});

export default connect(mapStateToProps)(SearchBody);
