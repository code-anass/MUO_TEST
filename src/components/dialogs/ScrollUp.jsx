import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowUp, MdArrowCircleUp } from 'react-icons/md';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Background = styled.div`
color: #007bff;
 background-color: transparent;
 transition: all 0.5s linear;

`;
const BackToTop = styled.div`
display: flex;
/* justity-content: center; */
position: fixed;
bottom: 120px;
right: 15px;
text-decoration: none;
background: #4154f1;
height: 40px;
border-radius: 4px;

transition: all 0.2s ease-in-out;
box-shadow: 0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%);
z-index: 3;
`;

const Inner = styled.div`
  font-style: italic;
  display: block;
  margin: 10px;
  opacity: 1;
  color: #fff;
  text-align: center;
  transition: all 0.2s ease-in-out;

`;


export const ScrollUp = () => {
  const [scrollIndicator, setScrollIndicator] = useState(true);


  const closeModal = e => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

  };


  useEffect(
    () => {
      //Button will be displayed after scrolling to 300 px
      const handleScrollButtonVisibility = () => {
        window.pageYOffset > 300 ? setScrollIndicator(true) : setScrollIndicator(false);
      }
      document.addEventListener('scroll', handleScrollButtonVisibility);
      return () => document.removeEventListener('scroll', handleScrollButtonVisibility);
    },
    []
  );

  return (
    <>
      {scrollIndicator ? (
        <Background>
          <BackToTop onClick={closeModal} style={{ display: "block" }}>
            <Inner style={{ display: "flex", justifyContent:"center"}} >
              <ArrowUpwardIcon  />
            </Inner>

          </BackToTop>
        </Background>) : null}
    </>
  );
};