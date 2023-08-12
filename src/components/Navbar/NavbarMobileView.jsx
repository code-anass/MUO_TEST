import {
  NavbarMobileContainer,
  NavbarMobileUL,
  NavbarMobileContent,
  NavbarMobileIcon,
  NavBtnLink,
  NavbarMobileLI,
  NavbarMobileDropdown,
  NavbarMobileDropdownLI,
} from "./NavbarStyles";
import React, { useState, useEffect } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
} from "../../utils/Constants";
import { themesData } from "../../data/ThemesData";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import LanguageChecker from "../../utils/LanguageChecker";
import { loadRefreshContent, redirectPage } from "../../utils/Navigation";
import { commonResponse } from "../../data/CommonData";

const Span = styled.span`
  display: flex;
  justify-content: end;
  margin: 29px;
`;
const CloseIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.footerArrowColor};
`;

const MobileNavbar = ({ toggle, t, commonDetails, sortedThemeData }) => {
  let navigate = useNavigate();
  const navigateTo = (pageRote) => {
    logInfo(pageRote, "navigatee");
    navigate(pageRote);
    SetIsOpen(false);
  };

  // function scrollToElement(elementId) {
  //     const element = document.getElementById(elementId);
  //     if (element) {
  //         const elementPosition = element.getBoundingClientRect().top;
  //         window.scrollTo(0, elementPosition - 100);
  //         logInfo(elementPosition);
  //     }
  //     SetIsOpen(false);
  // }
  const handleSroll = async (e) => {
    navigate(ROUTE_HOME);
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

    SetIsOpen(false);
  }
  useEffect(() => {
    // scrollToElement()
  }, []);

  const [isOpen, SetIsOpen] = useState(false);
  const [isDropdownOpen1, SetIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, SetIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, SetIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, SetIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, SetIsDropdownOpen5] = useState(false);
  const isEnglish = LanguageChecker();

  let keyName = isEnglish ? "" : "My";


  function setDropdownOpen(num) {
    switch (num) {
      case 1:
        SetIsDropdownOpen1(!isDropdownOpen1);
        break;
      case 2:
        SetIsDropdownOpen2(!isDropdownOpen2);
        break;
      case 3:
        SetIsDropdownOpen3(!isDropdownOpen3);
        break;
      case 4:
        SetIsDropdownOpen4(!isDropdownOpen4);
        break;
      case 5:
        SetIsDropdownOpen5(!isDropdownOpen5);
        break;
    }
  }

  function setOpen() {
    SetIsOpen(true);
  }

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
    SetIsOpen(false);
  };

  function LoginButton() {
    window.open(
      commonDetails.login_url,
      "blank"
    );
    SetIsOpen(false);
  }
  const handleHome = (e) => {
    SetIsOpen(false);
    e.preventDefault();
    navigate(ROUTE_HOME);
    loadRefreshContent();
  };

  return (
    <NavbarMobileContainer isopen={isOpen}>
      <FaBars onClick={() => setOpen()} />
      <nav>
        <Span>
          <CloseIcon
            icon={faXmark}
            size="sm"
            onClick={() => SetIsOpen(false)}
          />
        </Span>
        <NavbarMobileUL>
          <NavbarMobileLI>
            <NavbarMobileContent onClick={(e) => handleHome(e)}>
              {t("Navbar.1")}
            </NavbarMobileContent>
          </NavbarMobileLI>
          <NavbarMobileDropdown isdropdownopen={isDropdownOpen1}>
            <NavbarMobileContent onClick={() => setDropdownOpen(1)}>
              {t("Navbar.2")}{" "}
              <NavbarMobileIcon>
                <FaChevronDown />
              </NavbarMobileIcon>
            </NavbarMobileContent>
            <ul>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent onClick={() => navigateTo(ROUTE_ABOUT_US)}>
                  {t("Navbar.21")}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent
                  onClick={() => scrollToElement("homemodule")}
                >
                  {t("Navbar.22")}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent onClick={() => navigateTo(ROUTE_NEW)}>
                  {t("Navbar.23")}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent
                  onClick={() => scrollToElement("homepartners")}
                >
                  {t("Navbar.24")}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
            </ul>
          </NavbarMobileDropdown>
          <NavbarMobileDropdown isdropdownopen={isDropdownOpen2}>
            <NavbarMobileContent onClick={() => setDropdownOpen(2)}>
              {t("Navbar.3")}{" "}
              <NavbarMobileIcon>
                <FaChevronDown />
              </NavbarMobileIcon>
            </NavbarMobileContent>
            <ul>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent onClick={() => navigateTo(ROUTE_NATIONAL)}>
                  {" "}
                  {t("Navbar.31")}{" "}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent onClick={() => navigateTo(ROUTE_REGION)}>
                  {" "}
                  {t("Navbar.32")}{" "}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent onClick={() => navigateTo(ROUTE_STATE)}>
                  {" "}
                  {t("Navbar.33")}{" "}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent onClick={() => navigateTo(ROUTE_LOCAL)}>
                  {" "}
                  {t("Navbar.34")}{" "}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
            </ul>
          </NavbarMobileDropdown>
          <NavbarMobileDropdown isdropdownopen={isDropdownOpen3}>
            <NavbarMobileContent onClick={() => setDropdownOpen(3)}>
              {t("Navbar.4")}{" "}
              <NavbarMobileIcon>
                <FaChevronDown />
              </NavbarMobileIcon>
            </NavbarMobileContent>

            <ul>
              {sortedThemeData.map((el, index) => {
                return (
                  <NavbarMobileDropdownLI key={index}>
                    <NavbarMobileContent
                      onClick={() => {
                        navigateThemes(index + 1, el);
                      }}
                      type="nav"
                    >
                      {" "}
                      {el.title}{" "}
                    </NavbarMobileContent>
                  </NavbarMobileDropdownLI>
                );
              })}
            </ul>
          </NavbarMobileDropdown>
          {/* <li><a class="nav-link scrollto" href="#theme">Tema</a></li> */}
          {/* <li><a class="nav-link scrollto" href="<?= Url::to(['/site/dashboard']); ?>">Dashboard</a></li> */}
          <NavbarMobileDropdown isdropdownopen={isDropdownOpen4}>
            <NavbarMobileContent onClick={() => setDropdownOpen(4)}>
              {t("Navbar.5")}{" "}
              <NavbarMobileIcon>
                <FaChevronDown />
              </NavbarMobileIcon>
            </NavbarMobileContent>
            <ul>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent
                  onClick={() => navigateTo(ROUTE_DASHBOARD)}
                >
                  {" "}
                  {t("Navbar.51")}{" "}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent
                  onClick={() =>
                    redirectPage(commonDetails.dashboard_traffic_Url)
                  }
                >
                  {" "}
                  {t("Navbar.52")}{" "}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
            </ul>
          </NavbarMobileDropdown>
          <NavbarMobileDropdown isdropdownopen={isDropdownOpen5}>
            <NavbarMobileContent onClick={() => setDropdownOpen(5)}>
              {t("Navbar.6")}{" "}
              <NavbarMobileIcon>
                <FaChevronDown />
              </NavbarMobileIcon>
            </NavbarMobileContent>
            <ul>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent onClick={() => navigateTo(ROUTE_FAQ)}>
                  {" "}
                  {t("Navbar.61")}{" "}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
              <NavbarMobileDropdownLI>
                <NavbarMobileContent onClick={() => navigateTo(ROUTE_CONTACT)}>
                  {" "}
                  {t("Navbar.62")}{" "}
                </NavbarMobileContent>
              </NavbarMobileDropdownLI>
            </ul>
          </NavbarMobileDropdown>
          <NavbarMobileDropdown>
            <NavBtnLink
              style={{ color: "white", margin: "15px" }}
              to={t("Navbar.7").toLowerCase()}
              onClick={() => LoginButton()}
              activeclassname="active"
            >
              {t("Navbar.7").toUpperCase()}
            </NavBtnLink>
          </NavbarMobileDropdown>
        </NavbarMobileUL>
      </nav>
    </NavbarMobileContainer>
  );
};

export default MobileNavbar;
