import React from 'react'
import { Container, LeftCont, RightCont, TitleButton, RightContainer, MainContainer, BodyWrapper, SpanL } from '../AboutUs/AboutUsStyles'
import { useState, useEffect, useRef } from 'react';
import BackgroundImage from '../../components/Background/BackgroundImage';
import HeaderComp from '../../components/CustomCards/HeaderComp';
import { MdArrowForwardIos } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import AboutMUO from './AboutMUO';
import AboutNSCP from './AboutNSCP';
import { isDataAvailable } from '../../utils/OperationUtils'
import { Grid } from '@mui/material'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchABOUTUSDetails } from '../../redux/actions/AboutUsActions';
import LanguageChecker from '../../utils/LanguageChecker';
import { AboutMUOData } from '../AboutUs/AboutMUOData';
import { AboutNSCPData } from './AboutNSCPData';
import { logInfo } from '../../utils/QLogger';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ChevronRight } from 'bootstrap-icons-react';




const RightIcon = styled(ChevronRight)`
  width: ${({ size }) => size || '18px'};
  height: ${({ size }) => size || '18px'};
  margin-top: ${({ margin }) => margin || '0.4rem'};
  padding: ${({ padding }) => padding || '0'};
`;



const AboutUs = (state,) => {

    const dispatch = useDispatch();
    const isEnglish = LanguageChecker();
    const [aboutmuo, setaboutmuo] = useState(AboutMUOData)
    const [aboutnscp, setaboutnscp] = useState(AboutNSCPData)
    const [counter, setCounter] = useState(-1);
    const buttonRef = useRef(null);

    useEffect(() => {

        buttonRef.current.focus();

        if (isDataAvailable(state.aboutus)) {
            bindResponseToUI(state.aboutus);
            logInfo(state.aboutus, "Aboutus Page");
        }
        else {
            setaboutmuo(AboutMUOData);
            setaboutnscp(AboutNSCPData);
        }
    }, [state.aboutus]);

    useEffect(() => {
        if (counter <= 0) {
            setCounter(counter => counter + 1);
        }
        if (counter === 1) {
            setCounter(counter => counter + 1);
            dispatch(fetchABOUTUSDetails());
        }

    }, [counter]);

    const bindResponseToUI = (data) => {
        if (isEnglish) {
            setaboutmuo(data.aboutmuo);
            setaboutnscp(data.aboutnscp);
        }
        else {
            setaboutmuo(data.aboutmuo_my);
            setaboutnscp(data.aboutnscp_my);
        }
    }

    const [isSelected, setSelected] = useState(1);
    const basePath = 'assets/images/settings/';
    const imageLocal = basePath + "w3c.jpg";
    const { t } = useTranslation();

    function SelectedButton(select) {
        logInfo(select, "Tag");
        setSelected(select)
    }

    return (
        <MainContainer>
            <BackgroundImage imageLocal={imageLocal} useLocal={true}>
                <BodyWrapper>
                    <HeaderComp headerTitle={"aboutus.aboutmuo"}></HeaderComp>
                    <Container>
                        <Grid container direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}>
                            <Grid item xs={12} sm={12} md={2} lg={3} xl={3}>
                                <LeftCont>
                                    <TitleButton className='btn' ref={buttonRef} onClick={() => SelectedButton(1)}><RightIcon /><SpanL>{t("aboutus.aboutmuo")}</SpanL> </TitleButton>
                                    <TitleButton className='btn' onClick={() => SelectedButton(2)}><RightIcon /> <SpanL>{t("aboutus.aboutnscp")}</SpanL></TitleButton>
                                </LeftCont>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10} lg={9} xl={9}>
                                <RightCont>
                                    {isSelected === 1
                                        ? (<RightContainer><AboutMUO t={t} data={aboutmuo} /></RightContainer>)
                                        : (<RightContainer><AboutNSCP t={t} data={aboutnscp}></AboutNSCP></RightContainer>)}
                                </RightCont>
                            </Grid>
                        </Grid>
                    </Container>
                </BodyWrapper>
            </BackgroundImage>
        </MainContainer>
    )
}

const mapStateToProps = (state) => ({
    errorResponse: state.notification,
    aboutus: state.aboutus,
});

export default connect(mapStateToProps)(AboutUs);