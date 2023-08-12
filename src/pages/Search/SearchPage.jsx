/**
 * Author: Anitha Gorli
 * Date: 02-MAY-2023
 */
import React, { useEffect } from 'react';
import BackgroundImage from '../../components/Background/BackgroundImage'
import HeaderComp from '../../components/CustomCards/HeaderComp'
import BodyComp from '../../components/CustomCards/BodyComp'
import { BodyWrapper, MainContainer } from '../W3Content/W3CStyles'

import SearchBody from './SearchBody';
import { useLocation } from 'react-router-dom';



const SearchPage = (state, props) => {

  const t = state.t;

  const location = useLocation();

  const item = location.state?.data;

  const basePath = 'assets/images/settings/';

  const imageLocal = basePath + "w3c.jpg";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);

  return (
    <MainContainer>

      <BackgroundImage imageLocal={imageLocal} useLocal={true}>


        <BodyWrapper>
          {/* <HeaderComp headerTitle={"faq.title"}></HeaderComp> */}
          <BodyComp nopadding={true} t={t} bg="transparent">
           <SearchBody t= {t} searchKey={item}></SearchBody>
          </BodyComp>

        </BodyWrapper>

      </BackgroundImage>
    </MainContainer>

  )
}

export default SearchPage