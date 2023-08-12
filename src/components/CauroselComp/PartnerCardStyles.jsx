import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column, Row } from '../GlobalStyles';

export const FooterContainer = styled.div`
	background-color: #101522;
	padding: 4rem 0 2rem 0;
`;

export const Partnerrapper = styled.div`

	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	// width: 100%;
	color: transparent;
    text-align: center;
    border-radius: 4px;
    padding: 2rem;
    margin-bottom: 3rem;
    // margin-left: 6rem;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
	cursor: pointer;
    opacity: 0.5;


	&:hover {
		opacity: 1;

		// border-color: #1d2958;
		// background: #fff;
		// box-shadow: 0px 10px 20px rgb(0 0 0 / 20%);
	}

`;




export const ImageContainer = styled(Column)`
background-color: transparent;
justify-content: center;
align-items: center;
height: 100px;
width:80%;
position: relative;

vertical-align :'middle';
'box-sizing': 'border-box';


	@media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;

export const Image = styled.img`
	// max-width: 100%;
	// height: 100%;
	// object-fit: scale-down;
	width: 90%;
    aspect-ratio: 2/1;
    object-fit: contain;

`;



export const TootTipContainer = styled.p`
    box-sizing: border-box;
	background-color: #D6D6D6;
	width: auto;
	position: absolute;
	margin-left:10rem;
	overflow: hidden;
	white-space: nowrap;
	display: block;
	padding: 0.5rem;
	border-radius:2px;

	color: #111;
		visibility: visible;  /* Or display: none, depending on how you want it to behave */

	&:hover {
		visibility: visible;  /* Or display: block */
	}
`;

export const TootTipContainerMain = styled.div`
	position: relative;
	display: inline-block;
	border-bottom: 1px dotted black;
	&:hover {
		visibility: visible;  /* Or display: block */
	}
  }`;
  
  export const TootTipContainerText = styled.div`
	visibility: hidden;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px 0;
  
	/* Position the tooltip */
	position: absolute;
	z-index: 1;
	&:hover {
		visibility: visible;  /* Or display: block */
	}
  }`
  
 



