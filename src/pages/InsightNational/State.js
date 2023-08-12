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
import BackgroundImage from "../../components/Background/BackgroundImage";
import HeaderComp from "../../components/CustomCards/HeaderComp";
import InsightCard from "./InsightCard";
import { NationalData } from "./NationalData";
import DropdownComp from "../../components/Search/DropdownComp";
import { dropdownList } from "../../data/InsightsFilterData";
import SearchComp from "../../components/Search/SearchComp";
import { useTranslation } from "react-i18next";
import {
  fetchStateDetails,
  fetchStateSchemaDetails,
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
import { insightSearch } from '../../utils/OperationUtils'
import { PerPage } from "../../utils/Constants";
import Pagination from "../../components/Pagination/Pagination";



const InsightState = (state) => {
  const { t } = useTranslation();
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const isEnglish = LanguageChecker();
  const [states, setStates] = useState(NationalData);
  const [counter, setCounter] = useState(-1);
  const [filterState, setFilterState] = useState(dropdownList);
  const [statemain, setStateMain] = useState([]);
  const [statesData, steStatesData] = useState([]);
  const [searchClear, setSearchClear] = useState("");
  const [dropDownClear, setDropDownClear] = useState("hel");
  const [dropDownClear2, setDropDownClear2] = useState("hel");
  const [noData, setNoData] = useState(false);
  const [themeSelect, SetThemeSelect] = useState("");


  // Pagination
  const [pagenumber, setPagenumber] = useState(0);

  let len = states.length
  const postdata = states.slice(0, len);
  const perpage = PerPage;
  const pageclick = pagenumber * perpage;
  const countpage = Math.ceil(postdata.length / perpage);

  const changePage = ({ selected }) => {
    setPagenumber(selected);
  }

  useEffect(() => {
    if (isDataAvailable(state.nationalDetails)) {
      bindResponseToUI(state.nationalDetails);
      logInfo(statesData, "National Page");
    } else {
      setStates(NationalData);
      setStateMain(NationalData);
      setFilterState(dropdownList);
    }
  }, [state.nationalDetails]);

  useEffect(() => {
    if (counter <= 0) {
      setCounter((counter) => counter + 1);
    }
    if (counter === 1) {
      setCounter((counter) => counter + 1);
      logInfo(counter);
      dispatch(fetchStateDetails());
      dispatch(fetchStateSchemaDetails());
    }
  }, [counter]);

  const bindResponseToUI = (data) => {
    logInfo(data, "National DAta");
    if (isEnglish) {
      if (data.stateen) {
        setStates(data.stateen);
        setStateMain(data.stateen);
      }
      if (data.themesen) setFilterState(data.themesen);
      if (data.states_en) steStatesData(data.states_en);
    } else {
      if (data.statemy) {
        setStates(data.statemy);
        setStateMain(data.statemy);
      }
      if (data.themesmy) setFilterState(data.themesmy);
      if (data.states_my) steStatesData(data.states_my);
    }
  };

  function itemClickSearchEvent(item) {
    setDropDownClear("");
    setSearchClear(item);


    logInfo(item,"National Search Item");
    if(item.length === 0 || item.length === undefined || item.length === null)
    setStates(statemain); 
    else
    setStates(insightSearch(statemain, item, t));
  
  }


  // function itemClickSearchEvent(item) {
  //   setDropDownClear("");
  //   setDropDownClear2("");
  //   setSearchClear(item);


  //   setStates(insightSearch(statemain, item, t));
  // }

  function itemClickEvent(item) {
    setSearchClear("");
    setDropDownClear2("");
    setDropDownClear(item);

    SetThemeSelect(item);

    const temp = JSON.parse(item);
    logInfo(temp.title, t("insightsDetatil.themeselect"), "Title,Select")
    if (temp.title == t("insightsDetatil.themeselect")) {
      setStates(statemain);
    }
    else {
      logInfo(item, filter, "FilterDAta");
      const temp = JSON.parse(item);
      logInfo(temp);
      let obj = [];
      statemain.map((content) => {
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
        if (test == true)
          obj.push(content);
      });
      setStates(obj);
      logInfo(state, obj, "FilteredDAta");
    }
    logInfo("Inside the Select Theme", states, statemain);
  }

  function itemClickEvent2(item) {
    setSearchClear("");
    //setDropDownClear("");
    setDropDownClear2(item);
    
    let statedat=statemain;
    let temp2 = JSON.parse(themeSelect);
    if(temp2.title != t("insightsDetatil.themeselect"))
    {
      statedat=states;
    }

    const temp = JSON.parse(item);
    if (temp.title == t("insightsDetatil.stateselect"))
      setStates(statemain);
    else {
      logInfo(item, filter, "FilterDAta");
      const temp = JSON.parse(item);
      logInfo(temp);
      let obj = [];
      statedat.map((content) => {
        let test = false;
        logInfo(content.state, temp.title);
        if (content.state == temp.title) {
          logInfo(content.state, temp.title);
          test = true;
        }
        if (test == true) obj.push(content);
      });
      setStates(obj);
      logInfo(state, obj, "FilteredDAta");
      if (obj.length == 0) {
        setNoData(true);
        logInfo("inside No data");
      } else setNoData(false);
    }
  }

  return (
    <Main>
      <MainContainer>
        <SubMainContainer>
          <SubSubMainContainer>
            <TittleContainer url={"https://muostag.planmalaysia.gov.my/qp-core-service/1.0.0/containers/helper/download/planmalaysia.gov.my/CITIZEN/states.jpg"}>
              <HeaderComp headerTitle={t("insights.state")}></HeaderComp>
            </TittleContainer>
            <JustifyContent>
            </JustifyContent>
            <ContentCard>
                    <SubContentCard>
                        <SubSubContentCard>
                            <ContentCardBody>
                              <ContainerCard>
                                    <SubContentCard>
                                    <Grid container direction="row"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    spacing={2}>
                    <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8}>

                                        <SubSubContentCard>
                        <SearchComp 
                        onItemClick={itemClickSearchEvent} 
                        value={searchClear}
                        onChange={searchClear}

                        />
                        </SubSubContentCard>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <SubSubContentCard>
                        {/* <form
                            style={{ marginLeft: "40%", width: "60%" }}
                            action="/app/muo/web/dashboard/default/national"
                        > */}
                            <DropdownComp dropdownList={filterState} style={{"margin-left":"30%",width:"90%"}} onItemClick={ itemClickEvent} value={dropDownClear}/>
                        {/* </form> */}
                    </SubSubContentCard>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <SubSubContentCard>
                            <DropdownComp dropdownList={statesData} style={{"margin-left":"20%",width:"90%"}} onItemClick={ itemClickEvent2} value={dropDownClear2}/>
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
                {!states || states.length <= 0 ? (
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
              <Pagination countpage={countpage} changePage={changePage}/>

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

export default connect(mapStateToProps)(InsightState);
