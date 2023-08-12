import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from './reducers/index';
import { getCommonDetailsMiddleWare } from "./middleware/app/CommonContentMiddleware";
import { getAnnouncementsDetailsMiddleWare } from "./middleware/app/AnnouncementsMiddleware";
import { getAboutusDetailsMiddleWare } from "./middleware/app/AboutUsMiddleware";
import { getHighlightsDetailsMiddleWare } from "./middleware/app/HighlightsMiddleware";
import { getStrategicPartnersDetailsMiddleWare } from "./middleware/app/StrategicPartnersMiddleware";
import { getSmartPartnersDetailsMiddleWare } from "./middleware/app/SmartPartnersMiddleware";
import { getNewsDetailsMiddleWare } from "./middleware/app/NewsMiddleware";
import { getNationalDetailsMiddleWare } from "./middleware/app/InsightsNationalMiddleware";
import { getContactUsMiddleWare } from "./middleware/app/ContactMiddleware";
import { getR_AND_DDetailsMiddleWare } from "./middleware/app/R_and_D_Middleware";

import { apiMiddleWare } from "./middleware/core/ApiCore";
import { getCommonSchemaMiddleWare } from "./middleware/app/CommonSchemaMiddleware";
import { getEntityDataMiddleWare } from "./middleware/app/EntityDataMiddleware";
import { getVisitorsMiddleWare } from "./middleware/app/VistorsMiddleware"

// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(
  // reducers,
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      ...getCommonDetailsMiddleWare,
      ...getAnnouncementsDetailsMiddleWare,
      ...getHighlightsDetailsMiddleWare,
      ...getSmartPartnersDetailsMiddleWare,
      ...getStrategicPartnersDetailsMiddleWare,
      ...getAboutusDetailsMiddleWare,
      ...getNewsDetailsMiddleWare,
      ...getNationalDetailsMiddleWare,
      ...getContactUsMiddleWare,
      ...getCommonSchemaMiddleWare,
      ...getR_AND_DDetailsMiddleWare,
      ...getEntityDataMiddleWare,
      ...getVisitorsMiddleWare,
      apiMiddleWare),
  ),
);

// export const store = createStore(
//   rootReducer, {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const initialRootState = {
  ...store.getState(),
}

