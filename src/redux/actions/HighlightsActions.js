/**
 * Author: Anitha Gorli
 * Date: 22-FEB-2023
 */
export const HIGHLIGHTS_UPDATES = '[Highlights-Details]'
export const SET_HIGHLIGHTS_UPDATES = `${HIGHLIGHTS_UPDATES} Set`
export const FETCH_HIGHLIGHTS_UPDATES = `${HIGHLIGHTS_UPDATES} fetch`
export const CLEAR_HIGHLIGHTS_UPDATES = `${HIGHLIGHTS_UPDATES} clear`

export const setHighlightsDetails = (query) => ({
    type: SET_HIGHLIGHTS_UPDATES,
    payload: query
})
export const clearHighlightsDetails = () => ({
    type: CLEAR_HIGHLIGHTS_UPDATES,
    payload: {}
})
export const fetchHighlightsDetails = (query) => ({
    type: FETCH_HIGHLIGHTS_UPDATES,
    payload: {
        data: query
    }
})