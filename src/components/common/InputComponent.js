import React from 'react'
import { MAX_LENGTH_NAME } from '../../utils/Constants'
import { LabelInput } from './InputComponentStyle'

export default function InputComponent(props) {
  return (
      <LabelInput
      type="text"
      style={props.style}
      value={props.inputValue}
      name="ContactForm[email]"
      aria-required="true"
      maxLength={props.maxLength || MAX_LENGTH_NAME}
      onChange={(e) => props.data(e.target.value)}
    />
  )
}
