import React from 'react';
import {

	FooterLogo,
	SocialIcon,
	FooterSocialIcon,
	FooterLinkItems,
	FooterFollow

} from './FooterStyles';
import { footerSocialData } from '../../data/FooterData';
import { Row } from '../GlobalStyles';

import './Footer.css'
import { LineDivider } from '../../pages/W3Content/W3CStyles';
import { useTranslation } from 'react-i18next';
import './footerNew.css'



const FooterSocial = (props) => {

	let { footerDetails } = props

	let { t } = useTranslation();

	const redirectPage = (link) => {
		window.open(link, '_blank');
	}



	return (
		<div>
			<div
				className="wow fadeInUp animated"
				data-wow-delay="0.8s"
				style={{
					visibility: "visible",
					WebkitAnimationDelay: "0.8s",
					MozAnimationDelay: "0.8s",
					animationDelay: "0.8s",
					width: "100%"
				}}
			>
				<div className="widget">
					<ul className="footer-social">
						<FooterLogo >
							<SocialIcon onClick={() => { redirectPage(footerDetails.playstore_link) }} style={{ width: "120px" }} src="assets/images/mobile/google_play.png" />
							<SocialIcon onClick={() => { redirectPage(footerDetails.appstore_link) }} style={{ width: "100px" }} src="assets/images/mobile/apple_store.png" />
						</FooterLogo>


					</ul>
				</div>
				<div className="widget">
					<FooterFollow className="widget-title">{t("footer.followUs")}</FooterFollow>
					<ul className="footer-social">
						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index + social.tag}
									href={footerDetails[social.tag]}
									target="_blank"
									aria-label={social.name}
								>
									{social.iconS}
									
								</FooterSocialIcon>
							))}
						</Row>


					</ul>
					<LineDivider />
					<FooterFollow className="widget-notes">
						{t('footer.notes')}
					</FooterFollow>
				</div>

			</div>



		</div>
	);
}




export default FooterSocial;
