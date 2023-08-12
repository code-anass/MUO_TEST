import * as actionTypes from './action-types';

export const increaseFont = () => {
    return {
        type: actionTypes.FONT_INCREMENT
    }
}
export const defaultFont = () => {
    return {
        type: actionTypes.FONT_DEFAULT
    }
}
export const decreaseFont = () => {
    return {
        type: actionTypes.FONT_DECREMENT
    }
}
export const colorDefault = () => {
    return {
        type: actionTypes.FONT_COLOR_DEFAULT
    }
}
export const colorYellow = () => {
    return {
        type: actionTypes.FONT_YELLOW
    }
}
export const colorGreen = () => {
    return {
        type: actionTypes.FONT_GREEN
    }
}
export const colorBlue = () => {
    return {
        type: actionTypes.FONT_BLUE
    }
}


export const changeFontToLato = () => {
    return {
        type: actionTypes.FONT_LATO
    }
}
export const changeFontToCentury = () => {
    return {
        type: actionTypes.FONT_CENTURY
    }
}
export const changeFontToPTSans = () => {
    return {
        type: actionTypes.FONT_PT_SANS
    }
}