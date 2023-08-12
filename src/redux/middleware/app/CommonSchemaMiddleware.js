/**
 * Author:  Anitha Gorli
 * Date: 23-MARCH-2022
 */
import { FormatString, URLS } from "../../../services/config/urls";
import { apiRequest, API_ERROR, API_SUCCESS } from "../../actions/ApiActions";
import {

  FETCH_COMMON_UPDATES_SCHEMA,
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

export const getCommonSchema =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    switch (action.type) {
  
        case FETCH_COMMON_UPDATES_SCHEMA:
            where = {
              and: [{ tenantId: URLS.TENANT_ID }, { moduleId: COMMON_MODULE_ID }],
            };
            query = {
              where,
            };
            url = FormatString(
              URLS.BASE_URL_CMS,
              URLS.CMS_SCHEMA,
              URLS.TENANT_ID,
              JSON.stringify(query)
            );
    
            dispatch(apiRequest("", "GET", url, COMMON_UPDATES_SCHEMA));
    
            break;

        case `${COMMON_UPDATES_SCHEMA}${API_SUCCESS}`:

            logInfo(
                `API Success : ${JSON.stringify(action.payload.data.data[0].format)}`,"Common schema");

            dispatch(setCommonDetailsSchema(action.payload.data.data[0].format));
            break;
        case `${COMMON_UPDATES_SCHEMA}${API_ERROR}`:
            logInfo('API Error: ' + JSON.stringify(action.payload));
            dispatch(setNotification(action.payload.data, COMMON_UPDATES_SCHEMA));
            break;
      default:
        // logInfo('Default: ' + JSON.stringify(action.payload));

        break;
    }
  };
export const getCommonSchemaMiddleWare = [getCommonSchema];
