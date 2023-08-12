import styled from 'styled-components';

export const TextContainer = styled.div`
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 30vh;
    justify-content: center;
    align-items: center;
    position: relative;

  `
export const OverLay = styled.div`
    background-color: rgba(75,85,99,.7);
    height: 30vh;

`

export const TextAligner = styled.div`
  text-align: center;
  margin-left:20%;
  margin-right:20%;
  padding-top: 12vh;
  padding-bottom: 6rem!important;
  

  
  `

