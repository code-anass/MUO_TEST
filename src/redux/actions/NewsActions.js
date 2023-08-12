/**
 * Author: Anitha Gorli
 * Date: 6-APR-2023
 */
export const NEWS_UPDATES = '[News-Details]'
export const SET_NEWS_UPDATES = `${NEWS_UPDATES} Set`
export const FETCH_NEWS_UPDATES = `${NEWS_UPDATES} fetch`
export const CLEAR_NEWS_UPDATES = `${NEWS_UPDATES} clear`

export const setNewsDetails = (query) => ({
    type: SET_NEWS_UPDATES,
    payload: query
})
export const clearNewsDetails = () => ({
    type: CLEAR_NEWS_UPDATES,
    payload: {}
})
export const fetchNewsDetails = (query) => ({
    type: FETCH_NEWS_UPDATES,
    payload: {
        data: query
    }
})