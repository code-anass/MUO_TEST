import styled from 'styled-components';

export const Main = styled.div`
width: 100%;
padding: 1.875rem 1.875rem 1px;
overflow: hidden;
align-items: center;
justify-content: center;
display: flex;
background:${({ theme }) => theme.color.insightsBg};


`;

export const NoDataContain = styled.p`
margin-top: 1rem;
margin-left: 1.5rem;
opacity: 0.5;
color: #6c757d;
font-weight: 600;
align-item: flex-start;
font-size: 1rem;
`;

export const HRLine = styled.hr`
margin: 1rem 1rem 0 1rem;
opacity: 1;
color:  ${({ theme }) => theme.color.text};
`;

export const MainContainer = styled.div`
--bs-gutter-x: 1.75rem;
    --bs-gutter-y: 0;
width:100%;
max-width:1280px;
height: 100%;
justify-content: center;
align-items: center;
padding: 1.875rem 1.875rem 1px;
margin-bottom: 30px;
overflow: hidden;
display: block;
margin-top: 1rem;
// margin-right: 10rem;
// margin-left: 10rem;
`;

export const SubMainContainer = styled.div`
--bs-gutter-x: 1.75rem;
--bs-gutter-y: 0;
display: flex;
flex-wrap: wrap;
margin-top: calc(-1 * var(--bs-gutter-y));
margin-right: calc(-.5 * var(--bs-gutter-x));
margin-left: calc(-.5 * var(--bs-gutter-x));
`;

export const SubSubMainContainer = styled.div`
flex: 0 0 auto;
width: 100%;
`;

export const TittleContainer = styled.div`
margin: -6rem 0 0 0;
height: 105px;
background-image: ${({url})=>("url("+url+")")};
background-position: 0 50%;
background-size: cover;
box-sizing: border-box;
display: block;
opacity: 0.6;
// filter: brightness(50%);
// box-shadow: inset 0 0 0 2000px rgb(7 8 24 / 67%),


`;

export const JustifyContent = styled.div`
margin-top: .5rem;
justify-content: space-between;
display: flex;
`;

export const ContentCard = styled.div`
position: relative;
display: flex;
flex-direction: column;
word-wrap: break-word;
background-clip: border-box;
background: white;
margin-bottom: 5px;
border: 1px solid rgba(0,0,0,.125);
border-radius: 0.25rem
`;

export const SubContentCard = styled.div`
--bs-gutter-x: 1.75rem;
--bs-gutter-y: 0;
display: flex;
flex-wrap: wrap;
overflow: hidden;
margin-top: calc(-1 * var(--bs-gutter-y));
margin-right: calc(-.5 * var(--bs-gutter-x));
margin-left: calc(-.5 * var(--bs-gutter-x));
`;

export const SubSubContentCard = styled.div`
flex: 0 0 auto;
width: 100%;
padding-right: calc(var(--bs-gutter-x) * .5);
padding-left: calc(var(--bs-gutter-x) * .5);
margin-top: var(--bs-gutter-y);
position: relative;
min-height: 1px;
box-sizing: border-box;
display: block;
`;

export const ContentCardBody = styled.div`
padding: 1rem 1rem;
box-sizing: border-box;
display: block;
`;

export const ContainerCard = styled.div`
width: 100%;
padding-right: var(--bs-gutter-x,.875rem);
padding-left: var(--bs-gutter-x,.875rem);
margin-right: auto;
magin-left: auto;
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

export const Container = styled.div`
color:  ${({ theme }) => theme.color.text};
background:  ${({ theme }) => theme.color.bgLighter};
align-items: stretch;
justify-content: flex-start;
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
