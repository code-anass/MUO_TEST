import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
export const HeroContainer = styled.div`
background: #ececec;
display: flex;
justify-content : center;
align-items: center;
padding:0 30px;
height: 100vh;
position: relative;
z-index: 1;
:before{ 
content: '';
position : absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 2;
}
@media screen and (max-width: 768px) {
    height: 50vh;
}
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: white;
preload: auto;
`;

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position : absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeroHeading = styled.h1`
color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-size:  ${({ theme }) => theme.fontSize.heading}px;
text-align: center;
font-family: ${({ theme }) => theme.fontName.Def_Font};
@media screen and (max-width: 768px){
    font-size:${({ theme }) => theme.fontSize.heading}px;
}
@media screen and (max-width: 480px) {
font-size:${({ theme }) => theme.fontSize.extraLarge}px;
}
`;
export const HeroText = styled.p`
margin-top: 24px;
font-family: ${({ theme }) => theme.fontName.Def_Font};
color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
text-align: center;
max-width: 600px;
@media screen and (max-width: 768px) {
font-size:${({ theme }) => theme.fontSize.extremeLarge}px;
}
@media screen and (max-width: 480px) {
foñt-size: 24px;
}
`;
export const HeroBtnWrapper = styled.div`
margin-top: 32px;
width: 60%;
display: flex;
flex-direction : row;
align-items : center;
font-family: ${({ theme }) => theme.fontName.Def_Font};
@media screen and (max-width: 768px) {
    width: 100%;
flex-direction : column;
gap: 1rem;
}
`;

export const ArrowFoward = styled(MdArrowForward)`
margin-left: 8px;
font-size : ${({ theme }) => theme.fontSize.large}px;
// font-family: ${({ theme }) => theme.fontName.Def_Font};
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size : ${({ theme }) => theme.fontSize.large}px;
font-family: ${({ theme }) => theme.fontName.Def_Font};
`;










// import styled from 'styled-components';
// import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';
// export const HeroContainer = styled.div`
// background: ${({ theme }) => theme.color.bg};
// display: flex;
// justify-content : center;
// align-items: center;
// padding:0 30px;
// height: 800px;
// position: relative;
// z-index: 1;
// :before{ 
// content: '';
// position : absolute;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
// background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100% ), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
// z-index: 2;
// }
// `;

// export const HeroBg = styled.div`
// position: absolute;
// top: 0;
// right: 0;
// bottom: 0;
// left: 0;
// width: 100%;
// height: 100%;
// overflow: hidden;
// `;

// export const VideoBg = styled.video`
// width: 100%;
// height: 100%;
// -o-object-fit: cover;
// object-fit: cover;
// background: ${({ theme }) => theme.color.bgLighter};
// `;

// export const HeroContent = styled.div`
// z-index: 3;
// max-width: 1200px;
// position : absolute;
// padding: 8px 24px;
// display: flex;
// flex-direction: column;
// align-items: center;
// `;

// export const HeroHeading = styled.h1`
// color: ${({ theme }) => theme.color.text};
// font-size: 48px;
// text-align: center;
// @media screen and (max-width: 768px){
//     font-size: 48px;
// }
// @media screen and (max-width: 480px) {
// font-size: 32px;
// }
// `;
// export const HeroText = styled.p`
// margin-top: 24px;
// color:${({ theme }) => theme.color.text};
// font-size: 24px;
// text-align: center;
// max-width: 600px;
// @media screen and (max-width: 768px) {
// font-size: 34px;
// }
// @media screen and (max-width: 480px) {
// foñt-size: 24px;
// }
// `;
// export const HeroBtnWrapper = styled.div`
// margin-top: 32px;
// width: 60%;
// display: flex;
// flex-direction : row;
// gap:12px;
// align-items : center;
// `;

// export const ArrowFoward = styled(MdArrowForward)`
// margin-left: 8px;
// font-size : 20px;
// `;
// export const ArrowRight = styled(MdKeyboardArrowRight)`
// margin-left: 8px;
// font-size : 20px;
// `;