import styled from "styled-components";
import {Link} from 'react-scroll';
export const Button = styled(Link)`
/* border-radius : 50px; */
background : ${({primary,theme})=>(primary ? theme.color.primary : theme.color.bgLighter)};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content : center;
align-items : center;
transition: all 0.2s ease-in-out ;
&:hover {
transition: all 0.25 ease-in-out;
font-family: ${({ theme }) => theme.fontName.Def_Font};
background: ${({primary,theme})=>(primary ? theme.color.text : theme.color.primary)};
}`;
export const Btn = styled.button`
/* border-radius : 50px; */
background : ${({primary,theme})=>(primary ? theme.color.primary : theme.color.bgLighter)};
white-space: nowrap;
padding: ${({small}) => (small ? '2px' : '8px 12px')};
color: ${({dark,theme}) => (dark ? theme.color.bgLighter : theme.color.text)};
// font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
font-size: ${({ theme }) => theme.fontSize.h3}px;

outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content : center;
align-items : center;
transition: all 0.2s ease-in-out ;
&:hover {
transition: all 0.25 ease-in-out;
background: ${({primary,theme})=>(primary ? theme.color.text : theme.color.primary)};
}`;

export const Input = styled.input`
font-family: ${({ theme }) => theme.fontName.Def_Font};

/* border-radius : 50px; */
width: 100%;
white-space: nowrap;
border: none;
outline: 1px solid ${({ theme }) => theme.color.bg};
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
color: ${({ theme }) => theme.color.text};
background-color:  ${({ theme }) => theme.color.bgLighter};
@media only screen and (max-width: 700px) {
 width: 50%;
&:hover {
    width: 90%;
    background-color: ${({ theme }) => theme.color.bgLighter};
  }
}`;

export const SubHeadText = styled.p`
margin-top: 2px;
font-family: Lato, sans-serif;
// font-size: ${({ theme }) => theme.fontSize.large}px;
text-align: center;
font-weight: bold;
max-width: 600px;
background:${({ theme }) => theme.color.bgLighter};
color:${({ theme }) => theme.color.text};
text-transform:  ${({upprcase}) => (upprcase ? "uppercase" : "lowercase")};
@media screen and (max-width: 768px) {
font-size:${({ theme }) => theme.fontSize.small}px;
}
@media screen and (max-width: 480px) {
foñt-size: 24px;
}
`;

export const Slider = styled.input`
--webkit-apperance:none;
width: 100%;
height:4px;
border: 4px;
background-color: ${({ theme }) => theme.color.primary};
outline: none;
opacity: 1;
--webkit-transition: 0.2s;
transition: opacity 0.2s;
`;


export const Section = styled.section`
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ? 'white' : '#071c2f')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;
