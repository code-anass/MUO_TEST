/**
 * Author: Anitha Gorli
 * Date: 24-MAR-2023
 */
import React from 'react';
import '../W3Content/W3CStyles.css'
import { FAQAnswer, FAQAnswerBullet } from './FAQStyles';

const FAQAnswerItem = (props) => {

  const { t, data, listStyle, startPosition } = props || {}



  return (
    <>



      {listStyle === 'buleten' ? (

        data?.map((el, index) =>
        (


          <ul>

            {index >= startPosition ?
              <FAQAnswerBullet key={"faqInnerItem"+index}>
                {t(el.content) }

              </FAQAnswerBullet>
              :
              <FAQAnswer key={"faqInnerItem"+index} style={{ marginTop: "2em", marginBottom:"-0.5em" }} >{t(el.content)}</FAQAnswer>



            }

          </ul>


        ))
      ) :
        (
          data?.map((el, index) =>
          (

            <FAQAnswer key={"faqInnerItem"+index}>{t(el.content)}</FAQAnswer>


          ))


        )

      }




    </>
  )
}

export default FAQAnswerItem