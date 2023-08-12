
/**
 * Author: Amit
 * Date: 03-MAY-2023
 */
import React, { useState, useEffect } from 'react'
import { H4, ImageBlock } from './CaptchaStyle';
import { charsArray } from '../../utils/Constants';

export default function Captcha(props) {

      const [captchaData, setCaptchaData] = useState('')

      function createCaptcha(lengthOtp) {

            let index = charsArray[Math.floor(Math.random() * charsArray.length)];
            for (let i = 0; i < lengthOtp; i++) {

                  index = index + charsArray[Math.floor(Math.random() * charsArray.length)]
            }
            return index
      }

      const changeCaptch = (e) => {
            e.preventDefault()
            let captchaNew = createCaptcha(5);
            setCaptchaData(captchaNew)
            props.captchaCreated(captchaNew)

      }

      useEffect(() => {
            let captchaNew = createCaptcha(5);
            setCaptchaData(captchaNew)
            props.captchaCreated(captchaNew)
      }, [])
      return (
            <React.Fragment>
                  <ImageBlock onClick={changeCaptch}>
                        <H4>{captchaData}</H4>
                  </ImageBlock>

            </React.Fragment>
      )
}




