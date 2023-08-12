/**
 * Author: Anitha Gorli
 * Date: 24-MAR-2023
 */
import React, { useEffect, useState } from 'react';
import BackgroundImage from '../../components/Background/BackgroundImage'
import HeaderComp from '../../components/CustomCards/HeaderComp'
import BodyComp from '../../components/CustomCards/BodyComp'
import { BodyWrapper, MainContainer } from '../W3Content/W3CStyles'


import { termsContent } from '../../data/TermsData'
// import './RootStyles.css'

import HeaderWithBg from '../../components/Background/HeaderWithBg';
import QText from '../../components/QText/QText';
import { useLocation, useNavigate } from 'react-router-dom';
import { parseDate } from '../../utils/DateAndTimeUtils';
import { ButtonOptionNews } from './NewsCardStyles';
import { ROUTE_NEW, ROUTE_NEW_DETAIL } from '../../utils/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import LanguageChecker from '../../utils/LanguageChecker';

 const FontAwasome = styled(FontAwesomeIcon)`

  margin-left: 10px;
  padding-right: 10px ;
`;


const Button = styled.button`
/* float: left; */
  margin-top: 10px;
  font-weight: bolder;
  background-color: ${({ theme }) => theme.color.buttonBG} !important;
  /* float: right; */
  color: ${({ theme }) => theme.color.searchwhite}; // rgb(255, 255, 255);
  text-transform: uppercase;
  box-sizing: border-box;
  margin-left: 10px;
    border-radius: 5px;
    padding: 8px 15px;
    padding-right: 27px ;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.color.buttonBGHover} !important;
    color: white;
  }
  @media (max-width:500px){
    float: none;
  }
`;


const NewsDetails = (state, props) => {

  const location = useLocation();

  const item = location.state.data;
  
  const { t } = useTranslation();

  const isEnglish = LanguageChecker();

  if (isEnglish) {
  }
  else {
    item.desc_1 = item.desc_my;
    item.desc_2 = item.desc_2_my;
    item.desc_3 = item.desc_3_my;
    item.title = item.title_my;
  }


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);

  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`${ROUTE_NEW}`);
    // navigate(`${ROUTE_NEW_DETAIL}?id=${id}`, {state: {data: obj.data}});
  };
  

  return (
    <MainContainer>
      <HeaderWithBg title={item.title} image={item.image}></HeaderWithBg>


      <Button onClick={handleItemClick}><FontAwasome icon={faArrowLeftLong} size="xl" onClick={handleItemClick} />{t("dashboard.News")}</Button>
      
      <BodyWrapper>
      
        <BodyComp nopadding={false}  >

          <div
            className="row justify-content-md-center"
            style={{ marginTop: 50, marginBottom: 50 }}
          >
            <div className="col-sm-8">
              <article className="story">
              
                {item.desc_1 &&
                  <QText type="html" tx={item.desc_1}>
                  </QText>
                }
                 {item.desc_2 &&
                  <QText type="html" tx={item.desc_2}>
                  </QText>
                }
                 {item.desc_3 &&
                  <QText type="html" tx={item.desc_3}>
                  </QText>
                }
                {item.source && (

                  <QText type="html"  tx={"Source: "+item.source}>
                  </QText>
                )
                }
              
              </article>

              <QText style={{
                textAlign: "right",
                color: "grey",
                fontSize: "100%",
                lineHeight: 1
              }}>
                Disiarkan oleh : {item.posted_by} <br /> {parseDate(item.posted_on)}
              </QText>
            </div>

          </div>

        </BodyComp>

      </BodyWrapper>


    </MainContainer>


  )
}

export default NewsDetails
