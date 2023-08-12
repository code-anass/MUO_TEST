// import React from 'react'
import * as React from "react";

import "./InsightStyles.css";
// import GridItem from './GridItem'
// import GridRecord from './GridRecord'

import { insightsData } from "../../../data/InsightsData";
import { Grid, Item } from "@mui/material";
import QButton from "../../common/QButton";
import QText from "../../QText/QText";
import styled from "styled-components";

const InsightImage = styled.img`
backgroundPosition: center;
backgroundSize: 100% 100%;
height: 70vh;
border-radius: 0px;
transition: 0.2s;
position: relative;
background-size: cover;
width: 100%;
background-repeat: no-repeat;
background-position: center center;
transform: scale(1.5); 
@media screen and (max-width: 900px) {
  height: 54vh;
}

`;

const Insights = ({ t }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={0}
    >
      {insightsData.map((el, index) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          key={index + "InsightsItem"}
        >
          <div className="col-lg-3 p-0" data-aos="fade-up" data-aos-delay={200}>
            {/* <div class="column"> */}
            <div className="card">
              <div className="content">
                <div className="front">
                  <InsightImage
                    // className="profile"
                    style={{
                      backgroundImage: `url(${el.imageLocal})`,
                    }}
                    alt=""
                  />
                </div>
                <div className="back from-bottom">
                  {/* <h2 className="white"> {t(el.title)}</h2> */}
                  <QText type={'head2'} style={{margin:"0rem"}}>{t(el.title)}</QText>

                  <br />
                  {/* <p className="des">{t(el.desc)} </p> */}
                  <QText type={'content_white'} style={{marginBottom:"3rem"}}>{t(el.desc)}</QText>

                  <QButton
                    refLink={el.nav}
                    text={t("generic.moreDetails")}
                    onClick={() => {}}
                  ></QButton>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Insights;
