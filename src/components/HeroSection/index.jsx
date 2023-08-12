import React,{useState} from 'react';
import { MdArrowForward } from 'react-icons/md';
import {Button, Input} from '../GlobalStyles';
import { TopbarLogo, TopbarLogoImg } from '../Toolbar/ToolbarStyles';
import { ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroHeading, HeroText, VideoBg } from './HeroSectionStyles'

const Hero = ({t}) => {
  const [hover, setHover] = useState(false);
  const onHover =()=>{
    setHover(!hover);
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay muted src={'assets/videos/MUOlogo.mp4'} type='video/mp4' />
      </HeroBg>
      {/* <HeroContent>
      <TopbarLogo to='/'><TopbarLogoImg src={'assets/logo.png'} /></TopbarLogo>
        <HeroHeading>{t('Hero.1')}</HeroHeading>
        <HeroText>
          {t('Hero.2')}
        </HeroText>
        <HeroBtnWrapper>
        <Input placeholder= {t('Hero.4')}/>
          <Button to='search' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
          {t('Hero.3')} {hover ? <MdArrowForward/>:<ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent> */}
    </HeroContainer>
  )
}

export default Hero