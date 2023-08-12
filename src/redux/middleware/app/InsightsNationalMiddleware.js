/**
 * Author:  Alekya
 * Date: 03-MAY-2023
 */
import { FormatString, URLS } from '../../../services/config/urls';
import { apiRequest, API_ERROR, API_SUCCESS } from '../../actions/ApiActions';
import {
    setNationalDetails,
    NATIONAL_UPDATES,
    FETCH_NATIONAL_UPDATES,
    clearNationalDetails,
    NATIONAL_SCHEMA_UPDATES,
    setNationalSchemaDetails,
    FETCH_NATIONAL_SCHEMA_UPDATES,

    setStateDetails,
    STATE_UPDATES,
    FETCH_STATE_UPDATES,
    clearStateDetails,
    STATE_SCHEMA_UPDATES,
    setStateSchemaDetails,
    FETCH_STATE_SCHEMA_UPDATES,

    setRegionDetails,
    REGION_UPDATES,
    FETCH_REGION_UPDATES,
    clearRegionDetails,
    REGION_SCHEMA_UPDATES,
    setRegionSchemaDetails,
    FETCH_REGION_SCHEMA_UPDATES,

    setLocalDetails,
    LOCAL_UPDATES,
    FETCH_LOCAL_UPDATES,
    clearLocalDetails,
    LOCAL_SCHEMA_UPDATES,
    setLocalSchemaDetails,
    FETCH_LOCAL_SCHEMA_UPDATES

} from '../../actions/InsightNationalActions';
import { setNotification } from '../../actions/NotificationActions';
import {
    DESC_OERDER,
    API_RECORD_LIMIT, NATIONAL_MODULE_ID, STATE_MODULE_ID, REGION_MODULE_ID, LOCAL_MODULE_ID
} from '../../../utils/Constants';
import { logInfo } from '../../../utils/QLogger';

export const getNationalDetails =
    ({ dispatch }) =>
        next =>
            action => {
                next(action);
                logInfo(action.type, "ActionType ");
                let where = {};
                logInfo(action.type, "ActionType");
                switch (action.type) {
                    case FETCH_NATIONAL_UPDATES:
                        where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: NATIONAL_MODULE_ID }] };
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

                        dispatch(apiRequest('', 'GET', url, NATIONAL_UPDATES));

                        break;
                    case FETCH_NATIONAL_SCHEMA_UPDATES:
                        where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: NATIONAL_MODULE_ID }] };
                        const query1 = {
                            where,
                        };
                        const url1 = FormatString(
                            URLS.BASE_URL_CMS,
                            URLS.CMS_SCHEMA,
                            URLS.TENANT_ID,
                            JSON.stringify(query1),
                        );

                        dispatch(apiRequest('', 'GET', url1, NATIONAL_SCHEMA_UPDATES));

                        break;
                    case `${NATIONAL_SCHEMA_UPDATES}${API_SUCCESS}`:
                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setNationalSchemaDetails(action.payload.data.data[0].format));
                        break;
                    case `${NATIONAL_SCHEMA_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, NATIONAL_SCHEMA_UPDATES));

                        break;
                    case `${NATIONAL_UPDATES}${API_SUCCESS}`:
                        dispatch(clearNationalDetails());

                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setNationalDetails(action.payload.data.data));
                        break;
                    case `${NATIONAL_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, NATIONAL_UPDATES));
                        break;

                    case FETCH_STATE_UPDATES:
                        where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: STATE_MODULE_ID }] };
                        const staatequery = {
                            limit: API_RECORD_LIMIT,
                            order: DESC_OERDER,
                            where,
                        };
                        const stateurl = FormatString(
                            URLS.BASE_URL_CMS,
                            URLS.CMS,
                            URLS.TENANT_ID,
                            JSON.stringify(staatequery),
                        );

                        logInfo(stateurl, "StaateURL");

                        dispatch(apiRequest('', 'GET', stateurl, STATE_UPDATES));

                        break;
                    case `${STATE_UPDATES}${API_SUCCESS}`:
                        dispatch(clearStateDetails());

                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setStateDetails(action.payload.data.data));
                        break;
                    case `${STATE_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, STATE_UPDATES));
                        break;
                    case FETCH_STATE_SCHEMA_UPDATES:
                        where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: STATE_MODULE_ID }] };
                        const statequery1 = {
                            where,
                        };
                        const stateurl1 = FormatString(
                            URLS.BASE_URL_CMS,
                            URLS.CMS_SCHEMA,
                            URLS.TENANT_ID,
                            JSON.stringify(statequery1),
                        );

                        logInfo(stateurl1, "StateURL");

                        dispatch(apiRequest('', 'GET', stateurl1, STATE_SCHEMA_UPDATES));

                        break;
                    case `${STATE_SCHEMA_UPDATES}${API_SUCCESS}`:
                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setStateSchemaDetails(action.payload.data.data[0].format));
                        break;
                    case `${STATE_SCHEMA_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, STATE_SCHEMA_UPDATES));

                        break;

                    case FETCH_REGION_UPDATES:
                        where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: REGION_MODULE_ID }] };
                        const regionquery = {
                            limit: API_RECORD_LIMIT,
                            order: DESC_OERDER,
                            where,
                        };
                        const regionurl = FormatString(
                            URLS.BASE_URL_CMS,
                            URLS.CMS,
                            URLS.TENANT_ID,
                            JSON.stringify(regionquery),
                        );

                        logInfo(regionurl, "RegionURL");

                        dispatch(apiRequest('', 'GET', regionurl, REGION_UPDATES));

                        break;
                    case `${REGION_UPDATES}${API_SUCCESS}`:
                        dispatch(clearRegionDetails());

                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setRegionDetails(action.payload.data.data));
                        break;
                    case `${REGION_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, REGION_UPDATES));
                        break;
                    case FETCH_REGION_SCHEMA_UPDATES:
                        where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: REGION_MODULE_ID }] };
                        const regionquery1 = {
                            where,
                        };
                        const regionurl1 = FormatString(
                            URLS.BASE_URL_CMS,
                            URLS.CMS_SCHEMA,
                            URLS.TENANT_ID,
                            JSON.stringify(regionquery1),
                        );

                        logInfo(regionurl1, "RegionURL");

                        dispatch(apiRequest('', 'GET', regionurl1, REGION_SCHEMA_UPDATES));

                        break;
                    case `${REGION_SCHEMA_UPDATES}${API_SUCCESS}`:
                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setRegionSchemaDetails(action.payload.data.data[0].format));
                        break;
                    case `${REGION_SCHEMA_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, REGION_SCHEMA_UPDATES));

                        break;

                    case FETCH_LOCAL_UPDATES:
                        where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: LOCAL_MODULE_ID }] };
                        const localquery = {
                            limit: API_RECORD_LIMIT,
                            order: DESC_OERDER,
                            where,
                        };
                        const localurl = FormatString(
                            URLS.BASE_URL_CMS,
                            URLS.CMS,
                            URLS.TENANT_ID,
                            JSON.stringify(localquery),
                        );

                        logInfo(localurl, "LocalURL");

                        dispatch(apiRequest('', 'GET', localurl, LOCAL_UPDATES));

                        break;
                    case `${LOCAL_UPDATES}${API_SUCCESS}`:
                        dispatch(clearLocalDetails());

                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setLocalDetails(action.payload.data.data));
                        break;
                    case `${LOCAL_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, LOCAL_UPDATES));
                        break;
                    case FETCH_LOCAL_SCHEMA_UPDATES:
                        where = { and: [{ tenantId: URLS.TENANT_ID }, { moduleId: LOCAL_MODULE_ID }] };
                        const localquery1 = {
                            where,
                        };
                        const localurl1 = FormatString(
                            URLS.BASE_URL_CMS,
                            URLS.CMS_SCHEMA,
                            URLS.TENANT_ID,
                            JSON.stringify(localquery1),
                        );

                        logInfo(localurl1, "StateURL");

                        dispatch(apiRequest('', 'GET', localurl1, LOCAL_SCHEMA_UPDATES));

                        break;
                    case `${LOCAL_SCHEMA_UPDATES}${API_SUCCESS}`:
                        logInfo(
                            `API Success : ${JSON.stringify(action.payload.data.data)}`,
                        );

                        dispatch(setLocalSchemaDetails(action.payload.data.data[0].format));
                        break;
                    case `${LOCAL_SCHEMA_UPDATES}${API_ERROR}`:
                        logInfo('API Error: ' + JSON.stringify(action.payload));
                        dispatch(setNotification(action.payload.data, LOCAL_SCHEMA_UPDATES));

                        break;
                    default:
                        // logInfo('Default: ' + JSON.stringify(action.payload));

                        break
                }
            };
export const getNationalDetailsMiddleWare = [getNationalDetails];
