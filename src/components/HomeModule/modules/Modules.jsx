import React, { useEffect, useState } from "react";

import "./ModulesStyles.css";
import styled from 'styled-components';


import { modulesData } from "../../../data/ModulesData";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import { footerResponse } from "../../../data/FooterDefault";
import { isDataAvailable } from "../../../utils/OperationUtils";
import { useTranslation } from "react-i18next";
import { logInfo } from "../../../utils/QLogger";
import QText from "../../QText/QText";
import { TextWrapper } from "../../QText/QTextStyle";
import QButton from "../../common/QButton";
import { ArrowRight } from 'bootstrap-icons-react';

const classStyle = [
  "gridy-2 gridyhe-1 wow fadeInLeft animated",
  "gridy-1 gridyhe-1 wow fadeInRight animated",
  "gridy-1 gridyhe-1 wow fadeInLeft animated",
  "gridy-2 gridyhe-1 wow fadeInRight animated",
  "gridy-1 gridyhe-1 wow fadeInLeft animated",
  "gridy-1 gridyhe-1 wow fadeInUp animated",
  "gridy-1 gridyhe-1 wow fadeInRight animated",
  "gridy-3 gridyhe-1 wow fadeInUp animated",
];

const classStyleNA = [
  "gridy-2 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-2 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-3 gridyhe-1 wow ",
];



const RightArrow = styled(ArrowRight)`
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '18px'};
  margin: ${({ margin }) => margin || '2px'};
  padding: ${({ padding }) => padding || '0'};
`;


export const Modules = (state, props) => {
  const { t } = useTranslation();

  const [footerDetails, setFooterDetails] = useState({ footerResponse });

  useEffect(() => {
    if (isDataAvailable(state.footerDetails)) {
      bindResponseToUI(state.footerDetails);
    }
  }, [state.footerDetails]);

  const bindResponseToUI = (data) => {
    try {
      setFooterDetails(data);
      logInfo(data, "Response---footerDetails in Modules");
    } catch (error) {
      logInfo(error);
    }
  };

  return (
    <div
      style={{
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* {modulesData.map((el, index) => (
        <GridRecord key={index+"Modules"} pos={index} data={el} class={ classStyleNA[index]} classA={ classStyle[index]} useLocal ={true}> 

          <GridItem key={index + "Modules inner"} data={el} btnTitle={"GO"}>

          </GridItem>

        </GridRecord>
      ))} */}

      <div
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextWrapper>
          <QText tx={"home.modules"} type="h1"></QText>
        </TextWrapper>

        <Grid
          container
          direction="row"
          // justifyContent="center"
          justifyContent="space-evenly"
          alignItems="center"
          alignContent="center"
          alignSelf="center"
          style={{
            maxWidth: "1320px",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          rowSpacing={0}
        >
          {modulesData.map((el, index) => (
            <Grid
              item
              style={{
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
              xs={12}
              sm={12}
              md={6}
              lg={3}
              xl={3}
              key={"ModulesInnerItem" + index}
            >
              <div data-aos="fade-up" data-aos-delay={200}>
                <div className="flips">
                  <div className="front">
                    <div className="m-icon" style={{ height: "35%" }}>
                      <i>
                        <img
                          src={el.imageLocal}
                          style={{
                            width: 90,
                            paddingBottom: 20,
                            paddingTop: 5,
                          }}
                          alt=""
                        />
                      </i>
                    </div>
                    <div style={{ height: "45%", display:"flex", flexWrap: "wrap", alignContent: "center", justifyContent: "center" }}>
                      <QText type={"head3"} style={{ margin: "0rem" }}>
                        {t(el.title)}
                      </QText>
                    </div>
                    <div style={{ height: "10%" }}>
                      <a
                        href="#"
                        className="read-mores"
                        style={{ marginLeft: "25%", textDecoration: "none" }}
                      >
                        <span>{t("generic.moreDetails")}</span>{" "}
                        <RightArrow></RightArrow>
                        {/* <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <QButton
                            style={{ backgroundolor: "white" }}
                            text={t("generic.moreDetails")}
                          ></QButton>
                        </div> */}
                      </a>
                    </div>
                  </div>
                  <div className="back">
                    <div className="b-top">
                      <p>{t(el.desc)}</p>
                    </div>
                    <div className="b-bottom">
                      <a
                        href={footerDetails[`modules_option_${index + 1}`]}
                        target="_blank"
                        className="m-button"
                        style={{ marginLeft: "25%", textDecoration: "none" }}
                      >
                        {t("generic.exploreMore")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  footerDetails: state.commonDetails.content,
});

export default connect(mapStateToProps)(Modules);
