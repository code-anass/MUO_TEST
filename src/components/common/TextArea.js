import React from 'react'
import { MAX_LENGTH_REMARKS } from '../../utils/Constants'
import { TextWrap } from './TextAreaStyle'

export default function TextArea(props) {
  return (
      <TextWrap
                        onChange={(e) => props.data(e.target.value)}
                        name="ContactForm[body]"
                        rows={3}
                        value={props.inputValue}
                        aria-required="true"
                        defaultValue={""}
                        maxLength={props.maxLength || MAX_LENGTH_REMARKS}

                      />
  )
}
