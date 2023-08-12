/**
 * Author: Anitha Gorli
 * Date: 25-Nov-2022
 */

import { logInfo } from "../../utils/QLogger";
import {
  CLEAR_COMMON_UPDATES,
  SET_COMMON_UPDATES,
} from "../actions/CommonActions";
const initState = {};

export const commonDetailsReducer = (data = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_COMMON_UPDATES:
      let commonArray = payload.slice(0);

      logInfo(commonArray[0].data, "Common Resp------")
      if (commonArray && commonArray.length > 0 && commonArray[0].data) {
        return {"content": commonArray[0].data};
      }
      return [];
    case CLEAR_COMMON_UPDATES:
      return [];
    default:
      return data;
  }
};
