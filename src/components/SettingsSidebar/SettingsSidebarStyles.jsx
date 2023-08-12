import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999999;
overflow-y: auto;
top: 3.8rem;
right: 0;
width: 400px;
max-width: 90%;
height: 100%;
background:${({ theme }) => theme.color.bgBlue};
color:${({ theme }) => theme.color.textSoft};
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
transition: 0.3s ease-in-out;
opacity: ${({ isTopOpen }) => (isTopOpen ? '100%' : '0')};
right: ${({ isTopOpen }) => (isTopOpen ? '0' : '-100%')};
overflow: auto;
padding-bottom: 5rem;
`;

export const CloseIcon = styled(FaTimes)`
color: ${({ theme }) => theme.color.text};
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 2.5rem;
padding: 12px 20px;
line-height: 1.5;
border-radius: 4px;
background: ${({ theme }) => theme.color.bgLighter};
cursor: pointer;
outline: none;
// font-size: ${({ theme }) => theme.fontSize.medium}px;
display: flex;
justify-content: flex-end;
`;

export const Barrier = styled.div`
border-bottom: 2px solid ${({ theme }) => theme.color.bgBlue};
width: 100%;
height: 20px;
`;

export const SidebarMenu = styled.ul`
display: flex;
font-family: Lato, sans-serif;
justify-content: center;
padding: 0.2rem;
@media screen and (max-width:480p){
    grid-template-rows: repeat(6,60px);
}
`;


export const SidebarLink = styled(LinkS)`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content : center;
gap: 10px;
// font-size: ${({ theme }) => theme.fontSize.medium}px;
text-decoration : none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: ${({ theme }) => theme.color.text};
cursor: pointer;
&:hover {
color: ${({ theme }) => theme.color.primary};
transition: 0.25 ease-in-out ;
box-sizing: border-box;
}
`;


export const SideBtnWrapClose = styled.div`
display: flex;
flex-direction: column;
width: 80%;
margin-bottom:60px;
background:${({ theme, trans }) => trans ? 'transparent' : theme.color.bgLighter};
color:${({ theme }) => theme.color.textSoft};
`;

export const Option = styled.div`
background : ${({ primary, theme }) => (primary ? theme.color.primary : theme.color.bgLighter)};
white-space: nowrap;
padding: 15px 25px 15px 25px;
color: ${({ dark, theme }) => (dark ? theme.color.bgLighter : theme.color.text)};
// font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
// font-size: ${({ theme }) => theme.fontSize.medium}px;
width:28%;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content : center;
align-items : center;
transition: all 0.2s ease-in-out ;
border-radius: 8px;
// font-family: ${({ theme }) => theme.fontName.Def_Font};

&:hover {
    background-color: #D6D6D6;
    padding: 15px 25px 15px 25px;
    user-select: none;
}`
export const W3C = styled.div`

background : ${({ primary, theme }) => (primary ? theme.color.primary : theme.color.bgLighter)};
white-space: nowrap;
padding: 15px 25px 15px 25px;
color: ${({ dark, theme }) => (dark ? theme.color.bgLighter : theme.color.text)};
// font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
font-size: ${({ theme }) => theme.fontSize.h3}px;
cursor: pointer;
line-height: 1.5rem;
height: 3rem;       /* height is 2x line-height, so two lines will display */
overflow: hidden;
color: #007bff;
text-decoration: none;
background-color: transparent;
width: 15rem;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2; /* number of lines to show */
line-height: 1.5rem;        /* fallback */
max-height: 3rem;
`




export const SideNavCard = styled.div`
display: flex;
flex-direction: column;
margin: 5px;
width: 80%;
padding: 10px;
border-radius: 8px;
background:${({ theme, trans }) => trans ? 'transparent' : theme.color.bgLighter};
color:${({ theme }) => theme.color.textSoft};
`;


export const SidebarRoute = styled(LinkR)`
border-radius : 50px;
background: ${({ theme }) => theme.color.primary};
white-space: nowrap;
padding: 16px 64px;
color: ${({ theme }) => theme.color.bgLighter};
// font-size:${({ theme }) => theme.fontSize.medium}px;
outline: none;
border: none;
cursor: pointer;
transition: all 0. 25 ease-in-out ;
text-decoration: none;
&:hover{
    transition: all 0.25 ease-in-out;
    background: ${({ theme }) => theme.color.text};
    color: ${({ theme }) => theme.color.bgLighter};
}
`;
