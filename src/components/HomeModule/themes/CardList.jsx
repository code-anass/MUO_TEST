import React, { useRef, useState } from "react";

import "./ThemesStyles.css";
import "./voyage_slider.css";
// import VoyageSlider from 'react-voyage-slider';

import { themesData } from "../../../data/ThemesData";
import { useEffect } from "react";
import { swapCards } from "./scripts/voyage_slider";

const classStyleNA = [
  "cardTheme first--card ",
  "cardTheme second--card ",
  "cardTheme third--card ",
  "cardTheme fourth--card ",
  "cardTheme fifth--card ",
];

const CardList = (props) => {
  // useEffect(() => {
  //   setInterval(() => {
  //     swapCards("left")
  //   }, 5000);
  // }, [])
  var interValId;
  // const onMouseOver = () => {
  //   interValId = setInterval(swapCards("left"), 3000);
  // }

  // const clearInterval = (interValId) => {

  //   clearInterval(interValId);
  //   console.log('clear..............');
  // }

  const targetRef = useRef(null);
  const [Visible, setIsVisible] = useState(false);

  const checkVisibility = () => {

    if (targetRef.current) {
      const { top, bottom } = targetRef.current.getBoundingClientRect();
      let isVisible = top < window.innerHeight && bottom >= 0;
      setIsVisible(isVisible);

    }
  };

  // useEffect(() => {

  //   if (Visible === true) { interCall() }
  //   else { clearCall() }

  // }, [Visible])

  // let inId
  // const interCall = () => {
  //   inId = setInterval(swapCards("left"), 3000);
  // }

  useEffect(() => {
    if (Visible) {
      const intervalId = setInterval(() => {
        // Call your function here
        swapCards("right");
      }, 5000); // 3 seconds in milliseconds

      // Clean up the interval when the component is unmounted
      return () => {
        clearInterval(intervalId);
      };
    }


    
  }, [Visible]);

 
  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div ref={targetRef} className="cardsList">
      <button className="cardsList__btn btn btn--left">
        <div className="icon">
          <svg>
            <use aria-hidden="true" xlinkHref="#arrow-left" />
          </svg>
        </div>
      </button>
      <div className="cards__wrapper">
        {themesData.map((el, index) => (
          <div className={classStyleNA[index]} key={"themes_item" + index}>
            <div className="card__image">
              <img src={el.imageLocal} alt="" />
            </div>
          </div>
        ))}
      </div>

      <button className="cardsList__btn btn btn--right">
        <div className="icon">
          <svg>
            <use xlinkHref="#arrow-right" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default CardList;
