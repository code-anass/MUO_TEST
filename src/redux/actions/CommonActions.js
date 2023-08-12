/**
 * Author: Anitha Gorli
 * Date: 25-NOV-2022
 */
export const COMMON_UPDATES = '[Common-Details]'
export const COMMON_UPDATES_SCHEMA = '[Common-Details-Schema]'

export const SET_COMMON_UPDATES = `${COMMON_UPDATES} Set`
export const FETCH_COMMON_UPDATES = `${COMMON_UPDATES} fetch`
export const CLEAR_COMMON_UPDATES = `${COMMON_UPDATES} clear`

export const FETCH_COMMON_UPDATES_SCHEMA = `${COMMON_UPDATES_SCHEMA} fetch Schema`
export const SET_COMMON_UPDATES_SCHEMA = `${COMMON_UPDATES_SCHEMA} Set Schema`


export const setCommonDetails = (query) => ({
    type: SET_COMMON_UPDATES,
    payload: query
})
export const clearCommonDetails = () => ({
    type: CLEAR_COMMON_UPDATES,
    payload: {}
})
export const fetchCommonDetails = (query) => ({
    type: FETCH_COMMON_UPDATES,
    payload: {
        data: query
    }
})



export const fetchCommonDetailsSchema = (query) => ({
    type: FETCH_COMMON_UPDATES_SCHEMA,
    payload: {
        data: query
    }
})


export const setCommonDetailsSchema = (query) => ({
    type: SET_COMMON_UPDATES_SCHEMA,
    payload: query
})
