/**
 * Author: Anitha Gorli
 * Date: 10-MAY-2023
 */

import { CLEAR_CONTACT_US_UPDATES, SET_CONTACT_US_UPDATES } from "../actions/ContactUsActions";
const initState = {};

export const contactUsReducer = (data = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_CONTACT_US_UPDATES:
      return payload;
    case CLEAR_CONTACT_US_UPDATES:
      return [];
    default:
      return data;
  }
};
