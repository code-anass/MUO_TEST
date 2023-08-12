/**
 * Author: Alekya
 * Date: 05-APR-2023
 */
export const ABOUTUS_UPDATES = '[ABOUTUS-Details]'
export const SET_ABOUTUS_UPDATES = `${ABOUTUS_UPDATES} Set`
export const FETCH_ABOUTUS_UPDATES = `${ABOUTUS_UPDATES} fetch`
export const CLEAR_ABOUTUS_UPDATES = `${ABOUTUS_UPDATES} clear`

export const setABOUTUSDetails = (query) => ({
    type: SET_ABOUTUS_UPDATES,
    payload: query
})
export const clearABOUTUSDetails = () => ({
    type: CLEAR_ABOUTUS_UPDATES,
    payload: {}
})
export const fetchABOUTUSDetails = (query) => ({
    type: FETCH_ABOUTUS_UPDATES,
    payload: {
        data: query
    }
})