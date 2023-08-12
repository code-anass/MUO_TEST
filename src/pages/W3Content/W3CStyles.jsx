import styled from 'styled-components';

export const MainContainer = styled.div`
align-items: center;
justify-content: center;
position: relative;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-position: center center;
overflow: auto;
background-size: cover;
overflow: hidden;
`;
export const BodyWrapper = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
// padding:10%;
// margin: 10%;
// width: 100%;
// overflow: visible;

`;

export const TextWrapper = styled.div` 
padding: 16px;
margin-top: 160px;
color: white;
height: 100%;
`;

export const LineDivider = styled.div` 

    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
    box-sizing: content-box;
    height: 0;
    overflow: visible;
`

export const TextLinesHeader = styled.h4` 
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 30px;
    
font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
color: ${({ theme }) => theme.fontColor.def_text_inverse_color_1};
font-family: ${({ theme }) => theme.fontName.Def_Font};
    
}`


export const Row = styled.div` 
display: flex;
flex-direction: row;
`;
export const TextLines = styled.p` 
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: 400;
line-height: 1.8;
margin: 0px;
font-size: ${({ theme }) => theme.fontSize.h4}px;
color: ${({ theme }) => theme.fontColor.def_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`;

