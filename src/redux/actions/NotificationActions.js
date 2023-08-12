export const SET_NOTIFICATION = 'SET_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'
export const setNotification = (notification, entity) => ({
    type: SET_NOTIFICATION,
    payload: {
        data: notification,
        meta: entity
    }
})
export const clearNotification = () => ({
    type: CLEAR_NOTIFICATION,
    payload: {}
})