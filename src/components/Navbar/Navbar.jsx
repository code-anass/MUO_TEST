import React from "react";
import { useState, useEffect } from "react";
import { NavbarContainer, NavBtnLink } from "./NavbarStyles";
import {
  NavbarMain,
  NavbarUL,
  NavBarLI,
  NavbarDropdown,
  NavbarDropdownLI,
  HeaderContainer,
  HeaderLogo,
  NavbarSearchBox,
  NavbarSearchLI,
  NavbarSearchUL,
} from "./NavbarStyles";
import { themesData } from "../../data/ThemesData";
import { commonResponse } from "../../data/CommonData";

import { Search, Gear, ClipboardData } from "bootstrap-icons-react";

import Qtext from "../QText/QText";
import MobileNavbar from "./NavbarMobileView";
import { useLocation, useNavigate } from "react-router-dom";
import TextWithDownArrow from "../common/TextWithDownArrow";
import { logInfo } from "../../utils/QLogger";
import {
  ROUTE_ABOUT_US,
  ROUTE_CONTACT,
  ROUTE_FAQ,
  ROUTE_HOME,
  ROUTE_NATIONAL,
  ROUTE_STATE,
  ROUTE_REGION,
  ROUTE_LOCAL,
  ROUTE_NEW,
  ROUTE_SEARCH,
  ROUTE_THEMES,
  ROUTE_DASHBOARD,
  ROUTE_R_AND_D,
} from "../../utils/Constants";
import { loadRefreshContent, redirectPage } from "../../utils/Navigation";
import LanguageChecker from "../../utils/LanguageChecker";
import { connect } from "react-redux";
import { footerResponse } from "../../data/FooterDefault";
import { isDataAvailable } from "../../utils/OperationUtils";

const Navbar = (state) => {
  const t = state.t;
  const toggle = state.toggle;
  const [isLoggdIn, setLoggedIn] = useState(true);
  let navigate = useNavigate();
  const isEnglish = LanguageChecker();

  const [commonDetails, setCommonDetails] = useState(footerResponse); //Huzam
  const [themesContent, setThemesContent] = useState(themesData);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (isDataAvailable(state.commonDetails)) {
      logInfo(state.commonDetails, "Common Resp------Inside");

      setCommonDetails(state.commonDetails);
    }
  }, [state.commonDetails]);

  useEffect(() => {
    if (
      isDataAvailable(state.commonSchema) &&
      isDataAvailable(state.commonSchema.schema)
    ) {
      logInfo(state.commonSchema.schema,"CommonSchema In Navbar");
      setThemesContent(state.commonSchema.schema);
    }
  }, [state.commonSchema]);

  let keyName = isEnglish ? "" : "My";

 

  const sortedThemeData = themesContent.sort((a, b) => a.order - b.order);

  const navigateTo = (pageRote) => {
    navigate(pageRote);
  };

  const handleSearch = (title) => {
    navigate(`${ROUTE_SEARCH}?title=${title}`, {state: {data: title}});
  };
  
  function LoginButton() {
    setLoggedIn((prev) => !prev);
    window.open(commonDetails.login_url, "blank");
    // handleClearLocalStorage();
  }

  const handleClearLocalStorage = () => {
    localStorage.clear();
    // You can also remove specific items from local storage using localStorage.removeItem(key)
  };
  const handleHome = (e) => {
    e.preventDefault();
    navigate(ROUTE_HOME);
    window.sessionStorage.setItem("elementId", null);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // loadRefreshContent();
  };

  const handleSroll = async (e) => {
    navigate(ROUTE_HOME);
  };

  const navigateThemes = (id, obj) => {
    const dataObj = {
      state: {
        data: {
          nav: obj[`navigationLink${keyName}`],
          title: obj[`title${keyName}`],
        },
      },
    };

    navigate(`${ROUTE_THEMES}?theme=${id}`, dataObj);
  };

  function scrollToElement(elementId) {
    window.sessionStorage.setItem("elementId", elementId);

    const element = document.getElementById(elementId);
    window.sessionStorage.setItem("elementId", elementId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    } else {
      handleSroll();
    }
  }

  useEffect(() => {
    if (window.location.pathname === ROUTE_HOME) {
      let elementId = window.sessionStorage.getItem("elementId");
      if (elementId && elementId !== "undefined") { 
        const element = document.getElementById(elementId);
        
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: "instant" });
        }
      }
    }
  }, [handleSroll]);

  const [dropMenuVisible, setDropMenuVisible] = useState(true);

  const handleDropMenu = () => {
    setDropMenuVisible(false);
  };

  return (
    <HeaderContainer>
      {/* <header id="header" className="header fixed-top" style={{width:"100%", backgroundColor: "rgba(255, 255, 255, 0.9)", color: "#000000 !important", boxShadow: "0px 2px 20px rgba(1, 41, 112, 0.1)", position:"sticky", zIndex: "10"}}> */}
      <HeaderLogo
        src={"assets/logo.png"}
        onClick={() => loadRefreshContent()}
        alt=""
      />
        <NavbarContainer>
          <NavbarMain>
            <NavbarUL>
              <NavBarLI>
                <Qtext type="nav" onClick={(e) => handleHome(e)}>
                  {t("Navbar.1")}
                </Qtext>
              </NavBarLI>
              {/* {{-- <li><a class="nav-link scrollto dropdown" href="#about">MENGENAI KAMI</a></li> --}} */}
              <NavbarDropdown onMouseOver={() => setDropMenuVisible(true)}>
                <TextWithDownArrow t={t} text="Navbar.2"></TextWithDownArrow>
                {dropMenuVisible && (
                  <ul onClick={handleDropMenu}>
                    <NavbarDropdownLI>
                      <Qtext
                        type="nav"
                        onClick={() => navigateTo(ROUTE_ABOUT_US)}
                      >
                        {t("Navbar.21")}
                      </Qtext>
                    </NavbarDropdownLI>
                    <NavbarDropdownLI>
                      <Qtext
                        type="nav"
                        onClick={() => scrollToElement("homemodule")}
                      >
                        {t("Navbar.22")}
                      </Qtext>
                    </NavbarDropdownLI>
                    <NavbarDropdownLI>
                      <Qtext type="nav" onClick={() => navigateTo(ROUTE_NEW)}>
                        {t("Navbar.23")}
                      </Qtext>
                    </NavbarDropdownLI>
                    <NavbarDropdownLI>
                      <Qtext
                        type="nav"
                        onClick={() => scrollToElement("homepartners")}
                      >
                        {t("Navbar.24")}
                      </Qtext>
                    </NavbarDropdownLI>
                  </ul>
                )}
              </NavbarDropdown>
              {/* {{-- <li><a class="nav-link scrollto dropdown" href="#services">INSIGHTS</a></li> --}} */}
              <NavbarDropdown onMouseOver={() => setDropMenuVisible(true)}>
                <TextWithDownArrow t={t} text="Navbar.3"></TextWithDownArrow>
                {dropMenuVisible && (
                  <ul onClick={handleDropMenu}>
                    <NavbarDropdownLI>
                      <Qtext
                        type="nav"
                        onClick={() => navigateTo(ROUTE_NATIONAL)}
                      >
                        {" "}
                        {t("Navbar.31")}{" "}
                      </Qtext>
                    </NavbarDropdownLI>
                    <NavbarDropdownLI>
                      <Qtext
                        type="nav"
                        onClick={() => navigateTo(ROUTE_REGION)}
                      >
                        {" "}
                        {t("Navbar.32")}{" "}
                      </Qtext>
                    </NavbarDropdownLI>
                    <NavbarDropdownLI>
                      <Qtext type="nav" onClick={() => navigateTo(ROUTE_STATE)}>
                        {" "}
                        {t("Navbar.33")}{" "}
                      </Qtext>
                    </NavbarDropdownLI>
                    <NavbarDropdownLI>
                      <Qtext type="nav" onClick={() => navigateTo(ROUTE_LOCAL)}>
                        {" "}
                        {t("Navbar.34")}{" "}
                      </Qtext>
                    </NavbarDropdownLI>
                  </ul>
                )}
              </NavbarDropdown>
              <NavbarDropdown onMouseOver={() => setDropMenuVisible(true)}>
                <TextWithDownArrow t={t} text="Navbar.4"></TextWithDownArrow>

                {dropMenuVisible && (
                  <ul onClick={handleDropMenu}>
                    {sortedThemeData.map((el, index) => {
                      return (
                        <NavbarDropdownLI key={index}>
                          <Qtext
                            onClick={() => {
                              navigateThemes(index + 1, el);
                            }}
                            type="nav"
                          >
                            {" "}
                            {isEnglish ? 
                            el.title : el.titleMy}{" "}
                          </Qtext>
                        </NavbarDropdownLI>
                      );
                    })}
                  </ul>
                )}
              </NavbarDropdown>
              {/* <li><a class="nav-link scrollto" href="#theme">Tema</a></li> */}
              {/* <li><a class="nav-link scrollto" href="<?= Url::to(['/site/dashboard']); ?>">Dashboard</a></li> */}
              <NavbarDropdown onMouseOver={() => setDropMenuVisible(true)}>
                <TextWithDownArrow t={t} text="Navbar.5"></TextWithDownArrow>

                {dropMenuVisible && (
                  <ul onClick={handleDropMenu}>
                    <NavbarDropdownLI>
                      <Qtext
                        type="nav"
                        onClick={() => navigateTo(ROUTE_DASHBOARD)}
                      >
                        {" "}
                        {t("Navbar.51")}{" "}
                      </Qtext>
                    </NavbarDropdownLI>
                    <NavbarDropdownLI>
                      <Qtext
                        type="nav"
                        onClick={() =>
                          redirectPage(commonDetails.dashboard_traffic_Url)
                        }
                      >
                        {" "}
                        {t("Navbar.52")}{" "}
                      </Qtext>
                    </NavbarDropdownLI>
                  </ul>
                )}
              </NavbarDropdown>
              <NavbarDropdown onMouseOver={() => setDropMenuVisible(true)}>
                <TextWithDownArrow t={t} text="Navbar.6"></TextWithDownArrow>

                {dropMenuVisible && (
                  <ul onClick={handleDropMenu}>
                    <NavbarDropdownLI>
                      <Qtext type="nav" onClick={() => navigateTo(ROUTE_FAQ)}>
                        {" "}
                        {t("Navbar.61")}{" "}
                      </Qtext>
                    </NavbarDropdownLI>
                    <NavbarDropdownLI>
                      <Qtext
                        type="nav"
                        onClick={() => navigateTo(ROUTE_CONTACT)}
                      >
                        {" "}
                        {t("Navbar.62")}{" "}
                      </Qtext>
                    </NavbarDropdownLI>
                  </ul>
                )}
              </NavbarDropdown>
              <NavBarLI>
                {/* Huzam */}
                <NavBtnLink
                  style={{ color: "white", margin: "15px" }}
                  to={"Huam"}
                  onClick={() => LoginButton()}
                  activeclassname="active"
                >
                  {t("Navbar.7").toUpperCase()}
                </NavBtnLink>
              </NavBarLI>
            </NavbarUL>
          </NavbarMain>
        </NavbarContainer>
        <MobileNavbar
          t={t}
          commonDetails={commonDetails}
          sortedThemeData={sortedThemeData}
        />
      <div>
        <NavbarSearchUL>
          <NavbarSearchLI>
            {/* <form
              className="text-center form-inline"
              action="<?= Url::to(['/search']); ?>"
            > */}
              <NavbarSearchBox >
                <input type="text" 
                 value={inputValue}
                 onChange={handleInputChange}
                 placeholder={t('searchFilter.SearchHint')} />
                <button onClick={() => handleSearch(inputValue)}>
                  <i>
                    <Search />
                  </i>
                </button>
              </NavbarSearchBox>
            {/* </form> */}
          </NavbarSearchLI>
          <li>
            <Gear
              data-sidebar-id={1}
              id="sidebarMenu"
              style={{ cursor: "pointer" }}
              onClick={toggle}
            />
          </li>
          {/* <li>
            <ClipboardData
              data-sidebar-id={1}
              style={{ margin: "0px 15px", cursor: "pointer" }}
              id="sidebarMenuData"
              onClick={() => navigateTo(ROUTE_R_AND_D)}//redirectPage(commonDetails.global_search)}
            />
          </li> */}
        </NavbarSearchUL>
      </div>
      {/* </header> */}
    </HeaderContainer>
  );
};

// export default Navbar;
const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  commonDetails: state.commonDetails.content,
  commonSchema: state.commonSchema,
});

export default connect(mapStateToProps)(Navbar);
