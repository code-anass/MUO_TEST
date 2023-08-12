/**
 * Author: Anitha Gorli
 * Date: 02-MAY-2023
 */
import React, { useEffect } from 'react';
import BackgroundImage from '../../components/Background/BackgroundImage'
import HeaderComp from '../../components/CustomCards/HeaderComp'
import BodyComp from '../../components/CustomCards/BodyComp'
import { BodyWrapper, MainContainer } from '../W3Content/W3CStyles'

import { faqData } from '../../data/FAQData'

import FAQCard from './FAQCard';


const FAQPage = ({ t }) => {
  const basePath = 'assets/images/settings/';

  const imageLocal = basePath + "contact_bg.jpg";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);

  return (
    <MainContainer>

      <BackgroundImage imageLocal={imageLocal} useLocal={true}>


        <BodyWrapper>
          <HeaderComp headerTitle={"faq.title"}></HeaderComp>
          <BodyComp t={t} bg="transparent">
            <div
              className="wow fadeInRight animated"
            >
              {faqData.map((el, index) =>
              (
                <FAQCard t={t} key={"faqCard" + index} content={el}></FAQCard>

              ))}

            </div>


          </BodyComp>

        </BodyWrapper>

      </BackgroundImage>
    </MainContainer>

  )
}

export default FAQPage