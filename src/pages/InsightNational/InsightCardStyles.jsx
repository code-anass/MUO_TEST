import styled from 'styled-components';

export const Cardmain = styled.div`
width: 22rem;
box-shadow: 0 1px 2px 0 grey, 0 1px 2px 0 grey;
margin: 1rem;
position: relative;
display: flex;
flex-direction: column;
min-width: 0;
word-wrap: break-word;
height: 100%;
//background-color: ${({ theme }) => theme.color.copyRightText};
background-clip: border-box;
border: 1px solid #00000020;
border-radius: 0.25rem;
@media screen and (max-width: 500px) {
width: 14rem;
}
`;

export const Container = styled.div`
position: relative;
`;

export const Mainicon = styled.img`
margin: 0px auto;
font-size:  ${({theme})=> theme.fontSize.h5};
cursor: pointer;
padding: 6px 12px;
width: 98%;
height: 200px;
border: 0px solid #000;
&:hover{
    opacity: 0.5;
}
`;

export const DataCard = styled.div`
flex: 1 1 auto;
padding: 1rem 1rem;
box-sizing: border-box;
display: block;
word-wrap: break-word;
`;

export const TitleDataCard = styled.a`
font-size:  ${({theme})=> theme.fontSize.h4}px;
font-family: ${({ theme }) => theme.fontName.Def_Font};
color: ${({ theme }) => theme.color.bgBlackGrey};
margin: -14px auto;
cursor: pointer;
border-radius: 100px;
padding: 6px 12px;
border: 0px solid #000;
&:hover{
    text-decoration:underline;
    }  
`;

export const InfoContent = styled.span`
transition: color 0.5s ease;
display: ${({isclick})=> (isclick ? 'inline' : 'none')};
`;

export const InfoMoreButton = styled.button`
color: ${({ theme }) => theme.color.bgBlueButton};
cursor: pointer;
margin: -14px auto;
font-size: ${({theme})=> theme.fontSize.h5};
font-family: ${({ theme }) => theme.fontName.Def_Font};
border-radius: 100px;
padding: 6px 12px;
`;

export const CardTable = styled.table`
caption-side: bottom;
border-collapse: collapse;
box-sizing: border-box;
text-indent: initial;
border-spacing: 2px;
word-wrap: break-word;
`;

export const CardTbody = styled.tbody`
text-align: justify;

border-color: gray;
border-style: solid;
border-width: 0px;
`;

export const CardTr = styled.tr`
border-color: gray;
border-style: solid;
border-width: 0px;
`;

export const CardTd = styled.td`
border-color: gray;
border-style: solid;
border-width: 0px;
line-height: 2;
`;


export const Content = styled.a`
font-size:  ${({ theme })=> theme.fontSize.h6}px;
font-family: ${({ theme }) => theme.fontName.Def_Font};
color: ${({ theme }) => theme.fontColor.def_color};
`;


export const ContentInsight = styled.a`
font-size:  ${({ theme })=> theme.fontSize.h6}px;
font-family: ${({ theme }) => theme.fontName.Def_Font};
color: ${({ theme }) => theme.fontColor.bgBlue};
`;
