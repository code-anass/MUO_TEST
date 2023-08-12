/**
 * Author: Anitha Gorli
 * Date: 07-APR-2023
 */

import { CLEAR_ABOUTUS_UPDATES, SET_ABOUTUS_UPDATES } from "../actions/AboutUsActions";
import { filter, map } from "ramda";
import { logInfo } from "../../utils/QLogger";
const initState = {};

export const aboutusDetailsReducer = (data = initState, action) => {
    const { payload } = action;

    switch (action.type) {
        case SET_ABOUTUS_UPDATES:
            var byOrder = payload.schema.DropDown.enum;
            let title = filter(x => x.parentKey == "")(byOrder);
            let output = {};
            let re1 = filter(x => x.detail == "aboutmuo")(title);
            let re2 = filter(x => x.detail === "aboutnscp")(title);
            let totatltitle = [re1, re2];
            map(item => {
                let re = [];
                map(x => {
                    let temp = filter(y => y.parentKey == x.key)(byOrder);
                    let obj = {};
                    obj.title = x.value;
                    let data = [], imagedata = [];
                    if (x.buleten == "yes") {
                        obj.listStyle = "buleten";
                        obj.startIndex = "0";
                    }
                    if (x.image == "yes") {
                        obj.stylegrid = "image";
                    }
                    map(y => {
                        if (y.imageurl) {
                            imagedata.push({ "imageurl": y.imageurl, "imagedesc": y.value, "order": y.order });
                        }
                        else {
                            data.push({ "order": y.order, "content": y.value });
                        }
                    }, temp);
                    obj.data = data;
                    if (x.image == "yes")
                        obj.imagedata = imagedata;
                    re.push(obj);
                }, item)
                output[item[0].detail] = re;
            }, totatltitle);
            map(item => {
                let re = [];
                map(x => {
                    let temp = filter(y => y.parentKey == x.key)(byOrder);
                    let obj = {};
                    obj.title = x.valuemy;
                    let data = [], imagedata = [];
                    if (x.buleten == "yes") {
                        obj.listStyle = "buleten";
                        obj.startIndex = "0";
                    }
                    if (x.image == "yes") {
                        obj.stylegrid = "image";
                    }
                    map(y => {
                        if (y.imageurl) {
                            imagedata.push({ "imageurl": y.imageurl, "imagedesc": y.valuemy, "order": y.order });
                        }
                        else {
                            data.push({ "order": y.order, "content": y.valuemy });
                        }
                    }, temp);
                    obj.data = data;
                    if (x.image == "yes")
                        obj.imagedata = imagedata;
                    re.push(obj);
                }, item)
                let temps=item[0].detail+"_my";
                output[temps] = re;
            }, totatltitle);
            logInfo(output, "About US Processed Data");
            return output;
        case CLEAR_ABOUTUS_UPDATES:
            return [];
        default:
            return data;
    }
};
