import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column, Row } from '../GlobalStyles';


export const InsightWrapper = styled.div`
	margin-left: auto;
	height: 530px;
	margin-right: auto;
	display: flex;
	@media screen and (max-width: 768px) {
		height: 780px;

	}


`;




export const InsightGrid = styled.div`
display: flex;
width:100%;
height: 100%;
flex-direction:row;
background-color: #1d2958;

	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		flex-direction:column;

	}

`;

export const InsightLeft = styled(Column)`

padding-left:8rem;
padding-right: 2rem;
width: '40%';
height: auto;
flex: 1.5;
background-color: #1d2958;
padding-top: 5.5rem!important;
padding-bottom: 3rem!important;

	@media screen and (max-width: 768px) {
		align-items: start;
		grid-column: 1/-1;
		height:50%;
		width: '100%';

		flex: 1;

padding-left:0rem;
padding-right: 0rem;

	}
`;

export const InsightRight = styled(Column)`

height: 100%;
width: '70%';
flex: 3;


	@media screen and (max-width: 768px) {
		align-items: center;
		grid-column: 1/-1;
		flex: 1;
		height:50%;
		width: '100%';



	}
`;




export const Image = styled.img`
	max-width: 100%;
	height: 100%;
	object-fit: cover;
	// opacity: 0.3;
	filter: brightness(50%);

`;

export const ImageHighlight = styled.img`
	max-width: 100%;
	height: 100%;
	/* flex-basis:max-content; */
	/* object-fit: cover; */
	// opacity: 0.3;
	filter: brightness(50%);

`;


export const Title = styled.div`
	color: white;
	margin: 0.4rem 0.4rem 0.4rem;
	max-width: 20rem;
	font-weight: 500;
	line-height: 1.2;
	text-align: left;
	text-transform: uppercase;
	font-family: ${({ theme }) => theme.fontName.Def_Font};

	font-size: ${({ theme }) => theme.fontSize.extraLarge}px;

	@media screen and (max-width: 768px) {
		text-align: left;
		margin-left: 5rem;
	}
`;

export const Description = styled.div`
	color: white;
	margin: 0.4rem 0.4rem 0.4rem;
	font-weight: 500;
	font-size: ${({ theme }) => theme.fontSize.medium}px;
	font-family: ${({ theme }) => theme.fontName.Def_Font};
	line-height: 1.5;
	text-align: left;
	text-overflow: ellipsis;
	overflow: hidden;



	@media screen and (max-width: 768px) {
		margin-left: 5rem;
		text-align: left;
		-webkit-line-clamp: 4;
        -moz-line-clamp: 4;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;


	}
`;


export const Button = styled.div`
	background-color: red;
	position: relative;
	font-size: 14px;
	padding: 12px 20px;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 400;
	color: #fff;
	text-transform: uppercase;
	transition: all 0.2s linear;
	display: inline-box;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	margin-top: 1.5rem;
	text-align: left;

	max-width: 20rem;

	font-family: ${({ theme }) => theme.fontName.Def_Font};
&:hover{
	color: #fff;
	background: #078761;
	box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);
	transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-webkit-transition: all .2s ease-in-out;
}

@media screen and (max-width: 768px) {
	margin-left: 5rem;
	text-align: left;
	margin-right: 1rem;
}


  `



