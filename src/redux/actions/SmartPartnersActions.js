/**
 * Author: Anitha Gorli
 * Date: 23-FEB-2023
 */
export const SMART_PARTNERS_UPDATES = '[Smart-Partners-Details]'
export const SET_SMART_PARTNERS_UPDATES = `${SMART_PARTNERS_UPDATES} Set`
export const FETCH_SMART_PARTNERS_UPDATES = `${SMART_PARTNERS_UPDATES} fetch`
export const CLEAR_SMART_PARTNERS_UPDATES = `${SMART_PARTNERS_UPDATES} clear`

export const setSmartPartnersDetails = (query) => ({
    type: SET_SMART_PARTNERS_UPDATES,
    payload: query
})
export const clearSmartPartnersDetails = () => ({
    type: CLEAR_SMART_PARTNERS_UPDATES,
    payload: {}
})
export const fetchSmartPartnersDetails = (query) => ({
    type: FETCH_SMART_PARTNERS_UPDATES,
    payload: {
        data: query
    }
})