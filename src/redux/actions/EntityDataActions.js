/**
 * Author: Anitha Gorli
 * Date: 09-JUN-2023
 */
export const ENTITY_DATA_UPDATES = '[Entity-Data-Details]'
export const SET_ENTITY_DATA_UPDATES = `${ENTITY_DATA_UPDATES} Set`
export const FETCH_ENTITY_DATA_UPDATES = `${ENTITY_DATA_UPDATES} fetch`
export const CLEAR_ENTITY_DATA_UPDATES = `${ENTITY_DATA_UPDATES} clear`
export const POST_ENTITY_DATA_UPDATES = `${ENTITY_DATA_UPDATES} post`

export const setEntityDataDetails = (query) => ({
    type: SET_ENTITY_DATA_UPDATES,
    payload: query
})
export const clearEntityDataDetails = () => ({
    type: CLEAR_ENTITY_DATA_UPDATES,
    payload: {}
})
export const fetchEntityData = (query) => ({
    type: FETCH_ENTITY_DATA_UPDATES,
    payload: {
        data: query
    }
})
