import styled from 'styled-components';

export const ImageWithTitle = styled.div`
max-width: 100%;
padding: 1.25rem;
`
export const ImageTitle =styled.div`
padding: 1.25rem;
text-align : center;
font-size: ${({ theme }) => theme.fontSize.medium}px;
font-family: ${({ theme }) => theme.fontName.Def_Font};
background: ${({ theme }) => theme.color.bgLighter};
color: ${({ theme }) => theme.fontColor.def_color};
`

export const ImageCard = styled.img`
width: 100%;
object-fit: scale-down;
height: 130px;
vertical-align: center;
horizontal-align: center;
align-items: center;
text-align : center;
justify-content: center;
`
export const ImageContainer = styled.div`
background-color: transparent;
justify-content: center;
align-items: center;
height: 120px;
width:80%;
position: relative;

vertical-align :'middle';
box-sizing: 'border-box';


	@media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;


export const MainContainer = styled.div`
padding-left: 50px;
margin-top: 10px;
width: 100%;
`

export const BodyWrapper = styled.div` 
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
height: auto;
// padding:10%;
// margin: 10%;
// width: 100%;
// overflow: visible;

`;

