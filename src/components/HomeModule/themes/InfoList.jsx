import React, { useState } from "react";

import "./ThemesStyles.css";
import "./voyage_slider.css";
// import VoyageSlider from 'react-voyage-slider';

import { themesData } from "../../../data/ThemesData";
import QButton from "../../common/QButton";
import QText from "../../QText/QText";
import LanguageChecker from "../../../utils/LanguageChecker";
import { useNavigate } from "react-router-dom";
import { ROUTE_THEMES } from "../../../utils/Constants";
import { logInfo } from "../../../utils/QLogger";

const InfoList = ({ t, themesDataAPI }) => {
  const isEnglish = LanguageChecker();

  let keyName = isEnglish ? "" : "My";
  logInfo(themesDataAPI, "Theme Inner");

  const classStyleNA = [
    "info first--info ",
    "info second--info ",
    "info third--info ",
    "info fourth--info ",
    "info fifth--info ",
  ];

  let navigate = useNavigate();

  const navigateThemes = (id, obj) => {
    const dataObj = {
      state: {
        data: {
          nav: obj[`navigationLink${keyName}`],
          title: obj[`title${keyName}`],
        },
      },
    };

    navigate(`${ROUTE_THEMES}?theme=${id}`, dataObj);
  };

  return (
    <div className="infoList">
      <div className="info__wrapper" style={{ zIndex: 1000 }}>
        {themesDataAPI.map((el, index) => (
          <div
            className={classStyleNA[index]}
            key={"themes_item_info" + index}
            style={{ marginLeft: 30, marginTop: 100 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <h4
                className="text location"
                style={{
                  textAlign: "center",
                }}
              >
                {el[`title${keyName}`]}
              </h4> */}
              <QText
              type="h1_inverse"
              className="text location"
              style={{ textAlign: "center" }}
            >
              {el[`title${keyName}`]}
            </QText>
            </div>
          
            <QText
              type="themes"
              className="text description"
              style={{ textAlign: "center" }}
            >
              {el[`desc${keyName}`]}
            </QText>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <QButton
                text={el[`buttonTitle${keyName}`]}
                onClick={() => {
                  navigateThemes(index + 1, el);
                }}
              ></QButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoList;
