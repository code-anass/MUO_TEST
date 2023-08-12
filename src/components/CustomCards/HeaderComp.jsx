import React from 'react';
import { HeaderContainer, TextWrapper } from './HeaderStyles'
import QText from '../QText/QText';
import '../../pages/W3Content//W3CStyles.css'


const HeaderComp = ( props ) => {

  const { headerTitle , styleHead, styleWraper } = props || {};


  return (
    <HeaderContainer style={{styleHead}}>
      <TextWrapper style={styleWraper}>
        <QText tx={headerTitle} style = {{}} type='head'> </QText>

      </TextWrapper>
   
    </HeaderContainer>

  )
}

export default HeaderComp