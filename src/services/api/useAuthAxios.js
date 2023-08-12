import axios from 'axios'
import { logInfo } from '../../utils/QLogger'
import { URLS } from '../config/urls'
let baseURL = URLS.BASE_URL 

const useAuthAxios = async (entity,header) => {
    let accessToken
    let axiosInstance
    logInfo(entity,header,"Props UseAuth")
    try {
        if (entity === "GENERIC") {
            axiosInstance = axios
        } 
        else if(header){
            accessToken = header;
            logInfo('AccessToken with header useAuthAxios -> ' + accessToken);
            axiosInstance = axios.create({
                baseURL,
                headers: { Authorization: `Bearer ${accessToken}` }
            });

        }
        else {
            accessToken = "";
            logInfo('AccessToken useAuthAxios -> ' + accessToken);
            axiosInstance = axios.create({
                baseURL,
                headers: { Authorization: `Bearer ${accessToken}` }
            });
        }
        axiosInstance.interceptors.request.use(request => {
            logInfo('Starting Request', JSON.stringify(request.data, null, 2))
            return request
        })
        axiosInstance.interceptors.response.use(response => {
            logInfo('Starting Response', JSON.stringify(response.data, null, 2))
            return response
        })

        return axiosInstance

    } catch (error) {
        logInfo(error);
        axiosInstance = axios.create({
            baseURL,
        });
        axiosInstance.interceptors.request.use(request => {
            logInfo('Starting Request', JSON.stringify(request.data, null, 2))
            return request
        })
        axiosInstance.interceptors.response.use(response => {
            logInfo("Response : " + JSON.stringify(response.data));
            return response
        })

        return axiosInstance
    }
}

export default useAuthAxios;