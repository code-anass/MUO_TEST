/**
 * Author: Anitha Gorli
 * Date: 22-FEb-2023
 */

import { CLEAR_SMART_PARTNERS_UPDATES, SET_SMART_PARTNERS_UPDATES } from "../actions/SmartPartnersActions";
const initState = {};

export const smartPartnersDetailsReducer = (data = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_SMART_PARTNERS_UPDATES:
      var byOrder = payload.slice(0);
      byOrder.sort(function(a,b) {
          return a.data.order - b.data.order;
      });
      return byOrder;
    case CLEAR_SMART_PARTNERS_UPDATES:
      return [];
    default:
      return data;
  }
};
