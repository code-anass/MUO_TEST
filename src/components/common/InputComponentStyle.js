import styled from 'styled-components';

export const LabelInput = styled.input`
      
      display: block;
      width: 100%;
      line-height: 27px;
      font-size: 14px;
      box-shadow: none;
      color:${({ theme }) => theme.color.inputContact};
      // text-transform: capitalize;
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
      border-color:  ${({ theme }) => theme.color.inputFocus};
      outline: 0;
      box-shadow: none;
      }
`