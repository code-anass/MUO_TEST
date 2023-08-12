/**
 * Author: Anitha Gorli
 * Date: 10-JUN-2023
 */

import { CLEAR_ENTITY_DATA_UPDATES, SET_ENTITY_DATA_UPDATES } from "../actions/EntityDataActions";
const initState = {};

export const entityDataReducer = (data = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_ENTITY_DATA_UPDATES:
      return payload;
    case CLEAR_ENTITY_DATA_UPDATES:
      return [];
    default:
      return data;
  }
};
