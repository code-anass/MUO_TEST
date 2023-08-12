/**
 * Author: Anitha Gorli
 * Date: 20-MAR-2023
 */
 import React, { useEffect } from 'react';
 import './W3CStyles.css'
import BackgroundImage from '../../components/Background/BackgroundImage'
import HeaderComp from '../../components/CustomCards/HeaderComp'
import BodyComp from '../../components/CustomCards/BodyComp'
import { BodyWrapper, MainContainer } from './W3CStyles'

import SectionTop from './SectionTop'
import GenericCard from '../../components/CustomCards/GenericCard'
import { sectionAContent, sectionBContent, sectionCContent, sectionDContent, sectionEContent } from '../../data/W3CData'


const W3CGuidelines = ({ t }) => {
  const basePath = 'assets/images/settings/';

  const imageLocal = basePath + "w3c.jpg";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);

  return (
    <MainContainer>

      <BackgroundImage imageLocal={imageLocal} useLocal={true}>


        <BodyWrapper>
          <HeaderComp headerTitle={"w3c.title"}></HeaderComp>
          <BodyComp t={t}>

            <SectionTop t={t}></SectionTop>
            <GenericCard obj={sectionAContent}></GenericCard>
            <GenericCard obj={sectionBContent}></GenericCard>
            <GenericCard obj={sectionCContent}></GenericCard>
            <GenericCard obj={sectionDContent}></GenericCard>
            <GenericCard obj={sectionEContent} dividerHidden={true}></GenericCard>

          </BodyComp>

        </BodyWrapper>

      </BackgroundImage>
    </MainContainer>

  )
}

export default W3CGuidelines