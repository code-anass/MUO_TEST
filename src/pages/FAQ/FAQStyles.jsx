
import styled from 'styled-components'
import { ChevronDown, ChevronUp } from 'bootstrap-icons-react';


export const DownIcon = styled(ChevronDown)`
  width: ${({ size }) => size || '14px'};
  height: ${({ size }) => size || '14px'};
`;


export const UpIcon = styled(ChevronUp)`
  width: ${({ size }) => size || '14px'};
  height: ${({ size }) => size || '14px'};
`;


export const FAQCardContainer = styled.div`
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
height: auto;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
min-width: 0;
word-wrap: break-word;
background-color: #1d2958;
background-clip: border-box;
border: 1px solid rgba(0,0,0,.125);
border-radius: 0.25rem;
`

export const CardQuestionContainer = styled.div`
padding: 15px;
border-bottom: 1px solid white;
`


export const CardHeader = styled.div`
padding-left: 2%;
letter-spacing: 0.1em;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
`

export const ArrowContainer = styled.div`
width: 20px;
height: 20px;
display: flex;
justify-content: center; `




export const FAQItemSpace = styled.span`
padding: 2px;
content:  ;
`

export const CardAnswerContainer = styled.div`
  max-height: ${(props) => (props.expanded ? '800px' : '0')};
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;


`

export const CardAnswerBody = styled.div`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
background: transparent;
padding: 1.25rem 56px;
align-items: flex-start;
justify-content: flex-start;
justify-items: flex-start;
;`

export const FAQQuestion = styled.div`
font-family: ${({ theme }) => theme.fontName.Def_Font};
font-size: ${({ theme }) => theme.fontSize.h4}px;
color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
`;


export const FAQAnswer = styled.div`
font-family: ${({ theme }) => theme.fontName.Def_Font};
font-size: ${({ theme }) => theme.fontSize.h5}px;
color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
line-height: 24px;
`;


export const FAQAnswerBullet = styled.li`
font-family: ${({ theme }) => theme.fontName.Def_Font};
font-size: ${({ theme }) => theme.fontSize.h5}px;
color: ${({ theme }) => theme.fontColor.def_text_inverse_color};
line-height: 12px;
list-style: disc;
margin-left: 1.0em;
`;


