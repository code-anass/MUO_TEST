import React from "react";
// import "./carousel.min.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarauselImageFilter } from "../../data/CarauselData";
import "../../index.css";
import {
  ContainerCarausel,
  ImgContainer,
  RenderArrowNextCSS,
  RenderArrowNextLeftCSS,
} from "./CarauselIndexStyle";
import CarauselImgComponent from "./CarauselImgComponent";
import styled from "styled-components";

import { ChevronLeft, ChevronRight } from "bootstrap-icons-react";

const LeftIcon = styled(ChevronLeft)`
  width: ${({ size }) => size || "24px"};
  height: ${({ size }) => size || "24px"};
  margin: ${({ margin }) => margin || "50px"};
  padding: ${({ padding }) => padding || "0"};
  color: ${({ color }) => color || "white"};
`;

const Rightcon = styled(ChevronRight)`
  width: ${({ size }) => size || "24px"};
  height: ${({ size }) => size || "24px"};
  margin: ${({ margin }) => margin || "50px"};
  padding: ${({ padding }) => padding || "0"};
  color: ${({ color }) => color || "white"};
`;

const CauroselComp = (props) => {
  return (
    <Carousel
      axis="horizontal"
      key={props.key}
      showStatus={false}
      showIndicators={false}
      className="relative"
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <RenderArrowNextLeftCSS onClick={clickHandler}>
            <LeftIcon size={"32px"} />
          </RenderArrowNextLeftCSS>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <RenderArrowNextCSS onClick={clickHandler}>
            <Rightcon size={"32px"} />
          </RenderArrowNextCSS>
        );
      }}
    >
      {/* <CarauselImgComponent data={CarauselImageFilter}/> */}

      {props?.children[0]}

      {/* { CarauselImageFilter?.map((val, i) => (
        <ContainerCarausel key={i}>
          <ImgContainer
            src={val.title}
            alt="profile"
          />
        </ContainerCarausel>
      ))} */}
    </Carousel>
  );
};

export default CauroselComp;
