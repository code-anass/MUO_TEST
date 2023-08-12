/**
 * Author: Anitha Gorli
 * Date: 06-APR-2023
 */

import { logInfo } from "../../utils/QLogger";
import { CLEAR_NEWS_UPDATES, SET_NEWS_UPDATES } from "../actions/NewsActions";
const initState = {};

export const newsDetailsReducer = (data = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_NEWS_UPDATES:
      var byOrder = payload.slice(0);
      byOrder.sort(function(a,b) {
          return a.data.order - b.data.order;
      });

      logInfo("News Received", byOrder)
      return byOrder;
     case CLEAR_NEWS_UPDATES:
      return [];
    default:
      return data;
  }
};
