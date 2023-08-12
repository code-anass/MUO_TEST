/**
 * Author:  Anitha Gorli
 * Date: 10-JUN-2023
 */
import { FormatString, URLS } from "../../../services/config/urls";
import { apiRequest, API_ERROR, API_SUCCESS } from "../../actions/ApiActions";

import { setNotification } from "../../actions/NotificationActions";
import { ACCESS_TOKEN_KEY, SEARCH_MODULE_ID } from "../../../utils/Constants";
import { logInfo } from "../../../utils/QLogger";
import {
  FETCH_ENTITY_DATA_UPDATES,
  ENTITY_DATA_UPDATES,
  setEntityDataDetails,
} from "../../actions/EntityDataActions";

export const getEntityData =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    switch (action.type) {
      case FETCH_ENTITY_DATA_UPDATES:
        const url = FormatString(URLS.BASE_URL_DATASET, SEARCH_MODULE_ID);

        logInfo(url, "Middleware-------", action.payload);

        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        logInfo(url, "----Token", token);

        dispatch(
          apiRequest(
            action.payload.data,
            "POST",
            url,
            ENTITY_DATA_UPDATES,
            token
          )
        );

        break;
      case `${ENTITY_DATA_UPDATES}${API_SUCCESS}`:
        logInfo(
          `API Success Entity Data:${JSON.stringify(
            action.payload.data
          )} New Data ${JSON.stringify(action.payload.data.data)}`
        );

        dispatch(setEntityDataDetails(action.payload.data.data));
        break;
      case `${ENTITY_DATA_UPDATES}${API_ERROR}`:
        logInfo("API Error Entity Data: " + JSON.stringify(action.payload));
        dispatch(setNotification(action.payload, ENTITY_DATA_UPDATES));
        break;
      default:
        // logInfo('Default: ' + JSON.stringify(action.payload));

        break;
    }
  };
export const getEntityDataMiddleWare = [getEntityData];
