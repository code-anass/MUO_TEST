/**
 * Author:  Anitha Gorli
 * Date: 23-MARCH-2022
 */
import { FormatString, URLS } from "../../../services/config/urls";
import { apiRequest, API_ERROR, API_SUCCESS } from "../../actions/ApiActions";
import {
  setCommonDetails,
  COMMON_UPDATES,
  FETCH_COMMON_UPDATES,
  clearCommonDetails,
  COMMON_UPDATES_SCHEMA,
  setCommonDetailsSchema,
} from "../../actions/CommonActions";
import { setNotification } from "../../actions/NotificationActions";
import {
  DESC_OERDER,
  API_RECORD_LIMIT,
  COMMON_MODULE_ID,
} from "../../../utils/Constants";
import { logInfo } from "../../../utils/QLogger";

let where, query, url;

export const getCommonDetails =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    switch (action.type) {
      case FETCH_COMMON_UPDATES:
        where = {
          and: [{ tenantId: URLS.TENANT_ID }, { moduleId: COMMON_MODULE_ID }],
        };
        query = {
          limit: API_RECORD_LIMIT,
          order: DESC_OERDER,
          where,
        };
        url = FormatString(
          URLS.BASE_URL_CMS,
          URLS.CMS,
          URLS.TENANT_ID,
          JSON.stringify(query)
        );

        dispatch(apiRequest("", "GET", url, COMMON_UPDATES));

        break;
     
      case `${COMMON_UPDATES}${API_SUCCESS}`:
        dispatch(clearCommonDetails());

        logInfo(`API Success : ${JSON.stringify(action.payload.data.data)}`);

        dispatch(setCommonDetails(action.payload.data.data));
        break;
      case `${COMMON_UPDATES}${API_ERROR}`:
        logInfo("API Error: " + JSON.stringify(action.payload));
        dispatch(setNotification(action.payload.data, COMMON_UPDATES));
        break;

        // case FETCH_COMMON_UPDATES_SCHEMA:
        //     where = {
        //       and: [{ tenantId: URLS.TENANT_ID }, { moduleId: COMMON_MODULE_ID }],
        //     };
        //     query = {
        //       where,
        //     };
        //     url = FormatString(
        //       URLS.BASE_URL_CMS,
        //       URLS.CMS_SCHEMA,
        //       URLS.TENANT_ID,
        //       JSON.stringify(query)
        //     );
    
        //     dispatch(apiRequest("", "GET", url, COMMON_UPDATES_SCHEMA));
    
        //     break;

        // case `${COMMON_UPDATES_SCHEMA}${API_SUCCESS}`:

        //     logInfo(
        //         `API Success : ${JSON.stringify(action.payload.data.data[0].format)}`,"Common schema");

        //     dispatch(setCommonDetailsSchema(action.payload.data.data[0].format));
        //     break;
        // case `${COMMON_UPDATES_SCHEMA}${API_ERROR}`:
            // logInfo('API Error: ' + JSON.stringify(action.payload));
            // dispatch(setNotification(action.payload.data, COMMON_UPDATES_SCHEMA));
            // break;
      default:
        // logInfo('Default: ' + JSON.stringify(action.payload));

        break;
    }
  };
export const getCommonDetailsMiddleWare = [getCommonDetails];
