/**
 * Author:  Anitha Gorli
 * Date: 14-JUNE-2023
 */
import { FormatString, URLS } from "../../../services/config/urls";
import { apiRequest, API_ERROR, API_SUCCESS } from "../../actions/ApiActions";
import {
  setVisitorsDetails,
  VISITORS_UPDATES,
  POST_PAGE_VISITORS,
  PAGE_VISITORS,
  FETCH_VISITORS_UPDATES,
} from "../../actions/VisitorActions";
import { setNotification } from "../../actions/NotificationActions";
import {
  ACCESS_TOKEN_KEY,
  ANALYTICS_SESSION,
  VISITOR_COUNT_DATASET_ID,
  VISITOR_COUNT_WEBHOOK_KEY,
  VISITOR_COUNT_WEBHOOK_NAME,
} from "../../../utils/Constants";
import { logInfo } from "../../../utils/QLogger";
import { fetchLogin } from "../../actions/R_and_D_Actions";

export const getVisitors =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    switch (action.type) {
      case POST_PAGE_VISITORS:
        const url = FormatString(
          URLS.BASE_URL_WEBHOOK,
          URLS.TENANT_ID,
          VISITOR_COUNT_WEBHOOK_NAME,
          VISITOR_COUNT_WEBHOOK_KEY
        );
        const input = { input: action.payload.data };

        logInfo(url, "Middleware------- Log Visitor", action.payload.data);

        dispatch(apiRequest(input, "POST", url, PAGE_VISITORS));

        break;
      case FETCH_VISITORS_UPDATES:
        const urlData = FormatString(
          URLS.BASE_URL_DATASET,
          VISITOR_COUNT_DATASET_ID
        );

        logInfo(urlData, "Middleware-------", action.payload);

        const token = localStorage.getItem(ACCESS_TOKEN_KEY);

        logInfo(urlData, "----Token", token);

        dispatch(
          apiRequest(
            action.payload.data,
            "POST",
            urlData,
            VISITORS_UPDATES,
            token
          )
        );

        break;
      case `${VISITORS_UPDATES}${API_SUCCESS}`:
        logInfo(
          `API Success Visitors Data:${JSON.stringify(action.payload.data)}`
        );

        dispatch(setVisitorsDetails(action.payload.data.data));
        break;
      case `${VISITORS_UPDATES}${API_ERROR}`:
        logInfo("API Error: " + JSON.stringify(action.payload));
        dispatch(fetchLogin());
        dispatch(setNotification(action.payload.data, VISITORS_UPDATES));
        break;
      case `${PAGE_VISITORS}${API_SUCCESS}`:
        logInfo(
          `API Success Visitor post :${JSON.stringify(action.payload.data)} `
        );
        localStorage.setItem(ANALYTICS_SESSION, Date.now());

        break;
      case `${PAGE_VISITORS}${API_ERROR}`:
        logInfo("API Error: " + JSON.stringify(action.payload));
        dispatch(setNotification(action.payload.data, PAGE_VISITORS));
        break;
      default:
        // logInfo('Default: ' + JSON.stringify(action.payload));

        break;
    }
  };
export const getVisitorsMiddleWare = [getVisitors];
