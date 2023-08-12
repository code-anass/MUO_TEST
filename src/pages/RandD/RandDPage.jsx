/**
 * Author: Anitha Gorli
 * Date: 11-JUN-2023
 */
import React, { useEffect } from 'react';
import BackgroundImage from '../../components/Background/BackgroundImage'
import HeaderComp from '../../components/CustomCards/HeaderComp'
import BodyComp from '../../components/CustomCards/BodyComp'
import { BodyWrapper, MainContainer } from '../W3Content/W3CStyles'

import RandDBody from './RandDBody';



const RandDPage = (state, props) => {

  const t = state.t;

  const basePath = 'assets/images/settings/';

  const imageLocal = basePath + "w3c.jpg";
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);

  return (
    <MainContainer>

      <BackgroundImage imageLocal={imageLocal} useLocal={true}>


        <BodyWrapper>
          <HeaderComp headerTitle={"rAndD.title"}></HeaderComp>
          <BodyComp  t={t} bg="transparent">
           <RandDBody t= {t} ></RandDBody>

         

          </BodyComp>

        </BodyWrapper>

      </BackgroundImage>
    </MainContainer>

  )
}

export default RandDPage