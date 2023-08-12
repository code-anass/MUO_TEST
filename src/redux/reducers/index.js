import { combineReducers } from "redux";
import { LOGOUT } from "../../utils/Constants";

import { fontReducer, fontNameReducer, fontColorReducer } from '../reducer';
import { commonDetailsReducer } from './CommonDetailsReducer'
import { nationalDetailsReducer } from './InsightNationalReducer'
import { notificationReducer } from './NotificationReducer'
import { highlightsDetailsReducer } from './HighlightsDetailsReducer'
import { announcementsDetailsReducer } from './AnnouncementsDetailsReducer'
import { aboutusDetailsReducer } from "./AboutUsReducer"
import { smartPartnersDetailsReducer } from './SmartPartnersDetailsReducer'
import { strategicPartnersDetailsReducer } from './StategicPartnersDetailsReducer'
import { newsDetailsReducer } from './NewsDetailsReducer'
import { contactUsReducer } from './ContactUsReducer'
import { R_AND_DDetailsReducer } from "./R_and_D_Reducers";
import { entityDataReducer } from "./EntityDataReducer";

import { loginReducer } from "./LoginReducer";

import { initialRootState } from "../store";
import { commonSchemaReducer } from "./CommonSchemaReducer";
import { visitorsReducer } from "./VisitorsReducer";

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    // removeLocalStorage()
    return reducers(initialRootState, action)
  }
  return reducers(state, action)
}
export const reducers = combineReducers({
  fontSizes: fontReducer,
  fontColors: fontColorReducer,
  fontNames: fontNameReducer,
  commonDetails: commonDetailsReducer,
  commonSchema: commonSchemaReducer,
  nationalDetails: nationalDetailsReducer,
  notification: notificationReducer,
  announcements: announcementsDetailsReducer,
  aboutus: aboutusDetailsReducer,
  highlights: highlightsDetailsReducer,
  news: newsDetailsReducer,
  smartPartners: smartPartnersDetailsReducer,
  strategicPartners: strategicPartnersDetailsReducer,
  contactUsDetails: contactUsReducer,
  randDDetails: R_AND_DDetailsReducer,
  entityData: entityDataReducer,
  loginToken: loginReducer,
  visitorCount: visitorsReducer

});
