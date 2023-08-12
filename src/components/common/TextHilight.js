import React from 'react'
import Highlighter from 'react-highlight-words'



export default function TextHilight(props) {
  return (
    <Highlighter
      searchWords={props.search}
      autoEscape={true}
      textToHighlight={props.text}
    />
  )
}

