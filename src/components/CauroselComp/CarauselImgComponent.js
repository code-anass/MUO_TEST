import React from 'react'
import { ContainerCarausel, ImgContainer } from './CarauselIndexStyle'


export default function CarauselImgComponent(props) {
  return (
    props?.data?.map((value, index) => (
      <ContainerCarausel>
        <ImgContainer  key={index}
          src={value?.title}
          alt="profile"
        />
      </ContainerCarausel>
    ))
  )
}
