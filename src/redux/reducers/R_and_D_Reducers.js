/**
 * Author: Anitha Gorli
 * Date: 07-APR-2023
 */

import { CLEAR_R_AND_D_UPDATES, SET_R_AND_D_UPDATES } from "../actions/R_and_D_Actions";
import { filter, map } from "ramda";
import { logInfo } from "../../utils/QLogger";
import { faCalendarDays, faGlobe, faLock, faMemory } from '@fortawesome/free-solid-svg-icons'
import { parseDateFormat } from "../../utils/DateAndTimeUtils";
import { DATABASE_TYPE } from "../../utils/Constants";

const initState = {};

export const R_AND_DDetailsReducer = (data = initState, action) => {
    const { payload } = action;
    
    switch (action.type) {
        case SET_R_AND_D_UPDATES:
            logInfo(payload,"R&D Reducers")
            var byOrder = payload;
            let output=[];
            byOrder.map(data => {
                if(data.output && data.output === DATABASE_TYPE){
                let obj={};
                obj.entityname=data.name;
                obj.domain=data.domain;
                obj.displayname= data.displayName;
                obj.description = data.description;
                obj.tags= data.tags;
                obj.lastUpdated = data.lastUpdated; 
                obj.id =data.id;
                obj.sharedBy= "Quantela";
                obj.more = [{ icon: faLock, name: "No license specified" }, { icon: faGlobe, name: "Accessible to Everyone" }, { icon: faCalendarDays, name: parseDateFormat(data.lastUpdated) }, { icon: faMemory, name: "Feature Service" }];
              
                output.push(obj);
                }
            })
            logInfo(output, "R & D Processed Data");
            return output;
        case CLEAR_R_AND_D_UPDATES:
            return [];
        default:
            return data;
    }
};
