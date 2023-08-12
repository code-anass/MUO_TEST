import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background:${({ theme }) => theme.color.bgLighter};
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
color: ${({ theme }) => theme.color.textSoft};
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: ${({ theme }) => theme.fontSize.extremeLarge}px;
cursor: pointer;
outline: none;
`;
export const SidebarWrapper = styled.div`
color: ${({ theme }) => theme.color.textSoft};
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns : 1fr;
grid-template-rows : repeat(6, 2px);
text-align: center;

@media screen and (max-width:480p){
    grid-template-rows: repeat(6,60px);
}
`;


export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content : center;
font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
text-decoration : none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: ${({ theme }) => theme.color.text};
cursor: pointer;
&:hover {
color: ${({ theme }) => theme.color.primary};
transition: 0.25 ease-in-out ;
}
`;
export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
border-radius : 50px;
background: ${({ theme }) => theme.color.primary};
white-space: nowrap;
padding: 16px 64px;
color: ${({ theme }) => theme.color.bgLighter};
font-size:${({ theme }) => theme.fontSize.medium}px;
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