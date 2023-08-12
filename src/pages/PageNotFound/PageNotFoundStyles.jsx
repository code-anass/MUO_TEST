import styled from 'styled-components';

export const Container = styled.div`
color:  ${({ theme }) => theme.color.text};
background:  ${({ theme }) => theme.color.red};
align-items: center;
justify-content: center;
font-size: ${({fontBig}) => (fontBig ? '30px' : '26px')};
@media screen and (max-width: 768px) {
padding: 100px 0;
}
`;
export const InfoWrapper = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 1000px;
width: 100%;
/* background-color: red; */
`;
