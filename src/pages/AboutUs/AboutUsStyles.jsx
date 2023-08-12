import styled from 'styled-components';

export const Container = styled.div`
color:  ${({ theme }) => theme.color.text};
background:  ${({ theme }) => theme.color.bgLighter};
align-items: strech;
//justify-content: center;
display: flex;
//flex-wrap: unwrap
flex-direction: row;
height: 100%;
width:100%;
padding-top: 20px;
@media screen and (max-width: 768px) {
padding: 100px 0;
}
`;

export const MainContainer = styled.div`
align-items: center;
justify-content: center;
position: relative;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-position: center center;
overflow: auto;
background-size: cover;
`;

export const BodyWrapper = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
// padding:10%;
// margin: 10%;
// width: 100%;
// overflow: visible;

`;


export const LeftCont = styled.div`
/* flex: 20%;
min-width: 350px;
padding: 0.5rem;
display: flex;
// flex-wrap: wrap;
height: auto;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column; */

        width: 20%;
        min-width: 350px;
        padding: 8px;
        box-sizing: border-box;
`;

export const RightCont = styled.div`
margin-bottom: 0.5rem;
padding-right: 10px;
flex: 80%;
justify-content: flex-start;
align-content: flex-start;
/* align-item: flex-start; */
height: 100%;
width: 90%;
`;


export const RightContainer = styled.div`
height: 100%;
width: 100%;
align-items: stretch;
`;

export const TitleButton = styled.button`

    /* margin-top: 5px;
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.large}px;
    font-family: ${({ theme }) => theme.fontName.Def_Font};
    display: block;
    font-weight: 700;
    padding: 10px;
    cursor: pointer; */
    background: ${({ theme }) => theme.color.bgLighter};
    color: ${({ theme }) => theme.fontColor.def_color};

    cursor: pointer;
      /* background-color:rgb(191, 191, 191); */
      margin-top: 5px;
      font-size: 18px;
      font-weight: 700;
      padding: 10px;
      width: 80%;
      font-family: Lato, sans-serif;
      margin: 5px 0px 0px;
      margin-bottom: 0px;
      box-sizing: border-box;
      background-color:${({ theme }) => theme.color.bgLighter};
      display: flex;
    justify-content: flex-start;
    /* padding-top: 5px;  */

    

&:focus{
    background:  ${({ theme }) => theme.color.bgGrey};
    color: ${({ theme }) => theme.color.text};
}
`;
export const SpanL = styled.span`
    margin-left: 20px;

`

export const InfoWrapper = styled.p` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 1000px;
width: 100%;
/* background-color: red; */
`;
