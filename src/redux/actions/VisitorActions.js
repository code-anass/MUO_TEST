/**
 * Author: Anitha Gorli
 * Date: 13-JUNE-2023
 */
export const VISITORS_UPDATES = '[Visitors-Details]'
export const SET_VISITORS_UPDATES = `${VISITORS_UPDATES} Set`
export const FETCH_VISITORS_UPDATES = `${VISITORS_UPDATES} fetch`
export const CLEAR_VISITORS_UPDATES = `${VISITORS_UPDATES} clear`
export const PAGE_VISITORS = `${VISITORS_UPDATES} page visitor`
export const POST_PAGE_VISITORS = `${VISITORS_UPDATES} log visitor`

export const setVisitorsDetails = (query) => ({
    type: SET_VISITORS_UPDATES,
    payload: query
})
export const clearVisitorsDetails = () => ({
    type: CLEAR_VISITORS_UPDATES,
    payload: {}
})
export const fetchVisitorsDetails = (query) => ({
    type: FETCH_VISITORS_UPDATES,
    payload: {
        data: query
    }
})


export const logPageVisitor = (query) => ({
    type: POST_PAGE_VISITORS,
    payload: {
        data: query
    }
})