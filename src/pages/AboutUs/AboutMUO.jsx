/**
 * Author: Alekya
 * Date: 30-MAR-2023
 */
import React, { useEffect,useState } from 'react';
import { MainContainer, BodyWrapper } from './AboutNSCPStyles';
import AboutCard from '../AboutUs/AboutCard'
import GenericCard from '../../components/CustomCards/GenericCard'


const AboutMUO = ({ t , data }) => {



 useEffect(() => {
   window.scrollTo({ top: 0, behavior: 'smooth' })
 }, []);
 return (
   <MainContainer>
       <BodyWrapper>

           {data.map((element, index) => (
             <AboutCard obj={element} dividerHidden={element.hideDivider} ></AboutCard>
           ))}


       </BodyWrapper>
   </MainContainer>

 )
}

export default AboutMUO