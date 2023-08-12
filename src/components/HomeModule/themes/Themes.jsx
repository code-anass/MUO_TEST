import React, { useEffect, useState } from "react";

import "./ThemesStyles.css";
import "./voyage_slider.css";

import {
  waitForImages,
  initCardEvents,
  initPager,
} from "./scripts/voyage_slider.js";

import { modulesData } from "../../../data/ModulesData";
import { Grid, Item } from "@mui/material";
import CardList from "./CardList";
import InfoList from "./InfoList";
import BgList from "./BgList";
import { connect } from "react-redux";
import { isDataAvailable } from "../../../utils/OperationUtils";
import { themesData } from "../../../data/ThemesData";
import { logInfo } from "../../../utils/QLogger";
import QText from "../../QText/QText";
import { useTranslation } from "react-i18next";

let cardsContainerEl;
let appBgContainerEl;

let cardInfosContainerEl;
let buttons = {
  prev: "",
  second: "",
};

const Themes = (state) => {

  const { t } = useTranslation();

  const [counter, setCounter] = useState(-1);
  const [themesContent, setThemesContent] = useState(themesData);

  useEffect(() => {
    // console.clear();
    if (counter <= 0) {
      setCounter((counter) => counter + 1);
    }

    if (counter === 1) {
      setCounter((counter) => counter + 1);
      initPager();

      initCardEvents();

      waitForImages();
    }
  }, [counter]);

  useEffect(() => {
    if (
      isDataAvailable(state.commonDetails) &&
      isDataAvailable(state.commonDetails.schema)
    ) {
      logInfo(state.commonDetails.schema, "Themes schema");
      setThemesContent(state.commonDetails.schema);
    }
  }, [state.commonDetails]);

  return (
    // <div >
    <section id="theme" className="themeSlider d-flex align-items-center">
      <div className="bg-full-wrap">
        <div className="containerTheme overlay">
          <p className="titleSection">
            {" "}
            <QText tx={"home.themes"} type="h1"></QText>
          </p>

          <div className="app">
            <CardList themesDataAPI={themesContent}></CardList>
            <InfoList themesDataAPI={themesContent} t={t}></InfoList>
            <BgList themesDataAPI={themesContent}></BgList>
         
          </div>
          <svg className="icons" style={{ display: "none" }}>
            <symbol
              id="arrow-left"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polyline
                points="328 112 184 256 328 400"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 48,
                }}
              />
            </symbol>
            <symbol
              id="arrow-right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polyline
                points="184 112 328 256 184 400"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 48,
                }}
              />
            </symbol>
          </svg>
        </div>
      </div>
    </section>

    // </div>
  );
};

const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  commonDetails: state.commonSchema,
});

export default connect(mapStateToProps)(Themes);
