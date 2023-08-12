import styled from 'styled-components';

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
`

export const Label = styled.label`
      
      display: inline-block;
      margin-bottom: 8px;
      box-sizing: border-box;


        font-size: ${({ theme }) => theme.fontSize.medium }px;
  color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`

export const MapWrapper = styled.div`
      
      border-radius: 5px;
      box-sizing:border-box;
      box-sizing: border-box;
      margin-bottom: 7px;
`

export const Map = styled.iframe`
      
      box-sizing: border-box;
  
`