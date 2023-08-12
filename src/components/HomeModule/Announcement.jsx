import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { isDataAvailable } from '../../utils/OperationUtils'

import { useTranslation } from 'react-i18next';

import './ModuleGridStyles.css';
import LanguageChecker from '../../utils/LanguageChecker';
import { useSelector } from 'react-redux';
import { logError, logInfo } from '../../utils/QLogger';

const AnnouncementSection = (state,) => {

  const [announcement, setAnnouncements] = useState([])
  const isEnglish = LanguageChecker();
  const [announcementData, setAnnouncementsData] = useState([])
  const fontName = useSelector(state => state.fontNames);

  const { t } = useTranslation();

  useEffect(() => {

    if (isDataAvailable(state.announcements)) {
      bindResponseToUI(state.announcements);
    }
  }, [state.announcements]);

  const bindResponseToUI = (data) => {

    try {
      setAnnouncements(data)
      logInfo(announcement, "Response---announcements", isEnglish)

      setAnnouncementsData(data);


    } catch (error) {
      logError(error);
    }
  };


  return (
    <div style={{ marginBottom: "0.5em", paddingLeft: 2 }}>
      <div className="row">
        <div className="col-md-111" style={{ zIndex: 1000 }}>
          <a className="btn btn-danger" style={{
            color: "white", fontFamily: fontName.Def_Font
          }}>
            {t('home.announcements')}
          </a>
        </div>
        <div className="col-md-1111" style={{ textSize: 18 }}>


          <marquee
            width="100%"
            direction="left"
            scrollamoun t={6}
            height="30px"
            style={{
              marginTop: "0.8em", marginLeft: "0.8em",

              fontFamily: fontName.Def_Font
            }} 
          >
            {
              announcementData.map((i, index) => (

                < span key={index} style={{ paddingLeft: "55px" }}> {isEnglish ? i.data["Title En"] : i.data["Title My"]}</span>

              ))

            }



          </marquee>


        </div>

      </div>
    </div >

  )
}


const mapStateToProps = (state) => ({
  errorResponse: state.notification,
  announcements: state.announcements,
});

export default connect(mapStateToProps)(AnnouncementSection);


