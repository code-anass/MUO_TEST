/**
 * Author: Alekya
 * Date: 03-MAY-2023
 */
export const NATIONAL_UPDATES = '[NATIONAL-Details]'
export const SET_NATIONAL_UPDATES = `${NATIONAL_UPDATES} Set`
export const FETCH_NATIONAL_UPDATES = `${NATIONAL_UPDATES} fetch`
export const CLEAR_NATIONAL_UPDATES = `${NATIONAL_UPDATES} clear`
export const NATIONAL_SCHEMA_UPDATES = '[National-Schema-Details]'
export const SET_NATIONAL_SCHEMA_UPDATES = `${NATIONAL_SCHEMA_UPDATES} Set`
export const FETCH_NATIONAL_SCHEMA_UPDATES = `${NATIONAL_SCHEMA_UPDATES} fetch`
export const STATE_UPDATES = '[STATE-Details]'
export const SET_STATE_UPDATES = `${STATE_UPDATES} Set`
export const FETCH_STATE_UPDATES = `${STATE_UPDATES} fetch`
export const CLEAR_STATE_UPDATES = `${STATE_UPDATES} clear`
export const STATE_SCHEMA_UPDATES = '[State-Schema-Details]'
export const SET_STATE_SCHEMA_UPDATES = `${STATE_SCHEMA_UPDATES} Set`
export const FETCH_STATE_SCHEMA_UPDATES = `${STATE_SCHEMA_UPDATES} fetch`
export const LOCAL_UPDATES = '[LOCAL-Details]'
export const SET_LOCAL_UPDATES = `${LOCAL_UPDATES} Set`
export const FETCH_LOCAL_UPDATES = `${LOCAL_UPDATES} fetch`
export const CLEAR_LOCAL_UPDATES = `${LOCAL_UPDATES} clear`
export const LOCAL_SCHEMA_UPDATES = '[Local-Schema-Details]'
export const SET_LOCAL_SCHEMA_UPDATES = `${LOCAL_SCHEMA_UPDATES} Set`
export const FETCH_LOCAL_SCHEMA_UPDATES = `${LOCAL_SCHEMA_UPDATES} fetch`
export const REGION_UPDATES = '[REGION-Details]'
export const SET_REGION_UPDATES = `${REGION_UPDATES} Set`
export const FETCH_REGION_UPDATES = `${REGION_UPDATES} fetch`
export const CLEAR_REGION_UPDATES = `${REGION_UPDATES} clear`
export const REGION_SCHEMA_UPDATES = '[Region-Schema-Details]'
export const SET_REGION_SCHEMA_UPDATES = `${REGION_SCHEMA_UPDATES} Set`
export const FETCH_REGION_SCHEMA_UPDATES = `${REGION_SCHEMA_UPDATES} fetch`

export const setNationalDetails = (query) => ({
    type: SET_NATIONAL_UPDATES,
    payload: query
})

export const setNationalSchemaDetails = (query) => ({
    type: SET_NATIONAL_SCHEMA_UPDATES,
    payload: query
})


export const clearNationalDetails = () => ({
    type: CLEAR_NATIONAL_UPDATES,
    payload: {}
})
export const fetchNationalDetails = (query) => ({
    type: FETCH_NATIONAL_UPDATES,

    payload: {
        data: query
    }
})

export const fetchNationalSchemaDetails = (query) => ({
    type: FETCH_NATIONAL_SCHEMA_UPDATES,
    payload: {
        data: query
    }
})

export const setStateDetails = (query) => ({
    type: SET_STATE_UPDATES,
    payload: query
})

export const setStateSchemaDetails = (query) => ({
    type: SET_STATE_SCHEMA_UPDATES,
    payload: query
})


export const clearStateDetails = () => ({
    type: CLEAR_STATE_UPDATES,
    payload: {}
})
export const fetchStateDetails = (query) => ({
    type: FETCH_STATE_UPDATES,

    payload: {
        data: query
    }
})

export const fetchStateSchemaDetails = (query) => ({
    type: FETCH_STATE_SCHEMA_UPDATES,
    payload: {
        data: query
    }
})

export const setLocalDetails = (query) => ({
    type: SET_LOCAL_UPDATES,
    payload: query
})

export const setLocalSchemaDetails = (query) => ({
    type: SET_LOCAL_SCHEMA_UPDATES,
    payload: query
})


export const clearLocalDetails = () => ({
    type: CLEAR_LOCAL_UPDATES,
    payload: {}
})
export const fetchLocalDetails = (query) => ({
    type: FETCH_LOCAL_UPDATES,

    payload: {
        data: query
    }
})

export const fetchLocalSchemaDetails = (query) => ({
    type: FETCH_LOCAL_SCHEMA_UPDATES,
    payload: {
        data: query
    }
})

export const setRegionDetails = (query) => ({
    type: SET_REGION_UPDATES,
    payload: query
})

export const setRegionSchemaDetails = (query) => ({
    type: SET_REGION_SCHEMA_UPDATES,
    payload: query
})


export const clearRegionDetails = () => ({
    type: CLEAR_REGION_UPDATES,
    payload: {}
})
export const fetchRegionDetails = (query) => ({
    type: FETCH_REGION_UPDATES,

    payload: {
        data: query
    }
})

export const fetchRegionSchemaDetails = (query) => ({
    type: FETCH_REGION_SCHEMA_UPDATES,
    payload: {
        data: query
    }
})
