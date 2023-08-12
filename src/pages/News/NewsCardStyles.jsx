import styled from 'styled-components';

export const NewsMainCard = styled.div`
box-shadow: 0px 0px 5px rgb(0 0 0 / 17%);
-webkit-transition: all 300ms ease-in-out;
transition: all 300ms ease-in-out;
margin-bottom: 1rem;
`
export const ButtonOptionNews = styled.button`
/* float: left; */
margin-top: 5px;
  font-weight: bolder;
  background-color: ${({ theme }) => theme.color.buttonBG} !important;
  /* float: right; */
  color: ${({ theme }) => theme.color.searchwhite}; // rgb(255, 255, 255);
  text-transform: uppercase;
  box-sizing: border-box;
  margin-left: 10px;
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

export const CardBackground = styled.div`
padding: 1em;
background: #fff;
background-color: #4d557c !important;
overflow: hidden;
text-align: center;`