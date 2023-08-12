import styled from 'styled-components'


export const ParagraphCWrapper = styled.p`
            font-size: 17px;
            font-weight:400;
            /* font-family: Lato, sans-serif; */
            display: flex;
            box-sizing: border-box;
            font-weight: 400;
            padding-top: 5px;
            margin: 0px;

              font-size: ${({ theme }) => theme.fontSize.medium }px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};


`

export const ImageWrapper = styled.img`
          border-radius: 5px;
            max-width: 140px;
            height: auto;
            vertical-align: middle;
            border-style: none;
            box-sizing: border-box;

`
export const EnvWrapper = styled.img`
width: 25px;
            margin-right: 20px;
            filter: brightness(0) invert(1);
            margin-right: 20px;
            filter: brightness(0) invert(1);
            vertical-align: middle;
            border-style: none;
            box-sizing: border-box;

              font-size: ${({ theme }) => theme.fontSize.medium }px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};

            

`

export const Br = styled.br`
    font-weight: 300;

`

export const BRWRAPPER = styled.span`
    font-weight: 700;
box-sizing: border-box;

`


export const HR = styled.hr`
background-color: #fff;
margin-top:16px;
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

`
