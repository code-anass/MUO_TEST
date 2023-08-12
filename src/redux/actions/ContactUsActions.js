/**
 * Author: Anitha Gorli
 * Date: 10-MAY-2023
 */
export const CONTACT_US_UPDATES = '[Contact-Us-Details]'
export const SET_CONTACT_US_UPDATES = `${CONTACT_US_UPDATES} Set`
export const FETCH_CONTACT_US_UPDATES = `${CONTACT_US_UPDATES} fetch`
export const CLEAR_CONTACT_US_UPDATES = `${CONTACT_US_UPDATES} clear`
export const POST_CONTACT_US_UPDATES = `${CONTACT_US_UPDATES} post`

export const setContactUsDetails = (query) => ({
    type: SET_CONTACT_US_UPDATES,
    payload: query
})
export const clearContactUsDetails = () => ({
    type: CLEAR_CONTACT_US_UPDATES,
    payload: {}
})
export const fetchContactUsDetails = (query) => ({
    type: FETCH_CONTACT_US_UPDATES,
    payload: {
        data: query
    }
})
export const postComplaint = (query) => ({
    type: POST_CONTACT_US_UPDATES,
    payload: {
        input: query
    }
})