import * as actionTypes from "./action-types";
import { COLORS, SIZES } from "../constants";
import { FONTS } from "../constants";

function get_INITIAL_STATE() {
    return SIZES
}

const initialState = SIZES

export const fontReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FONT_INCREMENT:
            if (state.medium >= 19) {
                return { ...state };
            }
            return {
                ...state,
                h6: state.h6 + 1,
                h4: state.h4 + 1,
                h5: state.h5 + 1,
                heading: state.heading + 1,
                medium: state.medium + 1,
                large: state.large + 1,
                extraLarge: state.extraLarge + 1,
                extremeLarge: state.extremeLarge + 1
            }
        case actionTypes.FONT_DECREMENT:
            if (state.medium <= 11) {
                return { ...state };
            }
            return {
                ...state,
                h6: state.h6 -1,
                h4: state.h4 -1,
                h5: state.h5 -1,
                heading: state.heading - 1,
                medium: state.medium - 1,
                large: state.large - 1,
                extraLarge: state.extraLarge - 1,
                extremeLarge: state.extremeLarge - 1
            }
        case actionTypes.FONT_DEFAULT:
            return get_INITIAL_STATE();

        default:
            return state
    }
}
export const fontColorReducer = (state = COLORS, action) => {
    switch (action.type) {
        case actionTypes.FONT_COLOR_DEFAULT:
            return {
                ...state,
                def_color: state.black,
                def_header: state.homeHeader,
                def_text_inverse_color: state.white,
                def_text_inverse_color_1: state.green


            }
        case actionTypes.FONT_YELLOW:
            return {
                ...state,
                def_color: state.yellow,
                def_header: state.yellow,
                def_text_inverse_color: state.yellow,
                def_text_inverse_color_1: state.yellow

            }
        case actionTypes.FONT_GREEN:
            return {
                ...state,
                def_color: state.green,
                def_header: state.green,
                def_text_inverse_color: state.green,
                def_text_inverse_color_1: state.green


            }
        case actionTypes.FONT_BLUE:
            return {
                ...state,
                def_color: state.blue,
                def_header: state.blue,
                def_text_inverse_color: state.blue,
                def_text_inverse_color_1: state.blue


            }
        default:
            return state
    }
}
export const fontNameReducer = (state = FONTS, action) => {
    switch (action.type) {
        case actionTypes.FONT_LATO:
            return {
                ...state,
                Def_Font: state.Lato,
            }

        case actionTypes.FONT_PT_SANS:
            return {
                ...state,
                Def_Font: state.PT_Sans,
            }
        case actionTypes.FONT_CENTURY:
            return {
                ...state,
                Def_Font: state.Century,
            }
        default:
            return state
    }
}