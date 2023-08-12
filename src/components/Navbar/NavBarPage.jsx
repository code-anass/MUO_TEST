import React from 'react'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, Navlink, NavItem, NavLinks, DropNavLink, NavMenu, DropDownLi, Dropbtn, DropDownContent, DropNavLinks, NavBtnLink } from './NavBarNewStyles'
// import { data } from '../../data/NavbarData';  
import { useNavigate } from "react-router-dom";
import { logInfo } from '../../utils/QLogger';
import { ROUTE_ABOUT_US, ROUTE_CONTACT, ROUTE_FAQ, ROUTE_NEW } from '../../utils/Constants';

const Navbar = ({ toggle, t }) => {

    const [isLoggdIn, setLoggedIn] = useState(true);
    let navigate = useNavigate();

   
    const navigateTo= (pageRote) => {
		navigate(pageRote);

	}
    function LoginButton() {
       setLoggedIn(prev => !prev)
      }

      function scrollToElement(elementId) {
         const element = document.getElementById(elementId);
        if (element) {
             const elementPosition = element.getBoundingClientRect().top;
             window.scrollTo(0, elementPosition - 100);
             logInfo(elementPosition);
         }
        }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo to='/'>{' '}</NavbarLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars color='green'/>
                    </MobileIcon>
                    <NavMenu >
                      
                        <DropDownLi>
                            <Navlink to={t('Navbar.1').toLowerCase()}>{t('Navbar.1').toUpperCase()}</Navlink>
                        </DropDownLi>
                        <DropDownLi>
                        <Navlink to="1"><Dropbtn onClick={() => this.handleClick("DropDown")}>
                            {t('Navbar.2').toUpperCase()}
                            </Dropbtn>
                            <DropDownContent>
                                {" "}
                                <DropNavLinks  onClick={() => navigateTo(ROUTE_ABOUT_US)}>{t('Navbar.21').toUpperCase()}</DropNavLinks>
                                <DropNavLinks  onClick={() => scrollToElement("homemodule")}>{t('Navbar.22').toUpperCase()}</DropNavLinks>
                                <DropNavLinks  onClick={() => navigateTo(ROUTE_NEW)}>{t('Navbar.23').toUpperCase()}</DropNavLinks>
                                <DropNavLink  onClick={() => scrollToElement("homepartners")}>{t('Navbar.24').toUpperCase()}</DropNavLink>
                            </DropDownContent></Navlink>
                        </DropDownLi>
                        <DropDownLi>
                        <Navlink to="2"><Dropbtn onClick={() => this.handleClick("DropDown")}>
                            {t('Navbar.3').toUpperCase()}
                            </Dropbtn>
                            <DropDownContent>
                                {" "}
                                <DropNavLinks  onClick={() => this.handleClick("Link1")}>{t('Navbar.31').toUpperCase()}</DropNavLinks>
                                <DropNavLinks  onClick={() => this.handleClick("Link1")}>{t('Navbar.32').toUpperCase()}</DropNavLinks>
                                <DropNavLinks  onClick={() => this.handleClick("Link1")}>{t('Navbar.33').toUpperCase()}</DropNavLinks>
                                <DropNavLink  onClick={() => this.handleClick("Link1")}>{t('Navbar.34').toUpperCase()}</DropNavLink>
                            </DropDownContent></Navlink>
                        </DropDownLi>
                        <DropDownLi>
                            <Navlink to={t('Navbar.4').toLowerCase()} activeClassName="active">{t('Navbar.4').toUpperCase()}</Navlink>
                        </DropDownLi>
                        <DropDownLi>
                            <Navlink to={t('Navbar.5').toLowerCase()} activeClassName="active">{t('Navbar.5').toUpperCase()}</Navlink>
                        </DropDownLi>
                        <DropDownLi>
                        <Navlink to=""><Dropbtn onClick={() => this.handleClick("DropDown")}>
                            {t('Navbar.6').toUpperCase()}
                            </Dropbtn>
                            <DropDownContent>
                                {" "}
                                <DropNavLinks  onClick={() => navigateTo(ROUTE_FAQ)}>{t('Navbar.61').toUpperCase()}</DropNavLinks>
                                <DropNavLink  onClick={() => navigateTo(ROUTE_CONTACT)}>{t('Navbar.62').toUpperCase()}</DropNavLink>
                            </DropDownContent></Navlink>
                        </DropDownLi>
                        <DropDownLi button="true">
                        {isLoggdIn ?
                             (<NavBtnLink to={t('Navbar.7').toLowerCase()} onClick={() => LoginButton()} activeClassName="active">{t('Navbar.7').toUpperCase()}</NavBtnLink>)
                            :(<Navlink to={t('Navbar.8').toLowerCase()} onClick={() => LoginButton()} activeClassName="active">{t('Navbar.8').toUpperCase()}</Navlink>)}
                        </DropDownLi>    
                    </NavMenu>
                    {/* {data.map((el, index) => (
                        <NavMenu key={index}>
                            <NavItem>
                                <NavLinks to={el.to}>{el.text}</NavLinks>
                            </NavItem>
                        </NavMenu>
                    ))} */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

// export default Navbar

// import React from 'react'
// import { useState } from 'react';
// import { FaBars, FaChevronDown } from 'react-icons/fa';
// import { Nav, NavbarContainer, LogoImg, NavbarLogo, MobileIcon, Navlink, NavItem, NavLinks, DropNavLink, NavMenu, DropDownLi, Dropbtn, DropDownContent, DropNavLinks, NavBtnLink } from './NavbarStyles'
// import { NavbarMain, NavbarUL, NavBarLI, NavbarContent, NavbarIcon, NavbarDropdownUL, NavbarDropdownLI, NavbarDropdownContent } from './NavbarStyles';
// // import { data } from '../../data/NavbarData';  
// import { useNavigate } from "react-router-dom";

// const Navbar = ({ toggle, t }) => {

//     const [isLoggdIn, setLoggedIn] = useState(true);
//     let navigate = useNavigate();


//     const navigateTo = (pageRote) => {
//         navigate(pageRote);

//     }
//     function LoginButton() {
//         setLoggedIn(prev => !prev)
//     }

//     function scrollToElement(elementId) {
//         const element = document.getElementById(elementId);
//         if (element) {
//             const elementPosition = element.getBoundingClientRect().top;
//             window.scrollTo(0, elementPosition - 100);
//             logInfo(elementPosition);
//         }
//     }
//     return (
//         <>
//             <Nav style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#000000', padding: '10px 2%', boxShadow: '0px 2px 20px rgba(1, 41, 112, 0.1)' }}>
//                 <LogoImg src={'/assets/logo.png'}></LogoImg>
//                 <NavbarMain >
//                     <MobileIcon onClick={toggle}>
//                         <FaBars color='green' />
//                     </MobileIcon>
//                     <NavMenu>
//                         <NavbarUL>
//                             <NavBarLI>
//                                 <NavbarContent href={t('Navbar.1').toLowerCase()}>{t('Navbar.1').toUpperCase()}</NavbarContent>
//                             </NavBarLI>
//                             <NavBarLI>
//                                 <NavbarContent>{t('Navbar.2').toUpperCase()} <FaChevronDown /></NavbarContent>
//                                 <NavbarDropdownUL>
//                                         {" "}
//                                         <NavbarDropdownLI ><NavbarDropdownContent href="/aboutus">{t('Navbar.21').toUpperCase()}</NavbarDropdownContent></NavbarDropdownLI>
//                                         <NavbarDropdownLI onClick={() => scrollToElement("homemodule")}><NavbarDropdownContent>{t('Navbar.22').toUpperCase()}</NavbarDropdownContent></NavbarDropdownLI>
//                                         <NavbarDropdownLI ><NavbarDropdownContent href="/news">{t('Navbar.23').toUpperCase()}</NavbarDropdownContent></NavbarDropdownLI>
//                                         <NavbarDropdownLI onClick={() => scrollToElement("homepartners")}><NavbarDropdownContent>{t('Navbar.24').toUpperCase()}</NavbarDropdownContent></NavbarDropdownLI>
//                                 </NavbarDropdownUL>
//                             </NavBarLI>
//                             <NavBarLI>
//                                 <Navlink to="2">
//                                     <Dropbtn onClick={() => this.handleClick("DropDown")}>
//                                         {t('Navbar.3').toUpperCase()}
//                                     </Dropbtn>
//                                     <DropDownContent>
//                                         {" "}
//                                         <DropNavLinks onClick={() => this.handleClick("Link1")}>{t('Navbar.31').toUpperCase()}</DropNavLinks>
//                                         <DropNavLinks onClick={() => this.handleClick("Link1")}>{t('Navbar.32').toUpperCase()}</DropNavLinks>
//                                         <DropNavLinks onClick={() => this.handleClick("Link1")}>{t('Navbar.33').toUpperCase()}</DropNavLinks>
//                                         <DropNavLink onClick={() => this.handleClick("Link1")}>{t('Navbar.34').toUpperCase()}</DropNavLink>
//                                     </DropDownContent>
//                                 </Navlink>
//                             </NavBarLI>
//                             <NavBarLI>
//                                 <Navlink to={t('Navbar.4').toLowerCase()} activeClassName="active">{t('Navbar.4').toUpperCase()}</Navlink>
//                             </NavBarLI>
//                             <NavBarLI>
//                                 <Navlink to={t('Navbar.5').toLowerCase()} activeClassName="active">{t('Navbar.5').toUpperCase()}</Navlink>
//                             </NavBarLI>
//                             <NavBarLI>
//                                 <Navlink to="">
//                                     <Dropbtn onClick={() => this.handleClick("DropDown")}>
//                                         {t('Navbar.6').toUpperCase()}
//                                     </Dropbtn>
//                                     <DropDownContent>
//                                         {" "}
//                                         <DropNavLinks onClick={() => this.handleClick("Link1")}>{t('Navbar.61').toUpperCase()}</DropNavLinks>
//                                         <DropNavLink onClick={() => this.handleClick("Link1")}>{t('Navbar.62').toUpperCase()}</DropNavLink>
//                                     </DropDownContent>
//                                 </Navlink>
//                             </NavBarLI>
//                             <NavBarLI button="true">
//                                 {isLoggdIn ?
//                                     (<NavBtnLink to={t('Navbar.7').toLowerCase()} onClick={() => LoginButton()} activeClassName="active">{t('Navbar.7').toUpperCase()}</NavBtnLink>)
//                                     : (<Navlink to={t('Navbar.8').toLowerCase()} onClick={() => LoginButton()} activeClassName="active">{t('Navbar.8').toUpperCase()}</Navlink>)}
//                             </NavBarLI>
//                         </NavbarUL>
//                     </NavMenu>
//                     {/* {data.map((el, index) => (
//                         <NavMenu key={index}>
//                             <NavItem>
//                                 <NavLinks to={el.to}>{el.text}</NavLinks>
//                             </NavItem>
//                         </NavMenu>
//                     ))} */}
//                 </NavbarMain>
//             </Nav>
//         </>
//     )
// }

// export default Navbar