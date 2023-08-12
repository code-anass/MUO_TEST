/**
 * Author: Anitha Gorli
 * Date: 25-MAY-2023
 */

import React from 'react'
import styled from 'styled-components';
import QText from '../QText/QText';
import { ChevronDown } from 'bootstrap-icons-react';



const DownIcon = styled(ChevronDown)`
  width: ${({ size }) => size || '14px'};
  height: ${({ size }) => size || '14px'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
`;

const TextWithDownArrow = (props) => {

  const { t, text, left, right } = props || {}

  return (
    <div>

      < QText type="nav" >
        {left}
        {t(text)}
        {right? right:(
        <DownIcon size={"15px"} margin={"5px"} />
        )}
      </QText>

    </div>

  )
}

export default TextWithDownArrow