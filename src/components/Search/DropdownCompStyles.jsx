import styled from 'styled-components'


export const DropdownWrapper = styled.select`
display: block;
margin-left: 40%;
width: 60%;
padding: .375rem 2.25rem .375rem .75rem;
-moz-padding-start: calc(.75rem - 3px);
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: ${({ theme }) => theme.color.dropdownContent};

/* font-size: ${({ theme }) => theme.fontSize.extraLarge}px;

font-family: ${({ theme }) => theme.fontName.Def_Font}; */
background-color: #fff;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
background-repeat: no-repeat;
background-position: right .75rem center;
background-size: 16px 12px;
border: 1px solid #dfe3ea;
border-radius: .25rem;
transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;

&:focus {
    border-color:  ${({ theme }) => theme.color.dropdownHighlighter};
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(76,120,221,.25)
}

`

export const DropDownItem = styled.option`
background-color: white;


`

export const Select = styled.select`
      
      display: block;
      width: 100%;
      line-height: normal;
      font-size: 14px;
      box-shadow: none;
      color: ${({ theme }) => theme.color.inputContact};
      text-transform: capitalize;
      background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
      padding: 7px 19px;
      border: 1px solid rgb(229, 229, 229);
      border-radius: 0px;
      transition: all 0.5s ease 0s;
      height: 38px;
      /* background-color: rgb(247, 247, 247); */
      /* -webkit-background-clip: border-box; */
      margin: 0px;
      /* font-family: Lato, sans-serif; */
      box-sizing: border-box;
      /* -webkit-background-clip: border-box; */
      
  font-size: ${({ theme }) => theme.fontSize.medium }px;
  color: ${({ theme }) => theme.fontColor.def_text_in};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`


export const SelectDownload = styled.select`
      
      display: block;
      width: 100%;
      line-height: normal;
      font-size: 14px;
      box-shadow: none;
      color: ${({ theme }) => theme.color.inputContact};
      text-transform: capitalize;
      background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
      padding: 7px 19px;
      border: 1px solid rgb(229, 229, 229);
      border-radius: 0px;
      transition: all 0.5s ease 0s;
      height: 38px;
      /* background-color: rgb(247, 247, 247); */
      /* -webkit-background-clip: border-box; */
      margin: 0px;
      /* font-family: Lato, sans-serif; */
      box-sizing: border-box;
      /* -webkit-background-clip: border-box; */
      
  font-size: ${({ theme }) => theme.fontSize.medium }px;
  color: ${({ theme }) => theme.fontColor.black};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`


export const Option = styled.option`
       box-sizing: border-box;
       font-size: ${({ theme }) => theme.fontSize.medium }px;
color: ${({ theme }) => theme.fontColor.def_color};
font-family: ${({ theme }) => theme.fontName.Def_Font};
`
