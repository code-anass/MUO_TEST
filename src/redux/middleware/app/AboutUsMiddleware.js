/**
 * Author:  Alekya
 * Date: 06-APR-2023
 */
import { FormatString, URLS } from '../../../services/config/urls';
import { apiRequest, API_ERROR, API_SUCCESS } from '../../actions/ApiActions';
import {
    setABOUTUSDetails,
    ABOUTUS_UPDATES,
    FETCH_ABOUTUS_UPDATES,
} from '../../actions/AboutUsActions';
import { setNotification } from '../../actions/NotificationActions';
import {
    DESC_OERDER,
    API_RECORD_LIMIT, ABOUTUS_MODULE_ID
} from '../../../utils/Constants';
import { logInfo } from '../../../utils/QLogger';

export const getAboutusDetails =
    ({ dispatch }) =>
        next =>
            action => {
                next(action);

                switch (action.type) {
                    case FETCH_ABOUTUS_UPDATES:
                        const where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: ABOUTUS_MODULE_ID }] };
                        const query = {
                            where,
                        };
                        const url = FormatString(
                            URLS.BASE_URL_CMS,
                            URLS.CMS_SCHEMA,
                            URLS.TENANT_ID,
                            JSON.stringify(query),
                        );

                        dispatch(apiRequest('', 'GET', url, ABOUTUS_UPDATES));

                        break;
                    case `${ABOUTUS_UPDATES}${API_SUCCESS}`:

                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data[0].format)}`,"ABOUTUS");

                        dispatch(setABOUTUSDetails(action.payload.data.data[0].format));
                        break;
                    case `${ABOUTUS_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, ABOUTUS_UPDATES));
                        break;
                    default:
                        // logInfo('Default: ' + JSON.stringify(action.payload));

                        break
                }
            };
export const getAboutusDetailsMiddleWare = [getAboutusDetails];
