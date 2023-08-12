/**
 * Author: Anitha Gorli
 * Date: 14-JUNE-2023
 */

import { CLEAR_LOGIN, SET_LOGIN } from "../actions/R_and_D_Actions";

const initState = {};

export const loginReducer = (data = initState, action) => {
    const { payload } = action;
    
    switch (action.type) {
        case SET_LOGIN:           
            return payload;
        case CLEAR_LOGIN:
            return [];
        default:
            return data;
    }
};
