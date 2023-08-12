import { CLEAR_NOTIFICATION, SET_NOTIFICATION } from '../actions/NotificationActions'

export const notificationReducer = (notification = {}, action) => {
    const { payload } = action
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                type: payload.meta,
                data: payload.data
            }
        case CLEAR_NOTIFICATION:
            return {}
        default:
            return notification
    }
}