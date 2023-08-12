import React from 'react'
import { Button } from 'react-scroll'
import CauroselComp from '../CauroselComp'
import { InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoSectionStyles'
import PartnerCard from '../CauroselComp/PartnerCard'
import Carousel from "react-elastic-carousel";
import ModuleSection from '../HomeModule/ModuleGrid'
import InsightsSection from '../HomeModule/InsightsGrid'
import HighLights from '../HomeModule/HighLights'

import ThemesSection from '../HomeModule/ThemesGrid'
import QText from '../QText/QText';
import SmartPartners from '../HomeModule/SmartPartners'
import StrategicPartners from '../HomeModule/StrategicPartners'
import Insights from '../HomeModule/Insights/Insights'
import Modules from '../HomeModule/modules/Modules'
import Themes from '../HomeModule/themes/Themes'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 6 },
];


const breakPointsStategic = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

const HomeContainer = ({ t }) => {
    return (

        <InfoContainer>
            <div className="cursor"></div>
            <div className="cursor2"></div>
            <InfoWrapper>

                <HighLights></HighLights>


                <TextWrapper>
                    <QText tx={'home.insights'} type='h1'></QText>
                    {/* <QText tx={'insights.sub_title'} type='h2'></QText> */}
                </TextWrapper>
                {/* <InsightsSection></InsightsSection> */}
                <Insights t={t}></Insights>

                {/* Id for Scroll Navigation  */}
                <TextWrapper id="homemodule" />
                <Modules />


                {/* 
                <TextWrapper>
                    <QText tx={'home.themes'} type='h1'></QText>
                </TextWrapper> */}
                {/* <ThemesSection></ThemesSection> */}
                <TextWrapper id="themeSection" />
                <Themes t={t}></Themes>



                {/* Id for Scroll Navigation  */}
                <TextWrapper id="homepartners" />
                <StrategicPartners />
                <SmartPartners />


            </InfoWrapper>

        </InfoContainer>
    )
}

export default HomeContainer