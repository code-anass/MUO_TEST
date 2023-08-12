/**
 * Author: Amit
 * Date: 27-APR-2023
 */
import React, { useState, useEffect } from 'react';
import {  Body,  LeftContainer,  LeftContainerWrapper, LeftDiv } from './ContactComponentStyle';

import BackgroundImage from '../../components/Background/BackgroundImage'
import { MainContainer } from '../W3Content/W3CStyles'
import {  connect } from 'react-redux';
import { isDataAvailable } from '../../utils/OperationUtils'
import { useTranslation } from 'react-i18next';
import ContactUsLeft from './ContactUsLeft';
import ContactUsRight from './ContactUsRight';
import { Grid } from '@mui/material';
import { footerResponse } from '../../data/FooterDefault'


const ContactComponent = (state) => {


  const basePath = 'assets/images/settings/';

  const { t } = useTranslation();

  const imageLocal = basePath + "contact_bg.jpg";



  const [footerDetails, setFooterDetails] = useState({ footerResponse })


	useEffect(() => {

		if (isDataAvailable(state.footerDetails)) {
			bindResponseToUI(state.footerDetails);
		}
	}, [state.footerDetails]);

	const bindResponseToUI = (data) => {
		try {

			setFooterDetails(data)
		} catch (error) {
			console.error(error);
		}
	};

 

  return (

    <MainContainer>


      <BackgroundImage imageLocal={imageLocal}>
        <Body>
          <LeftContainerWrapper >
            <LeftContainer >
              <LeftDiv >
                <Grid container direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
                  >
                    <ContactUsLeft contactUsDetails={state.contactUsDetails}></ContactUsLeft>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
                  >

                    <ContactUsRight footerDetails={footerDetails}></ContactUsRight>
                  </Grid>
                </Grid>
              </LeftDiv>
            </LeftContainer>
          </LeftContainerWrapper>
        </Body>


      </BackgroundImage>
    </MainContainer>
  )
}





const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  contactUsDetails: state.contactUsDetails,
  footerDetails: state.commonDetails.content,

});

export default connect(mapStateToProps)(ContactComponent);











