/**
 * Author: Anitha Gorli
 * Date: 21-FEB-2023
 */

import { CLEAR_ANNOUNCEMENTS_UPDATES, SET_ANNOUNCEMENTS_UPDATES } from "../actions/AnnouncementsActions";
const initState = {};

export const announcementsDetailsReducer = (data = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_ANNOUNCEMENTS_UPDATES:
      var byOrder = payload.slice(0);
      byOrder.sort(function(a,b) {
          return a.data.Order - b.data.Order;
      });
      return byOrder;
    case CLEAR_ANNOUNCEMENTS_UPDATES:
      return [];
    default:
      return data;
  }
};
