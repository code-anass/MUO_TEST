/**
 * Author: Anitha Gorli
 * Date: 24-MAR-2023
 */
 import React, { useEffect } from 'react';
 import BackgroundImage from '../components/Background/BackgroundImage'
import HeaderComp from '../components/CustomCards/HeaderComp'
import BodyComp from '../components/CustomCards/BodyComp'
import { BodyWrapper, MainContainer } from './W3Content/W3CStyles'

import GenericCard from '../components/CustomCards/GenericCard'
import { privacyContent } from '../data/PrivacyData'


const PrivacyPage = ({ t }) => {
  const basePath = 'assets/images/settings/';

  const imageLocal = basePath + "w3c.jpg";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);
  return (
    <MainContainer>

      <BackgroundImage imageLocal={imageLocal} useLocal={true}>


        <BodyWrapper>
          <HeaderComp headerTitle={"footerPrivacy.title"}></HeaderComp>
          <BodyComp t={t}>

            {privacyContent.map((element, index) => (
              <GenericCard obj={element} dividerHidden={element.hideDivider}></GenericCard>

            ))}

          </BodyComp>

        </BodyWrapper>

      </BackgroundImage>
    </MainContainer>

  )
}

export default PrivacyPage