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

export const MainTable = styled.table`
justify-content: center;
align-items: center;
margin-top: 1rem;
margin-left: 1.5rem;
border-radius: 2px;
border-width: 2px;
border-color: ${({ theme }) => theme.color.black};
`;

export const TableTh = styled.th`
border: 1px solid black;
padding: 8px;
text-align: center;
background-color: ${({ theme }) => theme.color.light};
color: ${({ theme }) => theme.color.black}
`;

export const TableTd = styled.td`
border: 1px solid black;
padding: 8px;
text-align: center;
`;


export const ActionButton = styled.button`
justify-content: center;
align-items: center;
margin-top: 1rem;
margin-left: 1.5rem;
padding:  0.5rem 1rem 0.5rem 1rem;
border-radius: 5px;
transition: all 0.2s ease-in-out ;
color: ${({ theme }) => theme.color.white};
border-width: 2px;
background:${({ theme }) => theme.color.bgGreen};
`;

export const ContentCard = styled.div`
position: relative;
display: block;
//flex-direction: column;
word-wrap: break-word;
background-clip: border-box;
background: white;
margin-bottom: 5px;
border: 1px solid rgba(0,0,0,.125);
padding: 1rem;
border-radius: 0.25rem
`;

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
line-height: 1;
transition: 0.5s;
position: fixed;
overflow: hidden;
background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
z-index: 100;

`;

export const FormContainer = styled.div`
padding: 20px;

// display: flex;
// justify-content: center;
// align-items: center;
border-radius: 4px;
// box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
@media only screen and (max-width: 600px) {
    padding: 2px;

}
`;

export const FormContent = styled.div`
padding: 10px 20px;
display: flex;
font-size: 15px;
color: ${({ theme }) => theme.color.text};
align-items: center;
font-weight: 700; 
justify-content: start;
cursor: pointer;
display: block;

@media only screen and (max-width: 600px) {
    padding: 1px 2px;

}
  
`;


export const FormInput = styled.input`
border-radius: 4px;
border: 1px solid black;
margin: 3px; 
line-height: 1;
`;