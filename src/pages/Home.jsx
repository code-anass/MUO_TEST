import React, { useState, useEffect } from "react";

import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSection";
import HomeContainer from "../components/HomeContainer/HomeContainer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar/Toolbar";
import SettingsSidebar from "../components/SettingsSidebar/SettingsSidebar";
import CommingSoon from "./CommingSoon/ComingSoon";
import W3CGuidelines from "./W3Content/W3CGuidelines";
import AboutUs from "./AboutUs/AboutUs";
import InsightNational from "./InsightNational/National";
import InsightState from "./InsightNational/State";
import InsightRegion from "./InsightNational/Regional";
import InsightLocal from "./InsightNational/Local";
import DisclaimerPage from "./DisclaimerPage";

import { Routes, Route, useLocation } from "react-router-dom";
import TermsPage from "./TermsPage";
import PrivacyPage from "./PrivacyPage";
import SecurityPage from "./SecurityPage";
import NewsPage from "./News/NewsPage";
import NewsDetails from "./News/NewsDetails";
import { initGA } from "../components/common/useGATrackerEvents";
import FAQPage from "./FAQ/FAQPage";
import ContactComponent from "./ContactUs/ContactUsForm";
import { logInfo } from "../utils/QLogger";
import SearchPage from "./Search/SearchPage";
import {
  PORTAL_BASE_LOCAL,
  PORTAL_URL_END,
  ROUTE_ABOUT_US,
  ROUTE_R_AND_D,
  ROUTE_STATE,
  ROUTE_REGION,
  ROUTE_LOCAL,
  ROUTE_COMMING_SOON,
  ROUTE_CONTACT,
  ROUTE_DISCLAIMER,
  ROUTE_FAQ,
  ROUTE_HOME,
  ROUTE_NATIONAL,
  ROUTE_NEW,
  ROUTE_NEW_DETAIL,
  ROUTE_PRIVACY,
  ROUTE_SEARCH,
  ROUTE_SECURITY,
  ROUTE_TERMS,
  ROUTE_W3C,
  ROUTE_THEMES,
  ROUTE_DASHBOARD,
  ACCESS_TOKEN_KEY,
} from "../utils/Constants";
import PageNotFound from "./PageNotFound/PageNotFound";
import DashboardPage from "../components/Dashboard/DashboardPage";
import IframeComponent from "../components/common/IframeComp";
import RandDPage from "./RandD/RandDPage";
import { getAnalyticsBody, isTimePassed } from "../utils/Fingerprint";
import { connect, useDispatch } from "react-redux";
import {
  fetchVisitorsDetails,
  logPageVisitor,
} from "../redux/actions/VisitorActions";
import { fetchLogin } from "../redux/actions/R_and_D_Actions";
import { isDataAvailable } from "../utils/OperationUtils";

export { default as CommingSoon } from "./CommingSoon/ComingSoon";

const Home = (state) => {
  const t = state.t;
  const handleClick = state.handleClick;

  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(-1);


  const isIframeRoute = location.pathname === ROUTE_THEMES;

  const toggle = () => {
    // setIsOpen(!isOpen);
  };
  const handleSettingsWindow = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  const openSettingsWindow = () => {
    setIsSettingsOpen(true);
  };
  const closeSettingsWindow = () => {
    setIsSettingsOpen(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Call your function here
      callPageView();
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const callPageView = async () => {
    dispatch(fetchVisitorsDetails());
    const isTime = await isTimePassed();
    if (isTime) {
      const dataObj = await getAnalyticsBody();
      logInfo("Analytics", dataObj);
      dispatch(logPageVisitor(dataObj));
    }
  };
  useEffect(() => {
    if (counter <= 0) {
      setCounter((counter) => counter + 1);
    }
    if (counter === 1) {
      setCounter((counter) => counter + 1);
      initLogin()


    }
  }, [counter]);


  useEffect(() => {
    logInfo(state.loginToken, "loginToken --- Home");
    
    if(isDataAvailable(state.loginToken)){
      callPageView();
    }
    
  }, [state.loginToken]);

  function initLogin(){

    const token = localStorage.getItem(ACCESS_TOKEN_KEY) ;
    logInfo(token, "-- Home -- InitLogin API 1");

    if (token) {
      logInfo(token, "--Token Available");
      callPageView();
    } else {
      dispatch(fetchLogin());
    }
  }


  
  return (
    <>
      {/* <Toolbar toggle={toggle} toggleTop={openSettingsWindow} handleClick={handleClick} lightMode={lightMode} setLightMode={setLightMode} /> */}

      <SettingsSidebar
        isSettingsOpen={isSettingsOpen}
        handleClick={handleClick}
        closeWindow={closeSettingsWindow}
      />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}

      <Navbar
        toggle={handleSettingsWindow}
        t={t}
        handleClick={handleSettingsWindow}
      />
      <div>
        <Routes>
          <Route
            path={`${PORTAL_URL_END}`}
            element={
              <div>
                <Hero t={t} />
                <HomeContainer t={t} />
              </div>
            }
          ></Route>
          <Route
            path={`${PORTAL_BASE_LOCAL}`}
            element={
              <div>
                <Hero t={t} />
                <HomeContainer t={t} />
              </div>
            }
          ></Route>
          <Route
            path={ROUTE_HOME}
            element={
              <div>
                <Hero t={t} />
                <HomeContainer t={t} />
              </div>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />} />

          <Route path={ROUTE_COMMING_SOON} element={<CommingSoon />} />
          <Route path={ROUTE_W3C} element={<W3CGuidelines t={t} />} />
          <Route path={ROUTE_ABOUT_US} element={<AboutUs />} />
          <Route path={ROUTE_R_AND_D} element={<RandDPage />} />
          <Route path={ROUTE_NATIONAL} element={<InsightNational />} />
          <Route path={ROUTE_STATE} element={<InsightState />} />
          <Route path={ROUTE_REGION} element={<InsightRegion />} />
          <Route path={ROUTE_LOCAL} element={<InsightLocal />} />
          <Route path={ROUTE_DISCLAIMER} element={<DisclaimerPage t={t} />} />
          <Route path={ROUTE_TERMS} element={<TermsPage t={t} />} />
          <Route path={ROUTE_PRIVACY} element={<PrivacyPage t={t} />} />
          <Route path={ROUTE_SECURITY} element={<SecurityPage t={t} />} />
          <Route path={ROUTE_NEW} element={<NewsPage t={t} />} />
          <Route path={ROUTE_NEW_DETAIL} element={<NewsDetails t={t} />} />
          <Route path={ROUTE_CONTACT} element={<ContactComponent t={t} />} />
          <Route path={ROUTE_FAQ} element={<FAQPage t={t} />} />
          <Route path={ROUTE_SEARCH} element={<SearchPage t={t} />} />

          <Route path={ROUTE_DASHBOARD} element={<DashboardPage t={t} />} />
          <Route path={ROUTE_THEMES} element={<IframeComponent t={t} />} />
        </Routes>
      </div>

      {!isIframeRoute && <Footer t={t} />}
      {/* <FooterNew/> */}
    </>
  );
};

// export default Home;

const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  loginToken: state.loginToken,
});

export default connect(mapStateToProps)(Home);
