/**
 * Author:  Anitha Gorli
 * Date: 10-MAY-2023
 */
import { FormatString, URLS } from '../../../services/config/urls';
import { apiRequest, API_ERROR, API_SUCCESS } from '../../actions/ApiActions';
import {
    setContactUsDetails,
    CONTACT_US_UPDATES,
    POST_CONTACT_US_UPDATES,
} from '../../actions/ContactUsActions';
import { setNotification } from '../../actions/NotificationActions';
import {COMPLAINTS_MODULE_NAME, COMPLAINTS_WEBHOOK_KEY
} from '../../../utils/Constants';
import { logInfo } from '../../../utils/QLogger';

export const getContactUs =
    ({ dispatch }) =>
        next =>
            action => {
                next(action);

                switch (action.type) {
                    case POST_CONTACT_US_UPDATES:
                      
                        const url = FormatString(
                            URLS.BASE_URL_WEBHOOK,
                            URLS.TENANT_ID,
                            COMPLAINTS_MODULE_NAME,
                            COMPLAINTS_WEBHOOK_KEY
                        );

                        logInfo(url,"Middleware-------")

                        dispatch(apiRequest(action.payload, 'POST', url, CONTACT_US_UPDATES));

                        break;
                    case `${CONTACT_US_UPDATES}${API_SUCCESS}`:

                        logInfo(
                            `API Success Contact Us:${JSON.stringify(action.payload.data)} New Data ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setContactUsDetails(action.payload.data.data));
                        break;
                    case `${CONTACT_US_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, CONTACT_US_UPDATES));
                        break;
                    default:
                        // logInfo('Default: ' + JSON.stringify(action.payload));

                        break
                }
            };
export const getContactUsMiddleWare = [getContactUs];
