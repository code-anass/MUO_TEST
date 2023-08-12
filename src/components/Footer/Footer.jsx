import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material'
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterWrapper,

} from './FooterStyles';
import {  footerDataLinks, footerDataVisitor } from '../../data/FooterData';
import CRView from './CopyRight';
import { connect } from 'react-redux';
import { isDataAvailable } from '../../utils/OperationUtils'
import FooterSocial from '../Footer/FooterSocial'
import FooterLocation from '../Footer/FooterLocation'
import './footerNew.css'

import { footerResponse } from '../../data/FooterDefault'
import { ChevronRight } from 'bootstrap-icons-react';
import styled from 'styled-components';
import QText from '../QText/QText';
import { logInfo } from '../../utils/QLogger';
import { useTranslation } from 'react-i18next';

const RightIcon = styled(ChevronRight)`
  width: ${({ size }) => size || '14px'};
  height: ${({ size }) => size || '14px'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  color:  ${({ theme }) => theme.color.footerArrowColor};

`;


const Footer = (state, props) => {


	const basePath = 'assets/images/';

	const footerBgImage = basePath + "footer-bg.png";



	const [footerDetails, setFooterDetails] = useState( footerResponse )
	const [visitots, setVisitors] = useState( footerDataVisitor )

	const { t } = useTranslation();


	useEffect(() => {

		logInfo("Footer Resp, data outer", state.footerDetails) 

		// if (isDataAvailable(state.footerDetails) && isDataAvailable(state.footerDetails.content)) {
		// 	bindResponseToUI(state.footerDetails.content);
		// }

		if (isDataAvailable(state.footerDetails) ) {
			bindResponseToUI(state.footerDetails);
		}
	}, [state.footerDetails]);

	useEffect(() => {

		logInfo("visitorCount Resp, data outer", state.visitorCount) 

		// if (isDataAvailable(state.footerDetails) && isDataAvailable(state.footerDetails.content)) {
		// 	bindResponseToUI(state.footerDetails.content);
		// }

		if (isDataAvailable(state.visitorCount) ) {
			setVisitors(state.visitorCount)
			//
		}
	}, [state.visitorCount]);

	const bindResponseToUI = (data) => {
		try {
			logInfo("Footer Resp, data", data)

			setFooterDetails(data)
		} catch (error) {
			console.error(error);
		}
	};

	const divStyle = {
		background: `white url(${footerBgImage})  no-repeat right `	,
		// backgroundSize: '59%',
            // backgroundPositionY: 'top'	
	  };


	return (
		<div id="footer" className="footer">

			<div className="footer-top" style={divStyle} >
				<FooterWrapper>


					<Grid container direction="row"
						justifyContent="flex-start"
						alignItems="flex-start"
						spacing={4}>
						<Grid item xs={12} sm={12} md={4} lg={4} xl={4}  >
							<FooterLocation footerDetails={footerDetails}></FooterLocation>
						</Grid>

						<Grid item xs={6} sm={6} md={2} lg={2} xl={2} key={"LinkSectionsFooter"} >
								<FooterLinkItems key={"FooterLinksItem"}>
									<FooterLinkTitle>{t(footerDataLinks.title)}</FooterLinkTitle>
									{footerDataLinks.links.map((link, linkIndex) => (
										<div key={linkIndex+"InnerLink"}>

											<QText type="footer"  to={link.linkTo}>
												<RightIcon size={"15px"} />
												{t(link.title) + " " + (link.value ? ": "+link.value : " ")}
											</QText>

										</div>

									))}
								</FooterLinkItems>
							</Grid>


							<Grid item xs={6} sm={6} md={2} lg={2} xl={2} key={"VisitotsSections"} >
								<FooterLinkItems key={"VisitorFooter"}>
									<FooterLinkTitle>{t(visitots.title)}</FooterLinkTitle>
									{visitots.links.map((link, linkIndex) => (
										<div key={linkIndex+"InnerLink"}>

											<QText type="footer"  to={link.linkTo}>
												{/* <RightIcon size={"15px"} /> */}
												{t(link.title) + " " + (link.value ? ": "+link.value : ": 0")}
											</QText>

										</div>

									))}
								</FooterLinkItems>
							</Grid>

				

						<Grid item xs={12} sm={12} md={4} lg={4} xl={4}  >
							<FooterSocial t={props.t} footerDetails={footerDetails}></FooterSocial>
						</Grid>
					</Grid>

				</FooterWrapper>

			</div>
			<CRView t={props.t} onClick={() => { }}></CRView>

		</div>
	);
}



const mapStateToProps = (state) => ({
	errorResponse: state.notification,
	footerDetails: state.commonDetails.content,
	visitorCount: state.visitorCount
});

export default connect(mapStateToProps)(Footer);
