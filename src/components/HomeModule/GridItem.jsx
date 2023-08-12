import React from 'react'
import { useNavigate } from "react-router-dom";

import './ModuleGridStyles.css';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ROUTE_COMMING_SOON } from '../../utils/Constants';


const GridItem = (props) => {

  const fontColor = useSelector(state => state.fontColors);
  const fontName = useSelector(state => state.fontNames);


  const { t } = useTranslation();
  let navigate = useNavigate();


  const onClick = (history) => {
    navigate(ROUTE_COMMING_SOON);

  }

  return (

    <div className="gridinfo">
      <h3 className="grid-title" style={{
        color: fontColor.def_text_inverse_color,
        fontFamily: fontName.Def_Font
      }}>
        {t(props.data.title)}
      </h3>
      <p className="gridexerpt" style={{ "--primary-color": fontColor.def_text_inverse_color, "--primary-font-fam": fontName.Def_Font}} >
        {t(props.data.desc)}
      </p>

      <button onClick={onClick} className="btn btn-common" style={{
        fontFamily: fontName.Def_Font
      }}>
        {props.btnTitle}
      </button>
    </div>



  )
}

export default GridItem