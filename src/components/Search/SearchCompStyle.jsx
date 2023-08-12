import styled from 'styled-components'



// 








export const SearchBox = styled.div`
   
   text-align: center;
        box-sizing: border-box;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row wrap;
        -webkit-box-align: center;
        align-items: center;

/* &:checked{
    width: 100%
} */


`

export const Input = styled.input`
       width: 60%;
        display: block;
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        padding: 6px 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: ${({ theme }) => theme.color.searchCplor};
        /* color: rgb(51, 65, 85); */
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(223, 227, 234);
        appearance: none;
        border-radius: 4px;
        transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
        margin: 0px;
        box-sizing: border-box;
        box-shadow: none;
        text-transform: capitalize;
        background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box padding-box;
        overflow: visible;

        &&:focus{
    color: ${({ theme }) => theme.color.searchCplor};
    background-color: #fff;
    border-color: ${({ theme }) => theme.color.dropdownHighlighter};
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(76,120,221,.25);
}
     
`

export const Button = styled.button`
   margin-left: 1em;
   color:${({ theme }) => theme.color.searchwhite};
        background-color: rgb(101, 163, 13);
        border-color:${({ theme }) => theme.color.borderColor};
        display: block;
        font-weight: 600;
        line-height: 24px;
        color: ${({ theme }) => theme.color.searchwhite};
        text-align: center;
        cursor: pointer;
        user-select: none;
        border: 1px solid rgb(101, 163, 13);
        padding: 6px 12px;
        font-size: 16px;
        border-radius: 4px;
        transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
        appearance: button;
        text-transform: uppercase;
        font-family: Lato, sans-serif;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: visible;
`
export const Span = styled.span`

        transition: color 0.5s ease 0s;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
       align-items: center;
`

export const Icon = styled.span`
        font-size: 10px;
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        overflow-wrap: normal;
        direction: ltr;
        font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
        transition: color 0.5s ease 0s;
        box-sizing: border-box;
        text-align: center;
`


export const ErrorText = styled.span`
`