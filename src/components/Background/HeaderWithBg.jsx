import React from 'react';
import QText from '../QText/QText';
import { TextAligner, TextContainer, OverLay } from './HeaderWithBgStyles.jsx';

const HeaderWithBg = (props) => {

  const { isHeaderHidden, title, image } = props || {}
  return (

    <TextContainer backgroundImage={image}>
      <OverLay>
        <TextAligner>
          {!isHeaderHidden &&
            <QText type="head" style={{}}>{title}</QText>
          }
        </TextAligner>
      </OverLay>
    </TextContainer>
  );
};

export default HeaderWithBg;
