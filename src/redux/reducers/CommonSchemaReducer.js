/**
 * Author: Anitha Gorli
 * Date: 25-Nov-2022
 */

import { logInfo } from "../../utils/QLogger";
import {
  CLEAR_COMMON_UPDATES,
  SET_COMMON_UPDATES_SCHEMA,
} from "../actions/CommonActions";
const initState = {};

export const commonSchemaReducer = (data = initState, action) => {
  const { payload } = action;

  switch (action.type) {

    case SET_COMMON_UPDATES_SCHEMA:
      let commonArraySchema = payload;

      logInfo("Comon Schema-----", commonArraySchema.schema.themes.enum)

      if (
        commonArraySchema &&
        commonArraySchema.schema  &&
        commonArraySchema.schema.themes &&
        commonArraySchema.schema.themes.enum &&
        commonArraySchema.schema.themes.enum.length > 0
      ) {
        return {"schema": commonArraySchema.schema.themes.enum.slice(1)};
      }
      return [];
    case CLEAR_COMMON_UPDATES:
      return [];
    default:
      return data;
  }
};
