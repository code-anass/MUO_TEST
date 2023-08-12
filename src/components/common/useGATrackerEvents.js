/**
 * Author: Amit
 * Date: 01-May-2023
 */

import ReactGA from "react-ga4";
import { GA_TRACKING_CODE } from "../../utils/Constants";


export const initGA = async () => {
       ReactGA.initialize(GA_TRACKING_CODE);
       ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
}
