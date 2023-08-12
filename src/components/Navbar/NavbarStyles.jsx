import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.color.bgDarkBlue};
  color: ${({ theme }) => theme.color.bgLighter};
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  position: sticky;
  top: 4.5rem;
  width: 100%;
  z-index: 999;
  @media screen and (max-width: 968px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  transition: all 0.5s;
  z-index: 1997;
  padding: 15px 2%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1035px) {
    display: none;
  }
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

export const LogoImg = styled.img`
  align-items: flex-start;
  justify-self: flex-start;
  display: flex;
  max-height: 40px;
  line-height: 1;
  margin-right: 6px;
  // vertical-align: middle;
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
    font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
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
  padding: 0;
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
  text-decoration: none;
  padding: 0 1.6rem;
  margin: 2rem 0;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  color: ${({ theme }) => theme.fontColor.text};
  font-family: ${({ theme }) => theme.fontName.Def_Font};

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.color.primary};
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
  text-decoration: none;
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

  color: ${({ theme }) => theme.fontColor.text};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.color.primary};
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkS)`
  border-radius: 5px;
  background: ${({ theme }) => theme.color.bgGreen};
  color: ${({ theme }) => theme.fontColor.text};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  font-size: ${({ theme }) => theme.fontSize.medium}px;

  //white-space: nowrap;
  padding: 12px 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.color.primary};
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.color.bgDarkGreen};
    color: ${({ theme }) => theme.color.bgLighter};
  }
`;
export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  margin-top: 10px;
  background: ${({ theme }) => theme.color.bgDarkBlue};
  color: ${({ theme }) => theme.color.text};
  min-width: 210px;
  //max-width: 300px;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.18);
  z-index: 99;
  border-radius: 4px;
  //font-size: 1rem;
`;

export const DropDownLi = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const Dropbtn = styled.div`
  display: inline-block;
  text-align: center;
  padding: 0 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor.text};
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
  text-decoration: none;
  display: flex;
  padding: 12px 20px;
  clear: both;
  color: ${({ theme }) => theme.fontColor.text};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  position: relative;
  outline: 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.bgLighter};
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.color.bgLighter};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const DropNavLink = styled(LinkS)`
  margin: 0 0 0 0;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  display: flex;
  padding: 12px 20px;
  clear: both;

  color: ${({ theme }) => theme.fontColor.text};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  position: relative;
  outline: 0;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.color.bgLighter};
    color: ${({ theme }) => theme.color.primary};
  }
`;

// New CSS tags

export const HeaderContainer = styled.header`
  transition: all 0.5s;
  z-index: 1997;
  padding: 1px 2%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  // color: ${({ theme }) => theme.fontColor.text};
  // boxShadow: 0px 2px 20px rgba(1, 41, 112, 0.2);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  position: fixed;
`;

export const HeaderLogo = styled.img`
  line-height: 1;
  max-height: 40px;
  margin-right: 6px;
`;

export const NavbarMain = styled.nav`
  padding: 0;
  // color: ${({ theme }) => theme.fontColor.text};
`;

export const NavbarUL = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  display: -webkit-inline-box;
`;

export const NavBarLI = styled.li`
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.color.navGreen};
  }
`;

export const NavbarContent = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  white-space: nowrap;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.color.navGreen};
  }
`;

export const NavbarIcon = styled.i`
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
`;

export const NavbarDropdown = styled.li`
  position: relative;
  // &:hover{
  //   color:  rgb(62,186,52);
  // }
  ul {
    display: block;
    position: absolute;
    left: 14px;
    top: calc(100% + 30px);
    list-style: none;
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
    border-radius: 4px;
  }
  &:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }
  &.active:hover {
    color: ${({ theme }) => theme.color.navGreen};
  }
`;

export const NavbarDropdownLI = styled.li`
  min-width: 200px;
  padding-right: 20px;
  &:hover {
    color: ${({ theme }) => theme.color.navGreen};
  }
`;

export const NavbarDropdownContent = styled.a`
  padding: 10px 20px;
  font-size: 15px;
  text-transform: none;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.color.navGreen};
  }
`;

export const NavbarSearchUL = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavbarSearchLI = styled.li`
  position: relative;
  padding: 0px 5px;
`;

export const NavbarSearchContent = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0);
  text-decoration: none;
  background: none;
  color: #4a4a4a;
  transition: all 0.4s;
  color: #000000;
  &:hover {
    background-color: #0abb86d1;
    color: #fff;
  }
`;

export const NavbarSearchBox = styled.div`
  right: 3%;
  top: 0%;
  transform: translate(0%, 0%);
  height: 40px;
  border-radius: 40px;
  padding: 2px;
  &:hover {
    background: #d4d4d4;
  }

  input {
    float: left;
    margin-left: 10px;
    line-height: 35px;
    letter-spacing: 0.5px;
    border: none;
    background: none;
    outline: none;
    font-size: 14px;
    color: #ffffff;
    padding: 0;
    transition: 0.4s;
    width: 0;
  }
  &:hover > input {
    width: 200px;
    color: #000000;
  }

  button {
    float: right;
    width: 36px;
    height: 36px;
    margin-right: 1px;
    border-radius: 50%;
    border-color: #ffffff00;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: none;
    transition: all 0.4s;
  }
  &:hover > button {
    background: #0abb86d1;
  }

  i {
    color: #000000;
  }
  &:hover > i {
    color: rgb(255, 255, 255);
  }
`;

export const NavbarMobileContainer = styled.div`
  color: #012970;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 1;
  transition: 0.5s;
  nav {
    position: fixed;
    overflow: hidden;
    display: ${({ isopen }) => (isopen ? "block" : "none")};
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
    bottom: 0;
    background: rgba(1, 22, 61, 0.9);
    transition: 0.3s;
    &.active {
      color: #4154f1;
    }
  }
  &.active > nav {
    overflow: visible;
    display: block;
  }
  @media screen and (max-width: 1035px) {
    display: block;
  }
`;

export const NavbarMobileContent = styled.div`
  padding: 10px 20px;
  font-size: 15px;
  color: #012970;
  display: flex;
  align-items: center;
  font-weight: 700;
  justify-content: space-between;
  &:focus {
    padding: 10px 20px;
    font-size: 15px;
    color: #012970;
  }
  &:hover {
    color: #4154f1;
  }
`;

export const NavbarMobileIcon = styled.i`
  margin-right: 5px;
  font-size: 12px;
`;

export const NavbarMobileUL = styled.ul`
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  border-radius: 10px;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
`;

export const NavbarMobileLI = styled.li`
  &:hover {
    color: #4154f1;
  }
`;

export const NavbarMobileDropdown = styled.li`
  ul {
    position: static;
    display: ${({ isdropdownopen }) => (isdropdownopen ? "block" : "none")};
    margin: 10px 20px;
    padding: 10px 0;
    //z-index: 99;
    opacity: 1;
    visibility: visible;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    &.active:hover {
      color: #4154f1;
    }
  }
  &:active > ul {
    display: block;
  }
`;

export const NavbarMobileDropdownLI = styled.li`
  min-width: 200px;
  position: relative;
  list-style: none;
  display: list-item;
`;
