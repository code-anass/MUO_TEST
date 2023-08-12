/**
 * Author: Anitha Gorli
 * Date: 14-JUNE-2023
 */

import {
  CLEAR_VISITORS_UPDATES,
  SET_VISITORS_UPDATES,
} from "../actions/VisitorActions";
const initState = {};

export const visitorsReducer = (data = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_VISITORS_UPDATES:
      const visitors = {
        title: 'footer.visitorCount',
        links: [
          {
            title: "footer.online",
            value: payload.online,
          },
          {
            title: "footer.today",
            value: payload.today,
          },
          {
            title: "footer.yesterday",
            value: payload.yesterday,
          },
          {
            title: "footer.total",
            value: payload.total,
          },
        ],
      };

      return visitors;
    case CLEAR_VISITORS_UPDATES:
      return [];
    default:
      return data;
  }
};
