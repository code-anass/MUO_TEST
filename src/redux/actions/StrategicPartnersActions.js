/**
 * Author: Anitha Gorli
 * Date: 23-FEB-2023
 */
export const STRATEGIC_PARTNERS_UPDATES = '[Strategic-Partners-Details]'
export const SET_STRATEGIC_PARTNERS_UPDATES = `${STRATEGIC_PARTNERS_UPDATES} Set`
export const FETCH_STRATEGIC_PARTNERS_UPDATES = `${STRATEGIC_PARTNERS_UPDATES} fetch`
export const CLEAR_STRATEGIC_PARTNERS_UPDATES = `${STRATEGIC_PARTNERS_UPDATES} clear`

export const setStrategicPartnersDetails = (query) => ({
    type: SET_STRATEGIC_PARTNERS_UPDATES,
    payload: query
})
export const clearStrategicPartnersDetails = () => ({
    type: CLEAR_STRATEGIC_PARTNERS_UPDATES,
    payload: {}
})
export const fetchStrategicPartnersDetails = (query) => ({
    type: FETCH_STRATEGIC_PARTNERS_UPDATES,
    payload: {
        data: query
    }
})