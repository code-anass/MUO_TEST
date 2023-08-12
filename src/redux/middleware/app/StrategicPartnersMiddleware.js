/**
 * Author:  Anitha Gorli
 * Date: 23-MARCH-2022
 */
import { FormatString, URLS } from '../../../services/config/urls';
import { apiRequest, API_ERROR, API_SUCCESS } from '../../actions/ApiActions';
import {
    setStrategicPartnersDetails,
    STRATEGIC_PARTNERS_UPDATES,
    FETCH_STRATEGIC_PARTNERS_UPDATES,
} from '../../actions/StrategicPartnersActions';
import { setNotification } from '../../actions/NotificationActions';
import {
    DESC_OERDER,
    API_RECORD_LIMIT, HOME_STRATEGIC_PARTNERS_MODULE_ID
} from '../../../utils/Constants';
import { logInfo } from '../../../utils/QLogger';

export const getStrategicPartnersDetails =
    ({ dispatch }) =>
        next =>
            action => {
                next(action);

                switch (action.type) {
                    case FETCH_STRATEGIC_PARTNERS_UPDATES:
                        const where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: HOME_STRATEGIC_PARTNERS_MODULE_ID }] };
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

                        dispatch(apiRequest('', 'GET', url, STRATEGIC_PARTNERS_UPDATES));

                        break;
                    case `${STRATEGIC_PARTNERS_UPDATES}${API_SUCCESS}`:

                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setStrategicPartnersDetails(action.payload.data.data));
                        break;
                    case `${STRATEGIC_PARTNERS_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, STRATEGIC_PARTNERS_UPDATES));
                        break;
                    default:
                        // logInfo('Default: ' + JSON.stringify(action.payload));

                        break
                }
            };
export const getStrategicPartnersDetailsMiddleWare = [getStrategicPartnersDetails];
