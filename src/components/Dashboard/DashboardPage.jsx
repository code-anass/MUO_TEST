/**
 * Author: Amit
 * Date: 15-MAY-2023
 */
import React, { useEffect, useState } from "react";
import { StateList } from "../../data/DashboardData";
import Alert from "../common/AlertComp";
import {
  Container,
  H1,
  H2DashBoard,
  Header,
  NavbarDropdown,
  NavbarDropdownLI,
} from "./DashboardStyle";
import MapComponent from "./MapComp";
import StateFilter from "./StateFilter";
import TextWithDownArrow from "../common/TextWithDownArrow";
import QText from "../QText/QText";
import { themesData } from "../../data/ThemesData";
import { dataLayer } from "../../data/DataLayer";

import { FaGlobeAmericas, FaBox } from "react-icons/fa";
import { TableRow } from "@mui/material";
import LanguageChecker from "../../utils/LanguageChecker";
import { connect } from "react-redux";
import { footerResponse } from "../../data/FooterDefault";
import { logInfo } from "../../utils/QLogger";
import { isDataAvailable } from "../../utils/OperationUtils";
import ModalPopup from "../Model/ModelPopup";
import { H2 } from "../Model/ModelPopStyle";

const DashboardPage = (state) => {

  const [showAlert, setShowAlert] = useState(false);
  const [themesContent, setThemesContent] = useState(themesData);
  const isEnglish = LanguageChecker();
  const [commonDetails, setCommonDetails] = useState(footerResponse)
  const [isOpen, setIsOpen] = useState(false);

  const t = state.t;

  // const sortedThemeData = themesContent.sort((a, b) => a.order - b.order);

  const handleDismiss = () => {
    setShowAlert(false);
  };

  const handleShowAlert = () => {
    setIsOpen(true)
    setShowAlert(true);
  };

  const onHover = (e) => {
    // debugger
    logInfo('onhover   ---------', e);
  }

  const [mapKey, setMapKey] = useState(0);


  const reloadMap = () => {
    // Increment the key to force a reload
    setMapKey(prevKey => prevKey + 1);
  };
  const [dropMenuVisible, setDropMenuVisible] = useState(true);

  const handleDropMenu = () => {
    setDropMenuVisible(false);
  };

  useEffect(() => {

    logInfo("Common Details Map", state.commonDetails)

    // if (isDataAvailable(state.footerDetails) && isDataAvailable(state.footerDetails.content)) {
    // 	bindResponseToUI(state.footerDetails.content);
    // }

    if (isDataAvailable(state.commonDetails)) {
      setCommonDetails(state.commonDetails);
      reloadMap();
    }
  }, [state.commonDetails]);

  logInfo('commonDetails ----------', commonDetails);


  function itemClickEvent(item) {
    handleShowAlert();
  }


  // Popup

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <Container StateList={StateList}>
      {showAlert && (
        <ModalPopup
          isOpen={isOpen}
          onClose={closeModal}
          title={t("searchFilter.Alert")}
        >
          <H2DashBoard>{t("dashboard.message")}</H2DashBoard>
          {/* <PRE>{JSON.stringify(singleEntity, null, 2)}</PRE> */}
        </ModalPopup>
      )}

      <Header>
        <H1>{t("dashboard.title")}</H1>
      </Header>
      <TableRow
        style={{ display: "flex", flexDirection: "row" }}>
        <NavbarDropdown onMouseOver={() => setDropMenuVisible(true)}>
          <TextWithDownArrow
            left={<FaGlobeAmericas style={{ marginRight: "8px" }} />}
            t={t}
            text="Navbar.4"
          ></TextWithDownArrow>

          {dropMenuVisible && (
            <ul onClick={handleDropMenu}>
              {themesContent.map((el, index) => {
                return (

                  <NavbarDropdownLI key={index}>

                    <QText
                      onClick={handleShowAlert}
                      type="nav"
                    >
                      {isEnglish ?
                        el.title : el.titleMy}
                    </QText>
                  </NavbarDropdownLI>
                );
              })}
            </ul>
          )}
        </NavbarDropdown>
        <NavbarDropdown onMouseOver={() => setDropMenuVisible(true)}>
          <TextWithDownArrow
            left={<FaBox style={{ marginRight: "8px" }} />}
            t={t}
            text="dashboard.dataLayer"
          ></TextWithDownArrow>

          {dropMenuVisible && (
            <ul onClick={handleDropMenu}>
              {dataLayer.map((el, index) => {
                return (
                  <NavbarDropdownLI key={index}>
                    <QText
                      onClick={() => {
                        handleShowAlert();
                      }}
                      type="nav"
                    >
                      {t(el.title)}
                    </QText>
                  </NavbarDropdownLI>
                );
              })}
            </ul>
          )}
        </NavbarDropdown>
      </TableRow>
      <StateFilter t={t} data={StateList} handleShowAlert={handleShowAlert} />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <MapComponent commonDetails={commonDetails} key={mapKey}></MapComponent>
      </div>
    </Container>
  );
}



const mapStateToProps = (state) => ({
  commonDetails: state.commonDetails.content,
});

export default connect(mapStateToProps)(DashboardPage);
