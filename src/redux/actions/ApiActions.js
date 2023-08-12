export const API_REQUEST = 'API-REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'

export const apiRequest = (body, method, url, entity, header) => ({
    type: `${entity}${API_REQUEST}`,
    payload: {
        data: body,
        meta: {method, url, entity, header}
    }
})

export const apiResponse = (response, entity) => ({
    type: `${entity}${API_SUCCESS}`,
    payload: {
        data: response,
        meta: {entity}
    }
})

export const apiError = (error, entity) => ({
    type: `${entity}${API_ERROR}`,
    payload: {
        data: error,
        meta: {entity}
    }
})
