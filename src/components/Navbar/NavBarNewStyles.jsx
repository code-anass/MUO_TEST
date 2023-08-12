import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { NavLink } from 'react-router-dom';


export const Nav = styled.nav`
background:  ${({ theme }) => theme.color.bgDarkBlue};
color: ${({ theme }) => theme.color.bgLighter};
height: 4rem;
display: flex;
justify-content : center;
align-items: center;
font-size: ${({ theme }) => theme.fontSize.medium}px;
position: sticky;
top: 4.5rem;
z-index: 999;
@media screen and (max-width : 968px) {
transition: 0.8s all ease;
}
`;
export const NavbarContainer = styled.div`
display: flex;
justify-content : center;
height: 5rem;
z-index: 1;
width: 100%;
padding: 0 24px;
//max-width: 1100px;
`;
export const NavbarLogo = styled(LinkR)`
justify-self: flex-start;
cursor: pointer;
font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;
export const NavbarLogoImg = styled.img`
width: 100%;
height: 100%;
`;
//common
export const MobileIcon = styled.div`
display: none;
padding-left: 15px;
padding-right: 15px;
padding-top: 10px;
padding-bottom: 5px;

border: 1.2px solid green;


@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -5px;
    right: -5px;
    transform: translate(-50%, 50%);
    font-size:  ${({ theme }) => theme.fontSize.extraLarge}px;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
color: #ffffff;
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
@media screen and (max-width: 768px) {
display: none;
}
`;
export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
display: flex;
align-items: center;
text-decoration : none;
padding: 0 1.6rem;
margin:  2rem 0; 
cursor: pointer;
font-size: ${({ theme }) => theme.fontSize.medium}px;
color:   ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};

&.active{
border-bottom : 3px solid  ${({ theme }) => theme.color.primary};
}
/* &:hover{
    transition: all 0.2s ease-in-out;
    border-top : 3px solid  ${({ theme }) => theme.color.primary};
    color:   ${({ theme }) => theme.color.primary};
} */
`;

export const Navlink = styled(NavLink)`
display: flex;
align-items: center;
text-decoration : none;
padding: 0 15px;
margin-top: 10px;
margin-botom: 10px;
line-height: 20px;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;
transition-delay: 0s;
transition-property: all; 
transition: "border-bottom 2s ease left";
//margin:  2rem 0; 
webkit-box-orient: horizontal;
webkit-box-direction: normal;
flex-direction: row;
cursor: pointer;
position: relative;
display: inline-block;

color:   ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-size: ${({ theme }) => theme.fontSize.medium}px;
font-family: ${({ theme }) => theme.fontName.Def_Font};
&.active{
border-bottom : 3px solid  ${({ theme }) => theme.color.primary};
}
/* &:hover{
    transition: all 0.2s ease-in-out;
    border-top : 3px solid  ${({ theme }) => theme.color.primary};
    color:   ${({ theme }) => theme.color.primary};
} */
`;


export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width : 768px) {
display: none;
}
`;

export const NavBtnLink = styled(LinkS)`
border-radius : 5px;
background:  ${({ theme }) => theme.color.bgGreen};
color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
font-size: ${({ theme }) => theme.fontSize.medium}px;

//white-space: nowrap;
padding: 12px 18px;
outline: none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out ;
text-decoration : none;
&.active{
  border-bottom : 3px solid  ${({ theme }) => theme.color.primary};
  }  
&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.color.bgDarkGreen};
    color: ${({ theme }) => theme.color.bgLighter};
}
`;
export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  margin-top: 10px;
  background:  ${({ theme }) => theme.color.bgDarkBlue};
  color: ${({ theme }) => theme.color.bgLighter};
  min-width: 210px;
  //max-width: 300px;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.18);
  z-index: 99;
  border-radius: 4px;
  //font-size: 1rem;
`;

export const DropDownLi = styled.li`
  display: inline-block;
  width: 100%;
  line-height: 40px;
  //padding: 12px 20px;
  white-space: nowrap;
  test-align: inherit;
  position: relative;


  margin-left: 20px;
  margin-right: 20px;
  &:hover ${DropDownContent} {
    display: block;
  }
`;


export const Dropbtn = styled.div`
  display: inline-block;
  text-align: center;
  padding: 0 1rem;
  text-decoration: none;
  color:   ${({ theme }) => theme.fontColor.def_text_inverse_color};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  /* &:hover{
    transition: all 0.2s ease-in-out;
    border-top : 3px solid  ${({ theme }) => theme.color.primary};
    color:   ${({ theme }) => theme.fontColor.def_text_inverse_color};
} */
`;

export const DropNavLinks = styled(LinkS)`
margin: 0 0 0 0;
cursor: pointer;
align-items: center;
text-decoration : none;
display: flex;
padding: 12px 20px;
clear: both;
color:   ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
position: relative;
outline: 0;
border-bottom: 2px solid ${({ theme }) => theme.color.bgLighter};
&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.color.bgLighter};
    color:   ${({ theme }) => theme.color.primary};
}
`;

export const DropNavLink = styled(LinkS)`
margin: 0 0 0 0;
cursor: pointer;
align-items: center;
text-decoration : none;
display: flex;
padding: 12px 20px;
clear: both;

color:   ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-size: ${({ theme }) => theme.fontSize.medium}px;
font-family: ${({ theme }) => theme.fontName.Def_Font};
position: relative;
outline: 0;
&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.color.bgLighter};
    color:   ${({ theme }) => theme.color.primary};
}
`;