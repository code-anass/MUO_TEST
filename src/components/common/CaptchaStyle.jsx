import styled from 'styled-components';
export const ImgWraper = styled.div`
      vertical-align: middle;
      border-style: none;
      box-sizing: border-box;
`

export const ImageBlock = styled.div`
      
      -webkit-box-flex: 0;
      flex: 0 0 25%;
      max-width: 28%;
      position: relative;
      width: 100%;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
      box-sizing: border-box;
`

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
`

export const LabelPara = styled.p`
      
      font-weight: 400;
      font-family: Lato, sans-serif;
      margin: 0px;
      font-size: 14px;
      margin-top: 0px;
      margin-bottom: 0px;
      box-sizing: border-box;
`

export const InputBlock = styled.input`
      
      display: block;
      width: 100%;
      line-height: 27px;
      font-size: 14px;
      box-shadow: none;
      color:${({ theme }) => theme.color.inputContact};
      text-transform: capitalize;
      background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
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

      &:focus {
    border-color:  #28b463;//${({ theme }) => theme.color.dropdownHighlighter};
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(76,120,221,.25)
}
`
export const H4 = styled.h4`
      
                              font-weight: bold;
                               display: inline-block;
                               overflow: hidden; 
                               background: white;
                              width: 130px;
                              color:  ${({ theme }) => theme.color.bgBlue};
                              font-family: sans-serif; height: 44px;
                              padding-top: 8px;
                              padding-left: 9px


`