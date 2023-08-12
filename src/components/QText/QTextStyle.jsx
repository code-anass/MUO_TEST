import styled from "styled-components";
import { Link } from "react-router-dom";

export const TextWrapper = styled.div`
  padding: 16px;
  /* background-color: blue; */
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extremeLarge + 4}px;
  line-height: 1.1;
  // color: red;
  color: ${({ theme }) => theme.fontColor.def_header};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  line-height: 52px;
  padding-bottom: 20px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 10px;
  &::before {
    position: absolute;
    content: "";
    left: -30px;
    right: 0;
    margin: auto;
    bottom: 6px;
    width: 48px;
    height: 1px;
    //   background-color: #28b463;
  }
  &::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    margin: auto;
    bottom: 2px;
    width: 48px;
    height: 1px;
    // background-color: #28b463;
  }
  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
  }
`;

export const HeadingInverse = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extremeLarge + 4}px;
  line-height: 1.1;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
// line-height: 52px;
  padding-bottom: 20px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 10px;

  display: -webkit-box;
  // -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  // -webkit-line-clamp: 6;
  // -moz-line-clamp: 6;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 680px) {
    display: -webkit-box;
    font-size: ${({ theme }) => theme.fontSize.large }px;

    -webkit-line-clamp: 1;
    -moz-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    // line-height: 42px;

  }
`;

export const Heading1 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
  color: ${({ theme }) => theme.fontColor.def_color};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  position: relative;

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
  }
`;
export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extremeLarge + 4}px;
  line-height: 1.1;
  // color: ${({ theme }) => theme.color.text};
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  padding-bottom: 20px;
  text-align: center;
  position: relative;
  margin-bottom: 10px;
  text-shadow: 2px 2px 2px #000;
  font-weight: 500;
`;

export const Header2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large}px;
  line-height: 1.1;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  padding-bottom: 20px;
  text-align: center;
  position: relative;
  margin-bottom: 10px;
  // text-shadow: 1px 1px 1px #000;
  font-weight: 600;
`;

export const Header3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
  line-height: 1.1;
  color: ${({ theme }) => theme.fontColor.def_color};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  padding-bottom: 10px;
  text-align: center;
  position: relative;
  // text-shadow: 1px 1px 1px #000;
  font-weight: 600;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: ${({ theme }) => theme.fontSize.h4}px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontColor.def_color};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.color.navGreen};
  }
`;

export const FooterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 10px 0 10px 0px;
  // font-size: 10px;
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.footerLinks};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  white-space: wrap;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.color.footerLinksHover};
    transition: 0.3s ease-out;
  }
`;

export const NavbarMobileContent = styled.div`
  padding: 10px 20px;
  font-size: 15px;
  color: #012970;
  &:focus {
    padding: 10px 20px;
    font-size: 15px;
    color: #012970;
  }
  &:hover {
    color: #4154f1;
  }
`;

export const ContentWhite = styled.div`
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  font-size: ${({ theme }) => theme.fontSize.h4}px;
  line-height: 24px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  line-height: 24px;
  // color: ${(darkText) => (darkText ? "#010606" : "#fff")};
  color: ${({ theme }) => theme.fontColor.def_color};
`;

export const Span = styled.span``;

export const Content = styled.p`
  margin-bottom: 35px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  font-size: ${({ theme }) => theme.fontSize.h3}px;
  line-height: 24px;
  color: ${(darkText) => (darkText ? "#010606" : "#fff")};
`;

export const ContentHtml = styled.p`
  margin-bottom: 35px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  font-size: ${({ theme }) => theme.fontSize.h3}px;
  line-height: 24px;
  color: ${(darkText) => (darkText ? "#010606" : "#fff")};
`;

export const ContentHtmlEllipse = styled.p`
  margin-bottom: 35px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  font-size: ${({ theme }) => theme.fontSize.h3}px;
  line-height: 24px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  -moz-line-clamp: 6;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 680px) {
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
  }
`;

export const ContentThemes = styled.p`
  margin-bottom: 35px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  font-size: ${({ theme }) => theme.fontSize.h3}px;
  line-height: 24px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-left: 15px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  -moz-line-clamp: 6;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 680px) {
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
    margin : 40px 70px 40px 40px;
  }
`;

export const Button = styled.p`
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  line-height: 24px;
  color: ${(darkText) => (darkText ? "#fff" : "#010606")};

  align-items: center;
  justify-content: space-between;
`;
