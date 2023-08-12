import React from 'react'

import './ThemesStyles.css';
import './voyage_slider.css';
// import VoyageSlider from 'react-voyage-slider';



import { themesData } from '../../../data/ThemesData'


const classStyleNA = [
  "apps__bg__image first--image ",
  "apps__bg__image second--image ",
  "apps__bg__image third--image ",
  "apps__bg__image fourth--image ",
  "apps__bg__image fifth--image ",
]


const BgList = () => {

  return (


    <div className="apps__bg">

      {themesData.map((el, index) => (

        <div className={classStyleNA[index]} key={"themes_item_bg"+index}>
          <img
            src={el.imageLocal}
            alt=""
          />
        </div>

      ))}




    </div>

  )
}

export default BgList