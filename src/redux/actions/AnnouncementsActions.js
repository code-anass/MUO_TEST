/**
 * Author: Anitha Gorli
 * Date: 21-FEB-2023
 */
export const ANNOUNCEMENTS_UPDATES = '[Announcements-Details]'
export const SET_ANNOUNCEMENTS_UPDATES = `${ANNOUNCEMENTS_UPDATES} Set`
export const FETCH_ANNOUNCEMENTS_UPDATES = `${ANNOUNCEMENTS_UPDATES} fetch`
export const CLEAR_ANNOUNCEMENTS_UPDATES = `${ANNOUNCEMENTS_UPDATES} clear`

export const setAnnouncementsDetails = (query) => ({
    type: SET_ANNOUNCEMENTS_UPDATES,
    payload: query
})
export const clearAnnouncementsDetails = () => ({
    type: CLEAR_ANNOUNCEMENTS_UPDATES,
    payload: {}
})
export const fetchAnnouncementsDetails = (query) => ({
    type: FETCH_ANNOUNCEMENTS_UPDATES,
    payload: {
        data: query
    }
})