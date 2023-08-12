/**
 * Author: Anitha Gorli
 * Date: 24-MAR-2023
 */
import React, { useEffect, useState } from "react";
import BackgroundImage from "../../components/Background/BackgroundImage";
import HeaderComp from "../../components/CustomCards/HeaderComp";
import BodyComp from "../../components/CustomCards/BodyComp";
import { BodyWrapper, MainContainer } from "../../pages/W3Content/W3CStyles";


import NewsCard from "./NewsCard";
import { Grid } from "@mui/material";
import NewsPaginator from "./NewsPaginator";
import NewsFilter from "./NewsFilter";
import { useDispatch, connect } from "react-redux";
import { filterNews, isDataAvailable } from "../../utils/OperationUtils";
import { fetchNewsDetails } from "../../redux/actions/NewsActions";
import { logInfo } from "../../utils/QLogger";
import { NEWS_PAGE } from "../../utils/Constants";
import Pagination from "../../components/Pagination/Pagination";
import NoDataComponent from "../../components/common/NoDataComponent";
import { ButtonOption } from "../Search/SearchStyle";
import { ButtonOptionNews } from "./NewsCardStyles";

const NewsPage = (state) => {
  const basePath = "assets/images/settings/";

  const imageLocal = basePath + "w3c.jpg";
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(-1);
  const [latestNews, setLatestNews] = useState([]);
  const [filterYear, filterSelectedYear] = useState("2023");
  const [pageData, setPageData] = useState([]);
  const [pagenumber, setPagenumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [filteredData, setFilteredData] = useState([]);


  const perpage = NEWS_PAGE;
  const pageclick = pagenumber * perpage;

  const changePage = ({ selected }) => {
    setPagenumber(selected);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isDataAvailable(state.news)) {
      // bindResponseToUI(state.news);
      setLatestNews(state.news);
      bindDataToUI(state.news, filterYear)
      logInfo(state.news, "News Page response-------\n");
    }
  }, [state.news]);

  function bindDataToUI(newsResponse, year) {
    logInfo(newsResponse, filterYear, "News Page response and Filter-------\n");

    const filteredDataFromLocal  = filterNews(year, newsResponse)
    logInfo("Filter News", filteredDataFromLocal)
    setFilteredData(filteredDataFromLocal)
    setPageData(filteredDataFromLocal.slice(0, filteredDataFromLocal.length));
    setPageCount(Math.ceil(filteredDataFromLocal.length / perpage));
  }

  useEffect(() => {
    if (counter <= 0) {
      setCounter((counter) => counter + 1);
    }
    if (counter === 1) {
      setCounter((counter) => counter + 1);
      dispatch(fetchNewsDetails());
    }
  }, [counter]);

 

  function onFilterSelected(item) {
    logInfo("Selected Year ----- ", item);
    filterSelectedYear(item);
    bindDataToUI(latestNews, item);
  }

  return (
    <MainContainer>
      <BackgroundImage imageLocal={imageLocal} useLocal={true}>
        <BodyWrapper>
          <HeaderComp headerTitle={"news.title"}></HeaderComp>
          
          <BodyComp nopadding={true}>

         
            <NewsFilter t={state.t} onFilterSelected={onFilterSelected}></NewsFilter>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{ backgroundColor: "white", width: "100%" }}
              spacing={0.5}
            >
              {pageData
                ?.slice(pageclick, pageclick + perpage)
                .map((element, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={2}
                    xl={2}
                    style={{ backgroundColor: "white" }}
                  >
                    <NewsCard
                      obj={element}
                      dividerHidden={element.hideDivider}
                    ></NewsCard>
                  </Grid>
                ))}
            </Grid>
            {!pageData ||
            (pageData.length <= 0 && (
              <NoDataComponent>{state.t("insightsDetatil.nodata")}</NoDataComponent>

            ))}

            <NewsPaginator></NewsPaginator>
            <Pagination countpage={pageCount} changePage={changePage} />
          </BodyComp>
        </BodyWrapper>
      </BackgroundImage>
    </MainContainer>
  );
};


const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  news: state.news,
});

export default connect(mapStateToProps)(NewsPage);
