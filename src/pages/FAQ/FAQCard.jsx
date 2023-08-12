/**
 * Author: Anitha Gorli
 * Date: 2-MAY-2023
 */
import React, {  useState } from 'react';
import QText from '../../components/QText/QText';
import { ArrowContainer, CardAnswerBody, CardAnswerContainer, CardHeader, CardQuestionContainer, FAQAnswer, FAQCardContainer, DownIcon, UpIcon, FAQItemSpace } from './FAQStyles';
import FAQAnswerItem from './FAQAnswerItem';




const FAQCard = ({ t, content }) => {

  const { title, desc, data, data1, listStyle, startPosition, pos } = content || {}

  const [isExpanded, setIsExpanded] = useState(false);


  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>

      <FAQCardContainer>
        <CardQuestionContainer>
          <CardHeader id={`question${pos}`} onClick={handleClick}>

            <QText
              type="content_white" tx={title}></QText>
            <ArrowContainer>
              {isExpanded ? <DownIcon onClick={handleClick} /> : <UpIcon onClick={handleClick} />}
            </ArrowContainer>
          </CardHeader>
        </CardQuestionContainer>


        <CardAnswerContainer
          expanded={isExpanded}
          id={`answer${pos}`}
        >

          <CardAnswerBody>

            <FAQAnswer>{t(desc)}</FAQAnswer>


            <FAQAnswerItem t={t} listStyle={listStyle} data={data} startPosition={startPosition}></FAQAnswerItem>
          
            <FAQAnswerItem t={t} listStyle={listStyle} data={data1} startPosition={startPosition}></FAQAnswerItem>

          </CardAnswerBody>
        </CardAnswerContainer>

      </FAQCardContainer>
      <FAQItemSpace />
    </>
  )
}

export default FAQCard