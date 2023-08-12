import React, { useState } from 'react'
import { MobileIcon, NavBtn, NavBtnLink, NavItem, NavLinks, NavMenu, Top, TopbarContainer, TopbarLogo, TopbarLogoImg, TopbarNavContainer } from './ToolbarStyles';
import { FaBars } from 'react-icons/fa';
import { MdAccessibleForward, MdSettings } from 'react-icons/md';
import { increaseFont, decreaseFont, defaultFont } from '../../redux/actions-creator';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";
import { logInfo } from '../../utils/QLogger';


const Toolbar = ({ toggle, toggleTop, handleClick }) => {
  const disPatch = useDispatch();
  const fontSize = useSelector(state => state.fontSizes);
  logInfo("fontSize", fontSize)
  const [value, setValue] = useState(fontSize.medium);
  logInfo(value)

  let navigate = useNavigate();

  const onClick = () => {
    logInfo("Onclk called")
		navigate('/webportal');

	}

  function loadRefreshContent() {
    window.location.reload(false);
 }
  const handlechange = (event) => {

    setValue(event.target.value);
    logInfo("event", event)

    let val = event.target.value;
    // if (event.target.value>15) {
    //   disPatch(increaseFont())
    //   setValue(event.target.value);
    // } else if(value<15){
    //   disPatch(decreaseFont())
    // }


    switch (val) {
      case "11":
        disPatch(decreaseFont())
        break;
      case "12":
        disPatch(decreaseFont())
        break;
      case "13":
        disPatch(decreaseFont())
        break;
      case "14":
        disPatch(decreaseFont())
        break;
      case "15":
        disPatch(defaultFont())
        break;
      case "16":
        disPatch(increaseFont())
        break;
      case "17":
        disPatch(increaseFont())
        break;
      case "18":
        disPatch(increaseFont())
        break;
      default:
        disPatch(decreaseFont())
    }
  }

  const fetchDateTime = () => {
    let date = new Date();
    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]
    return weekday + format(date, ' dd/mm/yyyy hh:mm a')
  }

  return (
    <>
      <Top >
        <TopbarContainer>
          <TopbarLogo  onClick={() => loadRefreshContent()} ><TopbarLogoImg src={'assets/topbarlogo.png'} /></TopbarLogo>
          <MobileIcon onClick={toggle}>
            <FaBars color='green' />
          </MobileIcon>
          <TopbarNavContainer>
            <NavMenu>

              <NavItem>
                <NavLinks onClick={() => handleClick('ms')}><TopbarLogoImg title="Malaysia" lang='true' src={'assets/lang_ms.png'} /></NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={() => handleClick('en')}><TopbarLogoImg title="English" lang='true' src={'assets/lang_en.png'} /></NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks >{(fetchDateTime()).toUpperCase()}</NavLinks>
              </NavItem>
            </NavMenu>
            {/* <p>{value}</p>
                <input type='range' 
                defaultValue={value}
                onChange={handlechange}
                min={11}
                max={18}
                step={1}
                /> */}
            <NavBtn>
              {/* <NavBtnLink>
                <button id='button'  onClick={() => disPatch(decreaseFont())}>
                  A-
                </button>
                <button onClick={() => disPatch(defaultFont())}>
                  A
                </button>
                <button onClick={() => disPatch(increaseFont())}>
                  A+
                </button>
              </NavBtnLink> */}


              <NavBtnLink onClick={toggleTop}><MdAccessibleForward size={20} /></NavBtnLink>
            </NavBtn>
          </TopbarNavContainer>
        </TopbarContainer>
      </Top>
    </>
  )

};


export default Toolbar