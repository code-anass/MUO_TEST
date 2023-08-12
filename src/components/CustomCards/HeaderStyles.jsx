import styled from 'styled-components';

export const HeaderContainer = styled.div`
// color:  ${({ theme }) => theme.color.text};
// align-items: center;
// justify-content: center;
width: 100%;
background: transparent;
height: 30vh;

font-size: ${({ fontBig }) => (fontBig ? '30px' : '26px')};
`;
export const InfoWrapper = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
width: 100%;
`;

export const TextWrapper = styled.div` 
// padding: 20px;
margin-top: 15vh;
height:100%;
align-items:center;
justify-content: center;
color: white;
`;

export const TextWrapperO = styled.div` 
padding: 16px;
margin-top: 70px;

color: white;
`;
