import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import QText from '../QText/QText';



const BackgroundMain = styled.div`
  // width: 100%;
  // height: 100%;
  background: rgba(0, 0, 0, 0.8);

   
  `;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
flex-direction: column;
  // justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999999;




`;

const ModalWrapper = styled.div`
  width: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: white;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: top;
  // justify-content: space-between;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin: 20px;

 

@media only screen and (min-width: 1440px) {
  width: 600px;
}

@media only screen and (max-width: 1024px) {
  width: 600px;
}

@media only screen and (min-width: 1024px) {
  width: 600px;
}
@media only screen and (max-width: 768px) {
  width: 500px;
}

@media only screen and (max-width: 576px) {
  width: 400px;
}


@media only screen and (max-width: 375px) {
  width: 350px;
}

@media only screen and (max-width: 280px) {
  width: 90%;
  height: 50%;
  overflow:auto;

}


@media only screen and (max-height: 1400px) {
  top: 30%;
}

@media only screen and (max-height: 1200px) {
  top: 30%;

}
@media only screen and (max-height: 800px) {
  top: 20%;
}

@media only screen and (max-height: 400px) {
  top: 10%;

}


`;
const Header = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  
  color:   ${({ theme }) => theme.fontColor.def_color};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fontName.Def_Font};`


const ModalContent = styled.div`
display: flex;
flex-direction: column;
border-top: 1px solid #e9ecef;
line-height: 35px;
font-size:18px;
  justify-content: center;
  align-items: center;
  color: #212121;
  padding-left: 30px;
  padding-right: 30px;


padding-top: 20px;
// padding-bottom: 20px
  p {
    margin-bottom: 1rem;
    text-align: center;
  }

  button {
    padding: 10px 24px;
    background: #007bff;
    color: #fff;
    border: none;
  }


@media only screen and (max-width: 370px) {
  height: 60%;
  overflow:auto;

}
`;

const ModalFooter = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
padding: 1rem;
border-top: 1px solid #e9ecef;

`;

const ModalButton = styled.div`
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  display: inline-block;
  color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    &:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
  }
}`;
const CloseModalButton = styled(MdClose)`
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #111;
  opacity: .5;
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 10;

  &:hover {
    transition: all 0.25 ease-in-out;
    opacity: 1;
  }`




export const Disclaimer = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = e => {
    setShowModal(false);
    localStorage.setItem('disclaimerShown', 'true');

    if (modalRef.current === e.target) {
      setShowModal(false);
      // Store a flag in local storage to indicate the disclaimer has been shown
      localStorage.setItem('disclaimerShown', 'true');

    }
  };


   // Check if the disclaimer has been shown before
   const disclaimerShown = localStorage.getItem('disclaimerShown');

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {!disclaimerShown  && showModal ? (
        <BackgroundMain>
          <Background onClick={closeModal} ref={modalRef}>
            {/* <div > */}
            <ModalWrapper showModal={showModal}>
              <Header>
                <QText tx={'disclaimer.title'} type='h41'></QText>

                <h4><CloseModalButton
                  aria-label='Close modal'
                  onClick={() => closeModal()}
                /></h4>
              </Header>
              <ModalContent>
                <QText tx={'disclaimer.message'} type='h3'></QText>
              </ModalContent>

              <ModalFooter>
                {/* <ModalButton onClick={() => setShowModal(prev => !prev)}

                >
                    <QText tx={'disclaimer.agree'} type='b'></QText>
                    </ModalButton> */}
              </ModalFooter>

            </ModalWrapper>
            {/* </div> */}
          </Background>
        </BackgroundMain>
      ) : null}
    </>
  );
};