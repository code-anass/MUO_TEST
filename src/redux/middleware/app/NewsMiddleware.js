/**
 * Author:  Anitha Gorli
 * Date: 06-APR-2022
 */
import { FormatString, URLS } from '../../../services/config/urls';
import { apiRequest, API_ERROR, API_SUCCESS } from '../../actions/ApiActions';
import {
    setNewsDetails,
    NEWS_UPDATES,
    FETCH_NEWS_UPDATES,
} from '../../actions/NewsActions';
import { setNotification } from '../../actions/NotificationActions';
import {
    DESC_OERDER,
    API_RECORD_LIMIT, NEWS_MODULE_ID
} from '../../../utils/Constants';
import { logInfo } from '../../../utils/QLogger';

export const getNewsDetails =
    ({ dispatch }) =>
        next =>
            action => {
                next(action);

                switch (action.type) {
                    case FETCH_NEWS_UPDATES:
                        const where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: NEWS_MODULE_ID
                        }] };
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

                        dispatch(apiRequest('', 'GET', url, NEWS_UPDATES));

                        break;
                    case `${NEWS_UPDATES}${API_SUCCESS}`:

                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setNewsDetails(action.payload.data.data));
                        break;
                    case `${NEWS_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, NEWS_UPDATES));
                        break;
                    default:
                        // logInfo('Default: ' + JSON.stringify(action.payload));

                        break
                }
            };
export const getNewsDetailsMiddleWare = [getNewsDetails];
