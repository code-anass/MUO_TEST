import React from 'react';
import { BodyWrapper, Main, HRLine, Container, NoDataContain, MainContainer, SubMainContainer, SubSubMainContainer, TittleContainer, JustifyContent, ContentCard, SubContentCard, SubSubContentCard, ContentCardBody, ContainerCard } from './NationalStyles';
import { Grid } from '@mui/material'
import BackgroundImage from '../../components/Background/BackgroundImage';
import HeaderComp from '../../components/CustomCards/HeaderComp';
import InsightCard from "./InsightCard";
import { NationalData } from './NationalData';
import DropdownComp from '../../components/Search/DropdownComp';
import { dropdownList } from '../../data/InsightsFilterData'
import SearchComp from '../../components/Search/SearchComp';
import { useTranslation } from 'react-i18next';
import { fetchLocalDetails, fetchLocalSchemaDetails } from '../../redux/actions/InsightNationalActions';
import { useDispatch } from 'react-redux';
import LanguageChecker from '../../utils/LanguageChecker';
import { useState, useEffect, useRef } from 'react';
import { isDataAvailable } from '../../utils/OperationUtils'
import { connect } from 'react-redux';
import { logInfo } from '../../utils/QLogger';
//import {  map } from "ramda";
import { map } from 'lodash';
import { filter } from 'ramda';
import { insightSearch } from '../../utils/OperationUtils'
import { PerPage } from '../../utils/Constants';
import Pagination from '../../components/Pagination/Pagination';




const InsightLocal = (state,) => {

    const { t } = useTranslation();
    const buttonRef = useRef(null);
    const dispatch = useDispatch();
    const isEnglish = LanguageChecker();
    const [local, setLocal] = useState(NationalData)
    const [counter, setCounter] = useState(-1);
    const [filterLocal, setFilterLocal] = useState(dropdownList);
    const [localmain, setLocalMain] = useState([]);
    const [searchClear, setSearchClear] = useState('');
    const [dropDownClear, setDropDownClear] = useState("hel");
    const [noData, setNoData] = useState(false);

    // Paginations
    const [pagenumber, setPagenumber] = useState(0);

    let len = local.length
    const postdata = local.slice(0, len);
    const perpage = PerPage;
    const pageclick = pagenumber * perpage;
    const countpage = Math.ceil(postdata.length / perpage);

    const changePage = ({ selected }) => {
        setPagenumber(selected);
    }

    useEffect(() => {
        if (isDataAvailable(state.nationalDetails)) {
            bindResponseToUI(state.nationalDetails);
            logInfo(local, "National Page");
        }
        else {
            setLocal(NationalData);
            setLocalMain(NationalData);
            setFilterLocal(dropdownList);
        }
    }, [state.nationalDetails]);

    useEffect(() => {
        if (counter <= 0) {
            setCounter(counter => counter + 1);
        }
        if (counter === 1) {
            setCounter(counter => counter + 1);
            logInfo(counter);
            dispatch(fetchLocalDetails());
            dispatch(fetchLocalSchemaDetails());
        }
    }, [counter]);

    const bindResponseToUI = (data) => {
        logInfo(data, "National DAta");
        if (isEnglish) {
            if (data.localen) {
                setLocal(data.localen);
                setLocalMain(data.localen);
            }
            if (data.themesen)
                setFilterLocal(data.themesen);

        }
        else {
            if (data.localmy) {
                setLocal(data.localmy);
                setLocalMain(data.localmy);
            }
            if (data.themesmy)
                setFilterLocal(data.themesmy);
        }
    }

    function itemClickSearchEvent(item) {
        setDropDownClear("");
        setSearchClear(item);
       
        logInfo(item,"National Search Item");
        if(item.length === 0 || item.length === undefined || item.length === null)
        setLocal(localmain); 
        else
        setLocal(insightSearch(localmain, item, t));
      
      }


    function itemClickEvent(item) {
        setSearchClear("");
        setDropDownClear(item);
        const temp = JSON.parse(item);
        if (temp.title == t("insightsDetatil.themeselect"))
            setLocal(localmain);
        else {
            logInfo(item, filter, "FilterDAta");
            const temp = JSON.parse(item);
            logInfo(temp)
            let obj = [];
            localmain.map(content => {
                let test = false;
                content.theme.map(themedata => {
                    logInfo(themedata.content, temp.title);
                    if (themedata.content == temp.title || t(themedata.content) == temp.title) {
                        logInfo(themedata.content, temp.title);
                        test = true;
                    }
                });
                if (test == true)
                    obj.push(content);
            });
            setLocal(obj);
            logInfo(local, obj, "FilteredDAta");
        }
    }
    return (
        <Main>
            <MainContainer>
                <SubMainContainer>
                    <SubSubMainContainer>
                        <TittleContainer url={"https://muostag.planmalaysia.gov.my/qp-core-service/1.0.0/containers/helper/download/planmalaysia.gov.my/CITIZEN/localBackground.jpg"}>
                            <HeaderComp headerTitle={t("insights.local")}></HeaderComp>
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
                                                    alignItems="flex-start"
                                                    spacing={2}>
                                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

                                                        <SubSubContentCard>
                                                            <SearchComp onItemClick={itemClickSearchEvent} value={searchClear} onChange={searchClear}/>
                                                        </SubSubContentCard>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                                        <SubSubContentCard>
                                                            {/* <form
                            style={{ marginLeft: "40%", width: "60%" }}
                            action="/app/muo/web/dashboard/default/national"
                        > */}
                                                            <DropdownComp dropdownList={filterLocal} onItemClick={itemClickEvent} value={dropDownClear} />
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
                                {!local || local.length <= 0
                                    ? (<NoDataContain>{t("insightsDetatil.nodata")}</NoDataContain>)
                                    : (<Grid container direction="row"
                                        justifyContent="flex-start"
                                        alignItems="stretch"
                                        marginTop="0px"
                                        marginBottom="50px"
                                        marginLeft="0px"
                                        spacing={2}>
                                        {postdata?.slice(pageclick,pageclick + perpage).map((element, index) => (
                                            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                                <InsightCard data={element} t={t}>
                                                </InsightCard>
                                            </Grid>
                                        ))}
                                    </Grid>)}
                            </Container>
                            <HRLine style={{ "margin": "0 2rem 3rem 2rem" }}></HRLine>
                            <Pagination countpage={countpage} changePage={changePage}/>

                        </ContentCard>
                    </SubSubMainContainer>
                </SubMainContainer>
            </MainContainer>
        </Main>

    )
}

const mapStateToProps = (state) => ({
    errorResponse: state.notification,
    nationalDetails: state.nationalDetails,
});


export default connect(mapStateToProps)(InsightLocal);