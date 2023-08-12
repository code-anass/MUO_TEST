import styled from 'styled-components';


export const CopyRight = styled.p`
background:  ${({ theme }) => theme.color.copyRightBackground};
height: 60px;
line-height: 52px;
margin: 0;
font-weight: 400;
display: flex;
text-align: center;
flex-direction: row;
align-items: center;
justify-content: center;
font-size: ${({ theme }) => theme.fontSize.medium}px;
`;

export const CRLeftText = styled.div`
padding-right: 3px;
color:   ${({ theme }) => theme.color.copyRightText};
`;


export const CRRightText = styled.div`
color:   ${({ theme }) => theme.color.bgBlue};
font-size: 13px;
font-weight: 900;

&:hover {
    color: ${({ theme }) => theme.color.copyRightHover};
    }
`;
