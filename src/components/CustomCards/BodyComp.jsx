import React from 'react';
import '../../pages/W3Content//W3CStyles.css'



const BodyComp = (props) => {

  return (

    <div style={{ "overflow": "hidden", width: "100vw" }}>

      <div className={props.bg?"transparent":"bg-white" }>
        <div className={props.bg?"col-md-12 transparent":"col-md-12 bg-white"}>
          <div className={props.nopadding ? "text-white" : "section-padding text-white"} >
            {props.children}
          </div>
        </div>
      </div>

    </div>

  )
}

export default BodyComp