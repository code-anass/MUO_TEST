import styled from 'styled-components';

export const InfoContainer = styled.div`
color:  ${({ theme }) => theme.color.text};
background:  ${({ theme }) => theme.color.bg};
@media screen and (max-width: 768px) {
padding: 100px 0;

}
`;
export const InfoWrapper = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
/* background-color: red; */
`;

export const TextWrapper = styled.div` 
padding: 16px;
/* background-color: blue; */
`;

// export const TopLine = styled.p` 
// color: #01bf71;
// font-size: 16px;
// line-height: 16px;
// font-weight: 700;
// letter-spacing : 1.4px;
// text-transform: uppercase;
// margin-bottom: 16px;
// `;

export const Heading = styled.h1` 
font-size: ${({ theme }) => theme.fontSize.extremeLarge + 4}px;
line-height: 1.1;
color: ${({ theme }) => theme.color.text};
line-height: 52px;
padding-bottom: 20px;
font-weight: 700;
text-align: center;
text-transform: uppercase;
position: relative;
margin-bottom: 10px;
&::before{
  position: absolute;
  content: '';
  left: -30px;
  right: 0;
  margin: auto;
  bottom: 6px;
  width: 48px;
  height: 1px;
  background-color: #28b463;
}
&::after{
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    margin: auto;
    bottom: 2px;
    width: 48px;
    height: 1px;
    background-color: #28b463;
}
@media screen and (max-width: 480px){
    font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
}

`;

export const Subtitle = styled.p`
margin-bottom: 35px;
font-size: ${({ theme }) => theme.fontSize.medium}px;
line-height: 24px;
color: ${(darkText) => (darkText ? '#010606' : '#fff')};
`;

// export const BtnWrap = styled.div`
// display: flex;
// justify-content : flex-start;
// `;
// export const ImgWrap = styled.div`
// max-width: 555px;
// height: 100%;
// `;
// export const Img = styled.img`
// width: 100%;
// margin: 0 0 10px 0;
// padding-right: 0;
// `;

export const GridMain = styled.div` 
 width: 100%;
  background: white;
  // box-shadow: inset 0 0 0 1px #ddd;
  padding: 15px;
  float: left;
  position: relative;
`;