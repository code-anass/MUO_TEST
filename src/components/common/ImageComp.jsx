import React from 'react'
import styled from 'styled-components';


import '../HomeModule/ModuleGridStyles.css';


const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 200px; 
  vertical-align: middle;
  border-style: none;
  box-sizing: border-box;
  overflow-clip-margin: content-box;
  overflow: clip;
  background: white
`
const ImageComp = (props) => {

  return (

    <Image
      src={props.image}
      style={props.style}
    />

  )
}

export default ImageComp