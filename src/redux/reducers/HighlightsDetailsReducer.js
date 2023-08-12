/**
 * Author: Anitha Gorli
 * Date: 22-FEb-2023
 */

import { CLEAR_HIGHLIGHTS_UPDATES, SET_HIGHLIGHTS_UPDATES } from "../actions/HighlightsActions";
const initState = {};

export const highlightsDetailsReducer = (data = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_HIGHLIGHTS_UPDATES:
      var byOrder = payload.slice(0);
      byOrder.sort(function(a,b) {
          return a.data.order_id - b.data.order_id;
      });
      return byOrder;
     case CLEAR_HIGHLIGHTS_UPDATES:
      return [];
    default:
      return data;
  }
};
