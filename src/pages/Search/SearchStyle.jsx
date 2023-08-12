import styled from "styled-components";

export const SearchContainer = styled.div`
  min-height: 70vh;
  width: 100% !important;
  box-sizing: border-box;

  margin-top: 50px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;

  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
`;

export const Hr = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 8.33333%;
  max-width: 8.33333%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;

export const HrBreak = styled.hr``;

export const Container = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 83.3333%;
  max-width: 83.3333%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 0px;
  box-sizing: border-box;
`;

export const SpanHighLight = styled.span`
  color:${({ theme }) => theme.color.navGreen};
`;



export const SpanNotHighLight = styled.span`
`;


export const FormBlockDiv = styled.div`
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0px;
  overflow-wrap: break-word;
  background-color: rgb(255, 255, 255);
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

export const Heading = styled.h1`
  visibility: visible;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  margin-top: 30px;
  color: ${({ theme }) => theme.color.navGreen}; // rgb(69, 164, 75);
  text-shadow: rgb(0, 0, 0) 2px 2px 4px;
  font-family: "Josefin Sans", sans-serif;
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
  margin-bottom: 0px;
  line-height: 43.2px;
  box-sizing: border-box;
`;
export const SharedBy = styled.h3`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 10px 0 10px 0px;
  // font-size: 10px;
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-weight: 400;
  color: ${({ theme }) => theme.fontColor.def_color};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  white-space: wrap;
  cursor: pointer;
  transition: 0.3s;
`;

export const FormContainer = styled.div`
  width: 70%;
  margin-left: 21px;
  margin-left: 21px;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  padding: 20px;
  box-sizing: border-box;
  
`;

export const Form = styled.div`
  position: relative;
  margin: 0px auto;
  width: 100%;
  text-align: center;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  line-height: 27px;
  font-size: 14px;
  box-shadow: none;
  color: ${({ theme }) => theme.fontColor.black}; // rgb(136, 137, 153);
  text-transform: capitalize;
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box
    border-box;
  padding: 7px 19px;
  border: 1px solid rgb(40, 180, 99);
  border-radius: 4px;
  transition: all 0.5s ease 0s;
  position: relative;
  height: 55px;
  margin-right: -1px;
  background-color: rgb(255, 255, 255);
  overflow: visible;
  margin: 0px -1px 0px 0px;
  font-family: Lato, sans-serif;
  box-sizing: border-box;

  &&:focus {
    border-color: ${({ theme }) => theme.color.navGreen}; // #28b463;
    box-shadow: none;
    outline: 0;
  }
`;

export const HRLine = styled.hr`
margin: 1rem 1rem 0 1rem;
opacity: 1;
color:  ${({ theme }) => theme.color.text};
`;

export const NoDataContain = styled.p`
margin-top: 1rem;
margin-left: 1.5rem;
opacity: 0.5;
color: #6c757d;
font-weight: 600;
align-item: flex-start;
font-size: 1rem;
`;

export const Button = styled.button`
  margin: 0px;
  width: 12rem;
  padding: 18px 40px;
  min-width: 192px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgb(40, 180, 99);
  /* z-index: 1; */
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  color: ${({ theme }) => theme.color.searchwhite}; // rgb(255, 255, 255);
  text-transform: uppercase;
  transition: all 0.2s linear 0s;
  display: block;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  border: 1px solid rgba(0, 0, 0, 0);
  line-height: 21px;
  appearance: button;
  overflow: visible;
  font-family: Lato, sans-serif;
  box-sizing: border-box;
  &:hover {
    background-color: ${({ theme }) => theme.color.buttonBGHover} !important;
    color: white;
  }
  @media (max-width:500px){
    position: relative;
    margin: 5px 0px 5px -30px;
    width: 10rem;
  }
`;

export const ButtonOption = styled.button`
  font-weight: bolder;
  background-color: ${({ theme }) => theme.color.buttonBG} !important;
  float: right;
  margin-top: 5px;  
  color: ${({ theme }) => theme.color.searchwhite}; // rgb(255, 255, 255);
  text-transform: uppercase;
  box-sizing: border-box;
  margin-right: 5px;
  border-radius: 5px;
  padding: 8px 15px;
  &:hover {
    background-color: ${({ theme }) => theme.color.buttonBGHover} !important;
    color: white;
  }
  @media (max-width:500px){
    float: none;
  }
`;
export const Span = styled.span`
  box-sizing: border-box;
`;

export const ButtonAnchor = styled.div`
  padding-top: 4px;
  margin-bottom: 0px;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  box-sizing: border-box;
`;
export const Ul = styled.div`
  list-style: outside none none;
  margin: 0px;
  padding: 0px;
  border-bottom: 1px solid rgb(222, 226, 230);
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  box-sizing: border-box;
`;

export const LI = styled.li`
  list-style: outside none none;
  margin-bottom: -1px;
  box-sizing: border-box;
`;

export const AnchorTag = styled.a`
  margin: -14px auto;
  font-size: 14px;
  color: ${({ theme }) => theme.color.searchwhite}; // rgb(255, 255, 255);
  cursor: pointer;
  border-radius: 4px 4px 100px 100px;
  padding: 8px 16px;
  border: 0px solid rgb(0, 0, 0);
  background-color: rgb(29, 41, 88);
  transition: all 0.2s linear 0s;
  border-color: rgb(222, 226, 230) rgb(222, 226, 230) rgb(255, 255, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: block;
  text-decoration: none solid rgb(255, 255, 255);
  box-sizing: border-box;
`;

export const AnchorTag1 = styled.a`
  margin: -14px auto;
  font-size: 14px;
  color: ${({ theme }) => theme.color.bgBlue}; // rgb(29, 41, 88);
  cursor: pointer;
  border-radius: 4px 4px 100px 100px;
  padding: 8px 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.2s linear 0s;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: block;
  text-decoration: none solid rgb(29, 41, 88);
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
`;

export const Card = styled.div`
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  padding: 20px;
  box-sizing: border-box;
`;
export const CardContent = styled.div`
  display: block;
  opacity: 1;
  transition: opacity 0.15s linear 0s;
  box-sizing: border-box;
`;

export const text = styled.a`
  margin: -14px auto;
  font-size: 14px;
  color: ${({ theme }) => theme.color.searchwhite}; //#ffffff;
  cursor: pointer;
  border-radius: 100px;
  padding: 6px 12px;
  border: 0px solid #000;
  &:hover {
    color: ${({ theme }) => theme.color.bgBlue}; // #0056b3;
    text-decoration: underline;
  }
`;

export const LinkStyles = styled.span`
  margin: 2px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-style: normal;
  color: rgb(255, 255, 255);
  background-color: rgb(40, 167, 69);
  display: inline-block;
  padding: 2.8125px 4.5px;
  font-size: 11.25px;
  font-weight: 700;
  line-height: 11.25px;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Content = styled.h6`
  font-size: 16px;
  font-family: Lato, sans-serif;
  line-height: 19.2px;
  color: ${({ theme }) => theme.color.text}; // rgb(33, 33, 33);
  box-sizing: border-box;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-weight: 400;
  font-family: Lato, sans-serif;
  margin: 0px;
  font-size: 14px;
  margin-bottom: 0px;
  box-sizing: border-box;

  font-size: ${({ theme }) => theme.fontSize.body}px;
  font-weight: 500;
  color: ${({ theme }) => theme.fontColor.def_color};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
`;

export const CardFooter = styled.div`
  font-size: 12px;
  font-family: "Material Icons";
  font-weight: 400;
  font-style: normal;
  line-height: 12px;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  overflow-wrap: normal;
  direction: ltr;
  font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
`;

export const FooterText = styled.span`
  font-size: 12px;
  margin-right: 10px;
  margin-right: 10px;
  box-sizing: border-box;
`;

export const FooterFontBold = styled.b`
  font-weight: 700;

  color: ${({ theme }) => theme.fontColor.def_color};
  font-family: ${({ theme }) => theme.fontName.Def_Font};
  box-sizing: border-box;
`;

export const MoreDetailDiv = styled.div`
//width : 25%;

@media (max-width: 768px) {
  width : 50%;
}
`