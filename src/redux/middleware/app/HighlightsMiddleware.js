/**
 * Author:  Anitha Gorli
 * Date: 23-MARCH-2022
 */
import { FormatString, URLS } from '../../../services/config/urls';
import { apiRequest, API_ERROR, API_SUCCESS } from '../../actions/ApiActions';
import {
    setHighlightsDetails,
    HIGHLIGHTS_UPDATES,
    FETCH_HIGHLIGHTS_UPDATES,
} from '../../actions/HighlightsActions';
import { setNotification } from '../../actions/NotificationActions';
import {
    DESC_OERDER,
    API_RECORD_LIMIT, HOME_HIGHTLIGHTS_MODULE_ID
} from '../../../utils/Constants';
import { logInfo } from '../../../utils/QLogger';

export const getHighlightsDetails =
    ({ dispatch }) =>
        next =>
            action => {
                next(action);

                switch (action.type) {
                    case FETCH_HIGHLIGHTS_UPDATES:
                        const where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: HOME_HIGHTLIGHTS_MODULE_ID }] };
                        const query = {
                            limit: API_RECORD_LIMIT,
                            order: DESC_OERDER,
                            where,
                        };
                        const url = FormatString(
                            URLS.BASE_URL_CMS,
                            URLS.CMS,
                            URLS.TENANT_ID,
                            JSON.stringify(query),
                        );

                        dispatch(apiRequest('', 'GET', url, HIGHLIGHTS_UPDATES));

                        break;
                    case `${HIGHLIGHTS_UPDATES}${API_SUCCESS}`:

                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setHighlightsDetails(action.payload.data.data));
                        break;
                    case `${HIGHLIGHTS_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, HIGHLIGHTS_UPDATES));
                        break;
                    default:
                        // logInfo('Default: ' + JSON.stringify(action.payload));

                        break
                }
            };
export const getHighlightsDetailsMiddleWare = [getHighlightsDetails];
