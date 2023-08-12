import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column, Row } from '../GlobalStyles';

export const FooterContainer = styled.div`
	// background-color: #101522;
	padding: 4rem 0 2rem 0;
`;

export const FooterWrapper = styled.div`
	max-width: 90%;
	padding-top: 30px;
    min-height: 360px;

	padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
	
	// @media screen and (min-width: 576px) {
	// 	max-width: 540px;
	// }
	// @media screen and (min-width: 768px) {
	// 	max-width: 720px;
	// }
	
`;

export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
	padding: 24px;
	color: #fff;
`;

export const FooterSubHeading = styled.p`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	@media screen and (max-width: 820px) {
		> div {
			width: 20%;
		}

		> div:first-child {
			width: 100%;
		}
	}

	@media screen and (max-width: 420px) {
		flex-direction: column;
		align-items: center;

		* {
			width: 100%;
			text-align: center;
		}
	}
`;

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	// justify-content: center;
	// align-items: center;
`;

export const FooterColumn = styled(Column)`
align-items: left;
 margin-left: 16px;


	@media screen and (max-width: 999px) {
		// align-items: center;
		grid-column: 1/-1;
	}
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 18px;
`;

export const FooterLinksContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	margin: 16px;
	text-align: left;
	box-sizing: border-box;
	color: #fff;
	font-family: ${({ theme }) => theme.fontName.Def_Font};
	font-size: ${({ theme }) => theme.fontSize.medium}px;


`;

export const FooterFollow = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
	text-align: left;
	box-sizing: border-box;
	color: #444444;
	font-family: ${({ theme }) => theme.fontName.Def_Font};
	font-size: ${({ theme }) => theme.fontSize.medium}px;
	@media only screen and (min-width: 900px) {
		max-width: 300px;
	}


`;

export const FooterLinkTitle = styled.h3`
	margin-bottom: 16px;
	color: ${({ theme }) => theme.color.homeHeaders};
	font-weight: 700;
	font-family: ${({ theme }) => theme.fontName.Def_Font};
    font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
	
`;

export const FooterLink = styled(Link)`
	color: #444444;
	text-decoration: none;
	margin-bottom: 0.5rem;
	
	&:hover {
		color: #0467fb;
		transition: 0.3s ease-out;
	}
`;

export const FooterLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.8rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;


export const FooterLogoHQ = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.8rem;
	display: flex;
	align-items: start;
	margin: 10px 10px 0px 0px;
	max-width: 100%;
    height: auto;
`;

export const SocialIcon = styled.img`
	margin-right: 1rem;
	margin-bottom: 0.5rem;

	width: 90px;
	// padding-right: 20px;
	@media only screen and (max-width: 800px) {
		width: 90%;
	}
`;

export const FooterSocialIcon = styled.a`
	color: rgba(1, 41, 112, 0.5);
	font-size: 24px;
`;

export const FooterAddress = styled.div`
	color: #444444;
	// margin: 0.4rem auto 0.4rem;
	margin-top: -0.4rem;
	max-width: 18rem;
	font-weight: 500;
	font-size: ${({ theme }) => theme.fontSize.body}px;
	line-height: 1.5;
	align-items: left;
	justify-content: left;
	font-family: ${({ theme }) => theme.fontName.Def_Font};

	@media only screen and (min-width: 800px) {
		margin-left: 0.4rem;
	}


`;

export const FooterMail = styled.div`
	color: #999;
	max-width: 20rem;
	text-align: left;
	font-family: ${({ theme }) => theme.fontName.Def_Font};
	font-size: ${({ theme }) => theme.fontSize.small}px;
	@media only screen and (min-width: 800px) {
		margin-left: 0.4rem;
	}

`;
