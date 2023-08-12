import React from 'react'
import QText from '../QText/QText'
import { BRWRAPPER, EnvWrapper, ParagraphCWrapper } from './ContactUsDetailStyles'

export default function ContactUsDetailComponent(props) {
      
      return (
            props?.data?.map((value, index) => (
                  <ParagraphCWrapper key={index}>
                        <EnvWrapper
                              src={value.title}
                              alt=""

                        />
                        <BRWRAPPER/>
                        <QText type={'s'} >{props?.values[index]}</QText>
                        </ParagraphCWrapper>
            ))
      )
}
