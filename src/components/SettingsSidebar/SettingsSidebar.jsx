import React from 'react'

import { Option, SideBtnWrapClose, CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SideNavCard,W3C } from './SettingsSidebarStyles'
import { NavBtnLink, TopbarLogoImg } from '../Toolbar/ToolbarStyles';
import { MdOutlineSettingsBrightness } from 'react-icons/md';
import { changeFontToLato, changeFontToCentury, changeFontToPTSans, colorBlue, decreaseFont, defaultFont, increaseFont, colorYellow, colorDefault } from '../../redux/actions-creator';
import { useDispatch } from 'react-redux';
import { Btn, SubHeadText } from '../GlobalStyles';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { logInfo } from '../../utils/QLogger';
import { ROUTE_W3C } from '../../utils/Constants';




const SettingsSidebar = ({ isSettingsOpen, closeWindow, handleClick, lightMode, setLightMode, }) => {
    const disPatch = useDispatch();
    logInfo("Is Setting Open", isSettingsOpen)
    const { t } = useTranslation();
    let navigate = useNavigate();

   
    const navigateToW3C = (history) => {
		navigate(ROUTE_W3C);

	}

    return (
        <SidebarContainer isTopOpen={isSettingsOpen} >
            <SideBtnWrapClose trans="true">
                <Icon onClick={closeWindow} title={t('settings.hideSidebar')}>
                    <CloseIcon />
                </Icon>
            </SideBtnWrapClose>
            <SideNavCard>
                <SubHeadText upprcase="true">{t('settings.changeLanguage')}</SubHeadText>
                <SidebarMenu style={{justifyContent: 'start', marginLeft:'18px'}}>
                    <SidebarLink   to="" onClick={() => handleClick('ms')}><TopbarLogoImg lang='true' src={'assets/lang_ms.png'} />  Malaysia</SidebarLink>
                </SidebarMenu>
                <SidebarMenu style={{justifyContent: 'start', marginLeft:'18px'}}>
                    <SidebarLink   to="" onClick={() => handleClick('en')}><TopbarLogoImg lang='true' src={'assets/lang_en.png'} />  English</SidebarLink>
                </SidebarMenu>

                {/* <Barrier/> */}
            </SideNavCard>
            <SideNavCard>
                <SubHeadText upprcase="true">{t('settings.changeFontSize')}</SubHeadText>
                <SidebarMenu>
                    <SidebarLink to="" >
                        <Option onClick={() => (disPatch(decreaseFont()))}>
                            A-
                        </Option>
                        <Option onClick={() => disPatch(defaultFont())}>
                            A
                        </Option>
                        <Option onClick={() => disPatch(increaseFont())}>
                            A+
                        </Option>
                    </SidebarLink>
                    <SidebarLink to="" >
                        {/* <p>{value}</p> */}
                        {/* <input type='range'
                            defaultValue={value}
                            onChange={handlechange}
                            min={11}
                            max={18}
                            step={1}
                        /> */}
                    </SidebarLink>
                </SidebarMenu>
                {/* <Barrier/> */}
            </SideNavCard>
            <SideNavCard>
                <SubHeadText upprcase="true">{t('settings.changeFontColor')}</SubHeadText>
                <SidebarMenu>
                    <SidebarLink to="" >
                        <Option onClick={() => (disPatch(colorDefault()))}>
                            A
                        </Option>
                        <Option style={{color: '#48DBFB'}} onClick={() => disPatch(colorBlue())}>
                            A
                        </Option>
                        <Option style={{color: '#FECA57'}}onClick={() => disPatch(colorYellow())}>
                            A
                        </Option>
                    </SidebarLink>
                </SidebarMenu>
                {/* <SidebarMenu>
                    <SidebarLink to=""  onClick={() => disPatch(colorRed())}>R</SidebarLink>
                    <SidebarLink to=""  onClick={() => disPatch(colorGreen())}>G</SidebarLink>
                </SidebarMenu> */}
                {/* <SidebarMenu>
                    <SidebarLink to=""  onClick={() => setLightMode(!lightMode)}>
                      <Btn>
                        {lightMode ? 'Dark Mode' : 'Light Mode'}
                        </Btn>  
                    </SidebarLink>
                </SidebarMenu> */}
                {/* <Barrier/> */}
            </SideNavCard>
            <SideNavCard>
                <SubHeadText upprcase="true">{t('settings.changeFontFamily')}</SubHeadText>
                <SidebarMenu>
                    <SidebarLink to="" >
                        <Option small="true" style={{fontFamily:"Lato, sans-serif"}}onClick={() => disPatch(changeFontToLato())}>
                            Lato
                        </Option>
                        <Option small="true" style={{fontFamily:"PTSans, sans"}} onClick={() => disPatch(changeFontToPTSans())}>
                            PT Sans
                        </Option>
                        <Option small="true" style={{fontFamily:"Century, sans-serif"}} onClick={() => disPatch(changeFontToCentury())}>
                            Century
                        </Option>

                    </SidebarLink>
                </SidebarMenu>
            </SideNavCard>
            <SideNavCard>
                <SubHeadText upprcase="true">{t('settings.w3c')}</SubHeadText>
                <SidebarMenu style={{justifyContent: 'start', marginLeft:'18px'}}>
                    <SidebarLink to="" >
                        <W3C small="true" onClick={() => navigateToW3C()}>
                        {t('settings.w3cGuide')}
                        </W3C>


                    </SidebarLink>
                </SidebarMenu>
            </SideNavCard>


        </SidebarContainer>
    )
}

export default SettingsSidebar