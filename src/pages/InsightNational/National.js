import React from "react";
import {
  BodyWrapper,
  Main,
  NoDataContain,
  HRLine,
  Container,
  MainContainer,
  SubMainContainer,
  SubSubMainContainer,
  TittleContainer,
  JustifyContent,
  ContentCard,
  SubContentCard,
  SubSubContentCard,
  ContentCardBody,
  ContainerCard,
} from "./NationalStyles";
import { Grid } from "@mui/material";
import HeaderComp from "../../components/CustomCards/HeaderComp";
import InsightCard from "./InsightCard";
import { NationalData } from "./NationalData";
import DropdownComp from "../../components/Search/DropdownComp";
import { dropdownList } from "../../data/InsightsFilterData";
import SearchComp from "../../components/Search/SearchComp";
import { useTranslation } from "react-i18next";
import {
  fetchNationalDetails,
  fetchNationalSchemaDetails,
} from "../../redux/actions/InsightNationalActions";
import { useDispatch } from "react-redux";
import LanguageChecker from "../../utils/LanguageChecker";
import { useState, useEffect, useRef } from "react";
import { isDataAvailable } from "../../utils/OperationUtils";
import { connect } from "react-redux";
import { logInfo } from "../../utils/QLogger";
//import {  map } from "ramda";
import { map } from "lodash";
import { filter } from "ramda";
import QText from "../../components/QText/QText";
import { insightSearch } from "../../utils/OperationUtils";
import Pagination from "../../components/Pagination/Pagination";
import { PerPage } from "../../utils/Constants";

const InsightNational = (state) => {
  const { t } = useTranslation();
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const isEnglish = LanguageChecker();
  const [national, setNational] = useState(NationalData);
  const [counter, setCounter] = useState(-1);
  const [filterNational, setFilterNational] = useState(dropdownList);
  const [nationalmain, setNationalMain] = useState([]);
  const [searchClear, setSearchClear] = useState("");
  const [dropDownClear, setDropDownClear] = useState("hel");
  const [noData, setNoData] = useState(false);


  
    // Pagination

    let len = national.length
    const postdata = national.slice(0, len);
    const [pagenumber, setPagenumber] = useState(0);
    const perpage = PerPage;
    const pageclick = pagenumber * perpage;
    const countpage = Math.ceil(postdata.length / perpage);

    const changePage = ({ selected }) => {
      setPagenumber(selected);
    }

  useEffect(() => {
    if (isDataAvailable(state.nationalDetails)) {
      bindResponseToUI(state.nationalDetails);
      logInfo(national, "National Page");
    } else {
      setNational(NationalData);
      setNationalMain(NationalData);
      setFilterNational(dropdownList);
    }
  }, [state.nationalDetails]);


  useEffect(() => {
    if (counter <= 0) {
      setCounter((counter) => counter + 1);
    }
    if (counter === 1) {
      setCounter((counter) => counter + 1);
      logInfo(counter);
      dispatch(fetchNationalDetails());
      dispatch(fetchNationalSchemaDetails());
    }
  }, [counter]);

  const bindResponseToUI = (data) => {
    logInfo(data, "National DAta");
    if (isEnglish) {
      if (data.nationalen) {
        setNational(data.nationalen)
        setNationalMain(data.nationalen);
        logInfo('nationalmainen ', data.nationalen, national);

      }
      if (data.themesen) setFilterNational(data.themesen);
    } else {
      if (data.nationalmy) {
        setNational(data.nationalmy);
        setNationalMain(data.nationalmy);
        logInfo('nationalmainMalay ', data.nationalmy);
       
      }

      if (data.themesmy) setFilterNational(data.themesmy);
    }
  };


  function itemClickSearchEvent(item) {
    setDropDownClear("");
    setSearchClear(item);

    logInfo(item,"National Search Item");
    if(item.length === 0 || item.length === undefined || item.length === null)
      setNational(nationalmain); 
    else 
      setNational(insightSearch(nationalmain, item, t));
  }


  function itemClickEvent(item) {
    setSearchClear("");
    setDropDownClear(item);
    let filter = [];
    const temp = JSON.parse(item);
    if (national.length == 7) {
      filter = national;
      setNationalMain(national);
    } else filter = nationalmain;
    if (temp.title == t("insightsDetatil.themeselect"))
      setNational(nationalmain);
    else {
      logInfo(item, filter, "FilterDAta");
      const temp = JSON.parse(item);
      logInfo(temp);
      let obj = [];
      filter.map((content) => {
        let test = false;
        content.theme.map((themedata) => {
          logInfo(themedata.content, temp.title);
          if (
            themedata.content == temp.title ||
            t(themedata.content) == temp.title
          ) {
            logInfo(themedata.content, temp.title);
            test = true;
          }
        });
        if (test == true) obj.push(content);
      });
      setNational(obj);
      logInfo(national, obj, "FilteredDAta");
      if (obj.length == 0) setNoData(true);
      else setNoData(false);
      logInfo(noData, "NoData");
    }
  }



  logInfo('national -------------', national);
  return (
    <Main>
      <MainContainer>
        <SubMainContainer>
          <SubSubMainContainer>
            <TittleContainer
              url={
                "https://muostag.planmalaysia.gov.my/qp-core-service/1.0.0/containers/helper/download/planmalaysia.gov.my/CITIZEN/National_Background.jpg"
              }
            >
              <HeaderComp
                headerTitle={t("insights.national")}
              ></HeaderComp>
            </TittleContainer>
            <JustifyContent></JustifyContent>
            <ContentCard>
              <SubContentCard>
                <SubSubContentCard>
                  <ContentCardBody>
                    <ContainerCard>
                      <SubContentCard>
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="flex-end"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <SubSubContentCard>
                              <SearchComp
                                onItemClick={itemClickSearchEvent}
                                value={searchClear}
                                onChange={searchClear}
                              />
                            </SubSubContentCard>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <SubSubContentCard>
                              {/* <form
                            style={{ marginLeft: "40%", width: "60%" }}
                            action="/app/muo/web/dashboard/default/national"
                        > */}
                              <DropdownComp
                                dropdownList={filterNational}
                                onItemClick={itemClickEvent}
                                value={dropDownClear}
                              />
                              {/* </form> */}
                            </SubSubContentCard>
                          </Grid>
                        </Grid>
                      </SubContentCard>
                    </ContainerCard>
                  </ContentCardBody>
                </SubSubContentCard>
              </SubContentCard>
              <HRLine></HRLine>
              {/* <div className="container"> */}
              {/* <div className="row"> */}

              {/* Search Box  */}

              {/* </div> */}
              {/* </div> */}

              <Container>
                {!national || national.length <= 0 ? (
                  <NoDataContain>{t("insightsDetatil.nodata")}</NoDataContain>
                ) : (
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    marginTop="0px"
                    marginBottom="50px"
                    marginLeft="0px"
                    spacing={2}
                  >
                    {postdata?.slice(pageclick,pageclick + perpage).map((element, index) => (
                      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <InsightCard data={element} t={t}></InsightCard>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Container>
              <HRLine style={{ margin: "0 2rem 3rem 2rem" }}></HRLine>

              {countpage > 1 && 
              <Pagination countpage={countpage} changePage={changePage}/>
              }
            </ContentCard>
          </SubSubMainContainer>
        </SubMainContainer>
      </MainContainer>
    </Main>
  );
};

const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  nationalDetails: state.nationalDetails,
});

export default connect(mapStateToProps)(InsightNational);
