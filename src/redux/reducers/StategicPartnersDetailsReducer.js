/**
 * Author: Anitha Gorli
 * Date: 23-FEb-2023
 */

import { CLEAR_STRATEGIC_PARTNERS_UPDATES, SET_STRATEGIC_PARTNERS_UPDATES } from "../actions/StrategicPartnersActions";
const initState = {};

export const strategicPartnersDetailsReducer = (data = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_STRATEGIC_PARTNERS_UPDATES:
      var byOrder = payload.slice(0);
      byOrder.sort(function (a, b) {
        return a.data.order - b.data.order;
      });
      return byOrder;
    case CLEAR_STRATEGIC_PARTNERS_UPDATES:
      return [];
    default:
      return data;
  }
};
