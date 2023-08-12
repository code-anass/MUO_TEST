import styled from "styled-components";

export const Body = styled.body`
  // background-image: url('assets/images/settings/contact_bg.jpg') ;
  overflow: hidden;
  position: relative;
  // box-shadow: rgba(7, 8, 24, 0.67) 0px 0px 0px 2000px inset;
  cursor: auto;
  overflow: hidden;
  position: relative;
  cursor: auto;
  font-family: Lato, sans-serif;
  font-size: 15px;
  font-weight: 400;
  box-sizing: border-box;
  -webkit-font-smoothing: subpixel-antialiased;
  color: rgb(33, 33, 33);
  line-height: 25px;
  backface-visibility: hidden;
  overflow-x: hidden;
  margin: 0px;
  text-align: left;
  background-color: transparent;
`;
export const LeftContainerWrapper = styled.div`
  margin-top: 50px;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
`;

export const LeftContainerDiv = styled.div`
  min-height: 70vh;
  width: 100% !important;
  box-sizing: border-box;
`;
export const LeftContainer = styled.div`
  padding-top: 4rem;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  width: 100%;
  min-height: 70vh;
  width: 100% !important;
  box-sizing: border-box;
`;

export const LeftDiv = styled.div`
  color: ${({ theme }) => theme.color.searchwhite};
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
`;
export const Div = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 50%;
  position: relative;
  width: 100%;
  min-height: 1px;
  box-sizing: border-box;
`;

export const LeftContDiv = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 83.3333%;
  max-width: 83.3333%;
  margin-left: 90px;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;

  @media only screen and (max-width: 600px) {
      margin: 2rem;

  }
`;

export const H1 = styled.h1`
  visibility: visible;
  /* font-size: 45px; */
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
  color: ${({ theme }) => theme.color.searchwhite};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  margin-top: 48px;
  /* font-family: "Josefin Sans", sans-serif; */
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
  margin-bottom: 0px;
  /* line-height: 54px; */
  box-sizing: border-box;



  font-size: ${({ theme }) => theme.fontSize.extreamLarge + 4}px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`;

export const cBox = styled.div`
  color: ${({ theme }) => theme.color.searchwhite};
  width: 92%;
  width: 92%;
  box-sizing: border-box;
`;

export const P = styled.p`
  visibility: visible;
  font-size: 16.5px;
  font-weight: 400;
  /* font-family: Lato, sans-serif; */
  margin: 0px;
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
  margin-top: 0px;
  margin-bottom: 0px;
  box-sizing: border-box;


  font-size: ${({ theme }) => theme.fontSize.large}px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`;

export const CBoxDiv = styled.div`
  border-radius: 25px;
  background-color: rgba(29, 41, 88, 0.796);
  padding: 24px;
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
`;

export const FormDiv = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`;


export const LabelRnD = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  box-sizing: border-box;
  
`;

export const MapWrapper = styled.div`
  border-radius: 5px;
  box-sizing: border-box;
  box-sizing: border-box;
`;

export const Map = styled.iframe`
  box-sizing: border-box;
`;

export const FormInDiv = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;

export const Form = styled.form`
  box-sizing: border-box;
`;

export const Input = styled.input`
  overflow: visible;
  margin: 0px;
  font-family: Lato, sans-serif;
  font-size: 15px;
  line-height: 25px;
  box-sizing: border-box;
`;

export const DivLabel = styled.div`
  margin-bottom: 16px;
  box-sizing: border-box;
`;

export const LabelInput = styled.input`
  display: block;
  width: 100%;
  line-height: 27px;
  font-size: 14px;
  box-shadow: none;
  color: ${({ theme }) => theme.color.inputContact};
  text-transform: capitalize;
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box
    border-box;
  padding: 7px 19px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 0px;
  transition: all 0.5s ease 0s;
  background-color: rgb(247, 247, 247);
  /* -webkit-background-clip: border-box; */
  overflow: visible;
  margin: 0px;
  font-family: Lato, sans-serif;
  box-sizing: border-box;
  /* -webkit-background-clip: border-box; */
`;

export const LabelPara = styled.p`
  font-weight: 400;
  font-family: Lato, sans-serif;
  margin: 0px;
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
  box-sizing: border-box;
`;

export const EmailDiv = styled.div`
  color: ${({ theme }) => theme.color.searchwhite};
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
`;

export const EmailInput = styled.input`
  text-transform: lowercase;
  display: block;
  width: 100%;
  line-height: 27px;
  font-size: 14px;
  box-shadow: none;
  color: ${({ theme }) => theme.color.inputContact};
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box
    border-box;
  padding: 7px 19px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 0px;
  transition: all 0.5s ease 0s;
  background-color: rgb(247, 247, 247);
  /* -webkit-background-clip: border-box; */
  overflow: visible;
  margin: 0px;
  font-family: Lato, sans-serif;
  box-sizing: border-box;
  /* -webkit-background-clip: border-box; */
`;

export const FormInCatDiv = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  line-height: normal;
  font-size: 14px;
  box-shadow: none;
  color: ${({ theme }) => theme.color.inputContact};
  text-transform: capitalize;
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box
    border-box;
  padding: 7px 19px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 0px;
  transition: all 0.5s ease 0s;
  height: 38px;
  background-color: rgb(247, 247, 247);
  /* -webkit-background-clip: border-box; */
  margin: 0px;
  font-family: Lato, sans-serif;
  box-sizing: border-box;
  /* -webkit-background-clip: border-box; */
`;

export const Option = styled.option`
  box-sizing: border-box;
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  line-height: 27px;
  font-size: 14px;
  box-shadow: none;
  color: ${({ theme }) => theme.color.inputContact};
  text-transform: capitalize;
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box
    border-box;
  padding: 7px 19px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 0px;
  transition: all 0.5s ease 0s;
  background-color: rgb(247, 247, 247);
  /* -webkit-background-clip: border-box; */
  overflow: auto;
  resize: vertical;
  margin: 0px;
  font-family: Lato, sans-serif;
  box-sizing: border-box;
  /* -webkit-background-clip: border-box; */
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;


  @media screen and (max-width: 1240px) {
    gap: 40px;
    width: max-content;
    /* width: 190%; */
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;

    }


   
`;

export const ImageBlock = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;

export const ImageWrapp = styled.label`
  -webkit-box-flex: 0;
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;

export const ImgWrap = styled.div`
  vertical-align: middle;
  border-style: none;
  box-sizing: border-box;
`;

export const InputBlock = styled.input`
  display: block;
  width: 100%;
  line-height: 27px;
  font-size: 14px;
  box-shadow: none;
  color: ${({ theme }) => theme.color.inputContact};
  text-transform: capitalize;
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box
    border-box;
  padding: 7px 19px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 0px;
  transition: all 0.5s ease 0s;
  background-color: rgb(247, 247, 247);
  /* -webkit-background-clip: border-box; */
  overflow: visible;
  margin: 0px;
  font-family: Lato, sans-serif;
  box-sizing: border-box;
  /* -webkit-background-clip: border-box; */
`;

export const DivSubmit = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  border: 0px none rgb(255, 255, 255);
  border-radius: 5px;
  background-color: rgb(10, 187, 135);
  font-size: 14px;
  padding: 12px 20px;
  cursor: pointer;
  font-weight: 400;
  color: ${({ theme }) => theme.color.searchwhite};
  text-transform: uppercase;
  transition: all 0.2s linear 0s;
  display: inline-block;
  border-color: rgb(255, 255, 255);
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  line-height: 21px;
  appearance: button;
  overflow: visible;
  margin: 0px;
  font-family: Lato, sans-serif;
  box-sizing: border-box;
`;

export const PLabel = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

// RightComponent css
export const DivRight = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;

export const RightH1 = styled.h3`
  font-size: 1.6em;
  font-weight: 700;
  /* font-family: "Josefin Sans", sans-serif; */
  margin-bottom: 8px;
  font-weight: 700;
  line-height: 28.8px;
  /* color: rgb(255, 255, 255); */
  margin-top: 0px;
  box-sizing: border-box;

    font-size: ${({ theme }) => theme.fontSize.large}px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`;

export const RightContainer = styled.div`
  visibility: visible;
  -webkit-box-flex: 0;
  flex: 0 0 50%;
  animation-name: fadeInRight;
  animation-duration: 1s;
  animation-fill-mode: both;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;


  @media only screen and (max-width: 600px) {
      margin: 1rem;

  }
`;

export const Rows = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 91.6667%;
  max-width: 91.6667%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;
export const RowWrapper = styled.div`
  border-radius: 25px;
  background-color: rgba(29, 41, 88, 0.796);
  padding: 48px;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
`;
// export const Div = styled.div`
//           -webkit-box-flex: 0;
//             flex: 0 0 100%;
//             max-width: 100%;
//             position: relative;
//             width: 100%;
//             min-height: 1px;
//             padding-right: 15px;
//             padding-left: 15px;
//             box-sizing: border-box;

// `

export const ImageWrapper = styled.img`
  border-radius: 5px;
  max-width: 140px;
  height: auto;
  vertical-align: middle;
  border-style: none;
  box-sizing: border-box;
`;
export const EnvWrapper = styled.img`
  width: 25px;
  margin-right: 20px;
  filter: brightness(0) invert(1);
  margin-right: 20px;
  filter: brightness(0) invert(1);
  vertical-align: middle;
  border-style: none;
  box-sizing: border-box;
`;

// export const RH1 = styled.h3`
//           font-size: 1.6em;
//           font-weight:700;
// font-family: 'Josefin Sans', sans-serif;
// margin-bottom: 8px;
// font-weight: 700;
// line-height: 28.8px;
// color: rgb(255, 255, 255);
// margin-top: 0px;
// box-sizing: border-box;

// `

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 700;
  /* font-family: "Josefin Sans", sans-serif; */
  margin-top: 24px;
  margin-bottom: 8px;
  font-weight: 700;
  line-height: 24px;
  /* color: rgb(255, 255, 255); */
  box-sizing: border-box;

    font-size: ${({ theme }) => theme.fontSize.large}px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`;

export const ParagraphWrapper = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-family: Lato, sans-serif;
  margin: 24px 0px 0px;
  margin-top: 24px;
  margin-bottom: 15px;
  box-sizing: border-box;
  font-weight: 400;
`;
export const ParagraphNWrapper = styled.p`
  font-size: 17px;
  font-weight: 400;
  /* font-family: Lato, sans-serif; */

  box-sizing: border-box;
  font-weight: 400;
  padding-top: 5px;
  margin: 0px;

  font-size: ${({ theme }) => theme.fontSize.medium}px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`;

export const ParagraphBWrapper = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-family: Lato, sans-serif;
  box-sizing: border-box;
  font-weight: 400;
  margin-bottom: 15px;
`;

export const BR = styled.br`
  box-sizing: border-box;
`;

export const Br = styled.br`
  font-weight: 300;
`;

export const BRWRAPPER = styled.span`
  font-weight: 700;
  box-sizing: border-box;
`;

export const HR = styled.hr`
  background-color: #fff;
  margin-top: 16px;
  margin-bottom: 16px;
  border-width: 1px 0px 0px;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-right-color: rgb(255, 255, 255);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-image: none;
  border-top-style: solid;
  border-top-color: rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  height: 0px;
  overflow: visible;
  margin-top: 16px;
`;

export const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const SPAN = styled.span`
  margin-bottom: 0px;
`;
