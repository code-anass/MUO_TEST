import useAuthAxios from '../../../services/api/useAuthAxios'
import { logInfo } from '../../../utils/QLogger';
import { apiError, apiResponse, API_REQUEST } from "../../actions/ApiActions"
import useNetwork from './NetworkUtils'

export const apiMiddleWare = ({ dispatch }) => (next) => async (action) => {

    const {
        online
    } = {online:true};
    next(action)
    if (action.payload.meta != undefined) {
        const { entity, method, url, header } = action.payload.meta
        logInfo(action.payload, "Loginfo API Core")
        if (action.type === `${entity}${API_REQUEST}`) {
            if (online) {
                if (method === 'POST') {
                    (await useAuthAxios(entity, header)).post(url, action.payload?.data)
                        .then(response => response)
                        .then(data => dispatch(apiResponse(data, entity)))
                        .catch(error => dispatch(apiError(error.response?.data, entity)))
                } else if (method === 'GET') {
                    (await useAuthAxios(entity,header)).get(url)
                        .then(response => response)
                        .then(data => dispatch(apiResponse(data, entity)))
                        .catch(error => dispatch(apiError(error.response?.data, entity)))
                } else if (method === 'PUT') {
                    (await useAuthAxios(entity)).put(url, action.payload.data)
                        .then(response => response)
                        .then(data => dispatch(apiResponse(data, entity)))
                        .catch(error => dispatch(apiError(error.response?.data, entity)))
                } else if (method === 'DELETE') {
                    (await useAuthAxios(entity)).delete(url, action.payload.data)
                        .then(response => response)
                        .then(data => dispatch(apiResponse(data, entity)))
                        .catch(error => dispatch(apiError(error.response?.data, entity)))
                } else if (method === 'FILE_UPLOAD') {
                    const fileUpload = action.payload.data;

                    const config = {
                        maxContentLength: fileUpload.size,
                        maxBodyLength: fileUpload.size,
                        headers: {
                            "content-type": "multipart/form-data"
                        },
                        transformRequest: (_data, _headers) => {
                            return fileUpload; // this is doing the trick
                        },
                    };
                    logInfo("URL :", url);

                    (await useAuthAxios(entity)).post(url, fileUpload, config)
                        .then(response => response)
                        .then(data => {
                            dispatch(apiResponse(data, entity))
                        })
                        .catch(error => {
                            logInfo("Image upload error " + JSON.stringify(error))
                            dispatch(apiError(error.response?.data, entity))
                        })
                }

            } else {
                logInfo("Internet not available.");
                dispatch(apiError("server.network", entity))
            }


        }
    }
}