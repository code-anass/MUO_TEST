import styled from 'styled-components';

export const CarouselContainer = styled.div` 
width: 90%;
height: auto;
border: 1px solid black;
margin: 28px auto;
display: flex;
justify-content: center;
align-items: center;
`;
export const ImageContainer = styled.div` 
width:80%;
height: auto;
`;
export const Image =styled.img` 
width:100%;
height:100%;
`;
export const ArrowContainer = styled.div` 
font-size: 34px;
width:50px;
height:50px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
&:hover{
    background-color: #d9d9d9;
}
`;

