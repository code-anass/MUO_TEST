import axios from 'axios'
import { logInfo } from '../../utils/QLogger';
import { URLS } from '../config/urls'
const useAxios = () => {
    let baseURL = URLS.BASE_URL;

    const axiosInstance = axios.create({
        baseURL,
    });
    axiosInstance.interceptors.request.use(request => {
        logInfo('Starting Request', JSON.stringify(request))
        return request
    })
    axiosInstance.interceptors.response.use(response => {
        logInfo("Response : " + JSON.stringify(response.data));
        return response.data
    })
    return axiosInstance
}
export default useAxios;