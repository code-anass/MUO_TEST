import React, { useState } from 'react';
import { LineDivider, TextLines } from './W3CStyles';
import './W3CStyles.css'

const SectionTop = ({ t }) => {


  return (

    <div >

      <div style={{ textAlign: "left", color: "black", backgroundColor: "white" }}>
      <TextLines
          className="wow fadeInDown animated"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            WebkitAnimationDelay: "0.2s",
            MozAnimationDelay: "0.2s",
            animationDelay: "0.2s"
          }}
        >
          {t("w3c.desc1")}
        </TextLines>
        <br />
        <TextLines
          className="wow fadeInDown animated"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            WebkitAnimationDelay: "0.2s",
            MozAnimationDelay: "0.2s",
            animationDelay: "0.2s"
          }}
        >
          {t("w3c.desc2")}

        </TextLines>
      </div>
      <LineDivider />

    </div>

  )
}

export default SectionTop