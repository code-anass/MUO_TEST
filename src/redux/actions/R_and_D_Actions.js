/**
 * Author: Alekya
 * Date: 07-JUN-2023
 */
export const R_AND_D_UPDATES = '[R_AND_D-Details]'
export const SET_R_AND_D_UPDATES = `${R_AND_D_UPDATES} Set`
export const FETCH_R_AND_D_UPDATES = `${R_AND_D_UPDATES} fetch`
export const CLEAR_R_AND_D_UPDATES = `${R_AND_D_UPDATES} clear`
export const R_AND_D_LOGIN = '[R_AND_D-Login]'
export const FETCH_LOGIN = `${R_AND_D_LOGIN} fetch`
export const SET_LOGIN = `${R_AND_D_LOGIN} Set`
export const CLEAR_LOGIN = `${R_AND_D_LOGIN} clear`

export const ACCEPT_REQUEST = '[Accept-Request]'
export const FETCH_ACCEPT_REQUEST = `${ACCEPT_REQUEST} fetch`
export const AUTH_CODE = '';


export const setR_AND_DDetails = (query) => ({
    type: SET_R_AND_D_UPDATES,
    payload: query
})
export const clearR_AND_DDetails = () => ({
    type: CLEAR_R_AND_D_UPDATES,
    payload: {}
})
export const fetchR_AND_DDetails = (query) => ({
    type: FETCH_R_AND_D_UPDATES,
    payload: {
        data: query
    }
})
export const fetchLogin = () =>({
    type: FETCH_LOGIN,
    payload: {}
})
export const clearLogin = () => ({
    type: CLEAR_LOGIN,
    payload: {}
})


export const setLogin = (query) => ({
    type: SET_LOGIN,
    payload: query
})

export const fetchAccessRequest = (query) => ({
    type: FETCH_ACCEPT_REQUEST,
    payload: {
        data: query
    }
}) 