/**
 * Author:  Alekya
 * Date: 06-JUN-2023
 */
import { FormatString, URLS } from "../../../services/config/urls";
import { apiRequest, API_ERROR, API_SUCCESS } from "../../actions/ApiActions";
import { LoginUserName, LoginPassword } from "../../../config/config";
import {
  setR_AND_DDetails,
  R_AND_D_UPDATES,
  FETCH_R_AND_D_UPDATES,
  R_AND_D_LOGIN,
  FETCH_LOGIN,
  fetchR_AND_DDetails,
  fetchLogin,
  fetchAccessRequest,
  FETCH_ACCEPT_REQUEST,
  AUTH_CODE,
  setLogin,
} from "../../actions/R_and_D_Actions";
import { setNotification } from "../../actions/NotificationActions";
import {
  DESC_OERDER,
  API_RECORD_LIMIT,
  R_AND_D_DATA_ACCESS_WEBHOOK_ID,
  R_AND_D_DATA_ACCESS_WEBHOOK_NAME,
  ACCESS_TOKEN_KEY,
} from "../../../utils/Constants";
import { logInfo } from "../../../utils/QLogger";

export const getR_AND_DDetails =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    logInfo(action, "action");

    switch (action.type) {
      case FETCH_LOGIN:
        const body = {
          username: LoginUserName,
          password: LoginPassword,
          grant_type: "password",
          refresh_token: "string",
        };
        const login_url = FormatString(URLS.BASE_URL_LOGIN, URLS.LOGIN);

        logInfo(login_url, body, "Inside Login");
        dispatch(apiRequest(body, "POST", login_url, R_AND_D_LOGIN));

        break;

      case `${R_AND_D_LOGIN}${API_SUCCESS}`:
        logInfo(
          `API Success : ${JSON.stringify(action.payload.data.data)}`,
          "R_AND_D"
        );
        //AUTH_CODE=action.payload.data.data.access_token;
        localStorage.setItem(
          ACCESS_TOKEN_KEY,
          action.payload.data.data.access_token
        );
        
        dispatch(setLogin(action.payload.data.data.access_token))

        //dispatch(fetchR_AND_DDetails(action.payload.data.data.access_token));
        break;

      case `${R_AND_D_LOGIN}${API_ERROR}`:
        logInfo("API Error: " + JSON.stringify(action.payload));
        dispatch(setNotification(action.payload?.data?.data, R_AND_D_LOGIN));
        break;

      case FETCH_R_AND_D_UPDATES:
        const query = {
          order: DESC_OERDER,
        };
        logInfo(URLS.ENTITY_TYPE, "EntityType");
        const url = FormatString(
          URLS.BASE_URL_CMS,
          URLS.CORE,
          URLS.ENTITY_TYPE,
          JSON.stringify(query)
        );
        const header = action.payload.data;

        logInfo(url, header, "Inside entity API");

        dispatch(apiRequest("", "GET", url, R_AND_D_UPDATES, header));

        break;
      case `${R_AND_D_UPDATES}${API_SUCCESS}`:
        logInfo(
          `API Success : ${JSON.stringify(action.payload.data)}`,
          "R_AND_D"
        );

        dispatch(setR_AND_DDetails(action.payload?.data?.data));
        break;
      case `${R_AND_D_UPDATES}${API_ERROR}`:
        logInfo("R&DAPI Error: " + JSON.stringify(action.payload));
        //if(action.payload.includes("401"))
        dispatch(fetchLogin());
        //dispatch(setNotification(action.payload.data, R_AND_D_UPDATES));
        break;

      case FETCH_ACCEPT_REQUEST:
        const webhook_url = FormatString(
          URLS.BASE_URL_WEBHOOK,
          URLS.TENANT_ID,
          R_AND_D_DATA_ACCESS_WEBHOOK_NAME,
          R_AND_D_DATA_ACCESS_WEBHOOK_ID
        );

        logInfo(action.payload.data, webhook_url, "Webhook calling");
        dispatch(
          apiRequest(
            action.payload.data,
            "POST",
            webhook_url,
            FETCH_ACCEPT_REQUEST,
            ""
          )
        );

        break;

      case `${FETCH_ACCEPT_REQUEST}${API_SUCCESS}`:
        logInfo(
          `API Success : ${JSON.stringify(action.payload.data.data)}`,
          "Fetch_Access_Request"
        );
        dispatch(
          setNotification(
            action.payload.data,
            `${FETCH_ACCEPT_REQUEST}${API_SUCCESS}`
          )
        );
        break;

      case `${FETCH_ACCEPT_REQUEST}${API_ERROR}`:
        logInfo("Webhook Error: " + JSON.stringify(action.payload));
        break;

      default:
        // logInfo('Default: ' + JSON.stringify(action.payload));

        break;
    }
  };
export const getR_AND_DDetailsMiddleWare = [getR_AND_DDetails];
