/**
 * Author: Alekya
 * Date: 01-APR-2023
 */
import React, { useEffect } from 'react';
import AboutCard from './AboutCard';
import { MainContainer, BodyWrapper } from './AboutNSCPStyles';


const AboutNSCP = ({ t, data}) => {
    
 useEffect(() => {
   window.scrollTo({ top: 0, behavior: 'smooth' })
 }, []);
 return (
   <MainContainer>
       <BodyWrapper>

           {data.map((element, index) => (
             <AboutCard obj={element} dividerHidden={element.hideDivider} addstyles="styles" ></AboutCard>
           ))}


       </BodyWrapper>
   </MainContainer>
 )
}

export default AboutNSCP;