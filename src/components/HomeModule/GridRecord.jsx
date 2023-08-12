import React, { useEffect, useState } from 'react'
import useVisibility from "../../utils/useVisibility";


import './ModuleGridStyles.css';

const GridRecord = (props) => {
  const [isFirstVisible, firstRef] = useVisibility(-100, 100);

  const [visibleCount, setVisibleCount] = useState(0)


  useEffect(() => {

    if (isFirstVisible) {
      setVisibleCount(visibleCount + 1)
    }
  }, [isFirstVisible]);

  return (

    <div ref={firstRef} id={''}
      className={isFirstVisible && visibleCount <= 1? props.classA : props.class}
      data-wow-delay="0.2s"
      style={{
        visibility: "visible",
        WebkitAnimationDelay: "0.2s",
        MozAnimationDelay: "0.2s",
        animationDelay: "0.2s"
      }}
    >

      <div
        className="gridimg"
        style={{
          backgroundImage: props.useLocal ? `url(${props.data.imageLocal})` :
            `url(${props.data.image})`
        }}
      >
        &nbsp;
      </div>

      {props.children}

    </div>




  )
}

export default GridRecord