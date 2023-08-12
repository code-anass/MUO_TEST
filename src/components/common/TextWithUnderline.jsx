/**
 * Author: Anitha Gorli
 * Date: 25-APR-2023
 */

import React from 'react'
import styled from 'styled-components';


import {  ContentWhite } from '../QText/QTextStyle';

const Lable = styled(ContentWhite)`
  max-width: 100%;
  width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
  box-sizing: border-box;
  overflow-clip-margin: content-box;
  overflow: clip;
  padding-bottom:2rem;
  text-decoration:none;
  font-weight: bold;
  margin-bottom: 35px;
  &:hover{
  text-decoration:underline;
  }
`
const TextWithUnderline = (props) => {


  return (
    <Lable onClick={props.onClick}
    >{props.text}
    </Lable>

  )
}

export default TextWithUnderline