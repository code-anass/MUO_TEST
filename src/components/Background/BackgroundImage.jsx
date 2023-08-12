import React, { useEffect, useState } from 'react'


import '../HomeModule/ModuleGridStyles.css';

const Background = (props) => {



  const basePath = 'assets/images/settings/';

  const imageLocal = basePath + "w3c.jpg";
  return (

    <div id={''}
      data-wow-delay="0.2s"
      style={{
        visibility: "visible",
        width: '100vw',
        height: 'auto',
        minHeight: '50vh',
        WebkitAnimationDelay: "0.2s",
        MozAnimationDelay: "0.2s",
        animationDelay: "0.2s",
        backgroundAttachment: "fixed",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        boxShadow: "inset 0 0 0 2000px rgb(7 8 24 / 67%)",
        backgroundImage: `url('${props.imageLocal ? props.imageLocal : imageLocal}')`

      }}
    >


      {props.children}
      <div style={{
        height: '20vh',
      }}>

      </div>


    </div>




  )
}

export default Background