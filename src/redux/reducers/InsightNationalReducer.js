/**
 * Author: Alekya
 * Date: 03-MAY-2023
 */

import { CLEAR_NATIONAL_UPDATES, SET_NATIONAL_UPDATES, SET_NATIONAL_SCHEMA_UPDATES, SET_STATE_UPDATES, SET_STATE_SCHEMA_UPDATES, CLEAR_STATE_UPDATES, SET_REGION_UPDATES, SET_REGION_SCHEMA_UPDATES, CLEAR_REGION_UPDATES, SET_LOCAL_UPDATES, SET_LOCAL_SCHEMA_UPDATES, CLEAR_LOCAL_UPDATES } from "../actions/InsightNationalActions";
import { map } from "ramda";
import { logInfo } from "../../utils/QLogger";
const initState = {};

export const nationalDetailsReducer = (data = initState, action) => {
    const { payload } = action;
    const nationaldata_en = [];
    const nationaldata_my = [];
    const theme_en = [];
    const theme_my = [];
    const statedata_en = [];
    const statedata_my = [];
    const states_en = [];
    const states_my = [];
    const regiondata_en = [];
    const regiondata_my = [];
    const localdata_en = [];
    const localdata_my = [];

    let i = 0;

    switch (action.type) {
        case SET_NATIONAL_SCHEMA_UPDATES:
            let themeeng = payload.schema.themesen.enum;
            let thememy = payload.schema.themesmy.enum;
            i = 2;
            theme_en.push({ "id": 1, "title": "Please Select a Theme" });
            theme_my.push({ "id": 1, "title": "Sila Pilih Tema" });
            map(x => {
                theme_en.push({ "id": i, "title": x.value });
                i += 1;
            }, themeeng);
            i = 2;
            map(x => {
                theme_my.push({ "id": i, "title": x.value });
                i += 1;
            }, thememy);
            let outputs = { "themesen": theme_en, "themesmy": theme_my };
            return outputs;
        case SET_NATIONAL_UPDATES:
            let NationalArray = payload.slice(0);


            if (NationalArray && NationalArray.length > 0 && NationalArray[0].data) {
                map(x => {
                    let objen = {}, objmy = {};
                    objen.image = x.data.imageurl;
                    objmy.image = x.data.imageurl;
                    objen.title = x.data.title;
                    objmy.title = x.data.titlemy;
                    objen.infointro = x.data.infointro;
                    objmy.infointro = x.data.infointromy;
                    objen.info = x.data.info;
                    objmy.info = x.data.infomy;
                    objen.theme = [];
                    objmy.theme = [];
                    objen.subtheme = [];
                    objmy.subtheme = [];
                    objen.order = x.data.order;
                    objmy.order = x.data.order;
                    objen.navigateurl=x.data.navigateurl;
                    objmy.navigateurl=x.data.navigateurl;
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objen.theme.push(obj);
                    }, x.data.themesen);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objmy.theme.push(obj);
                    }, x.data.themesmy);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objen.subtheme.push(obj);
                    }, x.data.subthemesen);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objmy.subtheme.push(obj);
                    }, x.data.subthemesmy);
                    nationaldata_en.push(objen);
                    nationaldata_my.push(objmy);
                }, NationalArray);
                nationaldata_en.sort((a, b) => a.order - b.order);
                nationaldata_my.sort((a, b) => a.order - b.order);
                let output = { "nationalen": nationaldata_en, "nationalmy": nationaldata_my }
                logInfo(output, "Output");
                return output;
            }
            return [];
        case CLEAR_NATIONAL_UPDATES:
            return [];

        case SET_REGION_SCHEMA_UPDATES:
            let regionthemeeng = payload.schema.themesen.enum;
            let regionthememy = payload.schema.themesmy.enum;
            i = 2;
            theme_en.push({ "id": 1, "title": "Please Select a Theme" });
            theme_my.push({ "id": 1, "title": "Sila Pilih Tema" });
            map(x => {
                theme_en.push({ "id": i, "title": x.value });
                i += 1;
            }, regionthemeeng);
            i = 2;
            map(x => {
                theme_my.push({ "id": i, "title": x.value });
                i += 1;
            }, regionthememy);
            let regionoutputs = { "themesen": theme_en, "themesmy": theme_my };
            return regionoutputs;
        case SET_REGION_UPDATES:
            let RegionArray = payload.slice(0);


            if (RegionArray && RegionArray.length > 0 && RegionArray[0].data) {
                map(x => {
                    let objen = {}, objmy = {};
                    objen.image = x.data.imageurl;
                    objmy.image = x.data.imageurl;
                    objen.title = x.data.title;
                    objmy.title = x.data.titlemy;
                    objen.infointro = x.data.infointro;
                    objmy.infointro = x.data.infointromy;
                    objen.info = x.data.info;
                    objmy.info = x.data.infomy;
                    objen.theme = [];
                    objmy.theme = [];
                    objen.subtheme = [];
                    objmy.subtheme = [];
                    objen.order = x.data.order;
                    objmy.order = x.data.order;
                    objen.navigateurl=x.data.navigateurl;
                    objmy.navigateurl=x.data.navigateurl;
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objen.theme.push(obj);
                    }, x.data.themesen);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objmy.theme.push(obj);
                    }, x.data.themesmy);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objen.subtheme.push(obj);
                    }, x.data.subthemesen);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objmy.subtheme.push(obj);
                    }, x.data.subthemesmy);
                    regiondata_en.push(objen);
                    regiondata_my.push(objmy);
                }, RegionArray);
                regiondata_en.sort((a, b) => a.order - b.order);
                regiondata_my.sort((a, b) => a.order - b.order);
                let regionoutput = { "regionen": regiondata_en, "regionmy": regiondata_my }
                logInfo(regionoutput, "Output");
                return regionoutput;
            }
            return [];
        case CLEAR_REGION_UPDATES:
            return [];

        case SET_LOCAL_SCHEMA_UPDATES:
            let localthemeeng = payload.schema.themesen.enum;
            let localthememy = payload.schema.themesmy.enum;
            i = 2;
            theme_en.push({ "id": 1, "title": "Please Select a Theme" });
            theme_my.push({ "id": 1, "title": "Sila Pilih Tema" });
            map(x => {
                theme_en.push({ "id": i, "title": x.value });
                i += 1;
            }, localthemeeng);
            i = 2;
            map(x => {
                theme_my.push({ "id": i, "title": x.value });
                i += 1;
            }, localthememy);
            let Localoutputs = { "themesen": theme_en, "themesmy": theme_my };
            return Localoutputs;
        case SET_LOCAL_UPDATES:
            let LocalArray = payload.slice(0);


            if (LocalArray && LocalArray.length > 0 && LocalArray[0].data) {
                map(x => {
                    let objen = {}, objmy = {};
                    objen.image = x.data.imageurl;
                    objmy.image = x.data.imageurl;
                    objen.title = x.data.title;
                    objmy.title = x.data.titlemy;
                    objen.infointro = x.data.infointro;
                    objmy.infointro = x.data.infointromy;
                    objen.info = x.data.info;
                    objmy.info = x.data.infomy;
                    objen.theme = [];
                    objmy.theme = [];
                    objen.subtheme = [];
                    objmy.subtheme = [];
                    objen.order = x.data.order;
                    objmy.order = x.data.order;
                    objen.navigateurl=x.data.navigateurl;
                    objmy.navigateurl=x.data.navigateurl;
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objen.theme.push(obj);
                    }, x.data.themesen);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objmy.theme.push(obj);
                    }, x.data.themesmy);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objen.subtheme.push(obj);
                    }, x.data.subthemesen);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objmy.subtheme.push(obj);
                    }, x.data.subthemesmy);
                    localdata_en.push(objen);
                    localdata_my.push(objmy);
                }, LocalArray);
                localdata_en.sort((a, b) => a.order - b.order);
                localdata_my.sort((a, b) => a.order - b.order);
                let output = { "localen": localdata_en, "localmy": localdata_my }
                logInfo(output, "Output");
                return output;
            }
            return [];
        case CLEAR_LOCAL_UPDATES:
            return [];

        case SET_STATE_SCHEMA_UPDATES:
            let statethemeeng = payload.schema.themesen.enum;
            let statethememy = payload.schema.themesmy.enum;
            let state = payload.schema.state.enum
            i = 2;
            states_en.push({ "id": 1, "title": "Please Select a State" });
            states_my.push({ "id": 1, "title": "Sila Pilih Negeri" });
            theme_en.push({ "id": 1, "title": "Please Select a Theme" });
            theme_my.push({ "id": 1, "title": "Sila Pilih Tema" });
            map(x => {
                theme_en.push({ "id": i, "title": x.value });
                i += 1;
            }, statethemeeng);
            i = 2;
            map(x => {
                theme_my.push({ "id": i, "title": x.value });
                i += 1;
            }, statethememy);
            i = 2;
            map(x => {
                states_en.push({ "id": i, "title": x.value });
                states_my.push({ "id": i, "title": x.value });
            }, state);
            let stateoutputs = { "themesen": theme_en, "themesmy": theme_my, "states_en": states_en, "states_my": states_my };
            logInfo(stateoutputs, "stateoutputs");
            return stateoutputs;
        case SET_STATE_UPDATES:
            let StateArray = payload.slice(0);
            logInfo(StateArray, "STATEArrray");

            if (StateArray && StateArray.length > 0 && StateArray[0].data) {
                map(x => {
                    let objen = {}, objmy = {};
                    objen.image = x.data.imageurl;
                    objmy.image = x.data.imageurl;
                    objen.title = x.data.title;
                    objmy.title = x.data.titlemy;
                    objen.infointro = x.data.infointro;
                    objmy.infointro = x.data.infointromy;
                    objen.info = x.data.info;
                    objmy.info = x.data.infomy;
                    objen.theme = [];
                    objmy.theme = [];
                    objen.subtheme = [];
                    objmy.subtheme = [];
                    objen.state = x.data.state;
                    objmy.state = x.data.state;
                    objen.order = x.data.order;
                    objmy.order = x.data.order;
                    objen.navigateurl=x.data.navigateurl;
                    objmy.navigateurl=x.data.navigateurl;
                    let i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objen.theme.push(obj);
                    }, x.data.themesen);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objmy.theme.push(obj);
                    }, x.data.themesmy);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objen.subtheme.push(obj);
                    }, x.data.subthemesen);
                    i = 1;
                    map(y => {
                        let obj = {};
                        obj.content = y;
                        obj.order = i;
                        i += 1;
                        objmy.subtheme.push(obj);
                    }, x.data.subthemesmy);
                    statedata_en.push(objen);
                    statedata_my.push(objmy);
                }, StateArray);
                statedata_en.sort((a, b) => a.order - b.order);
                statedata_my.sort((a, b) => a.order - b.order);
                let output = { "stateen": statedata_en, "statemy": statedata_my }
                logInfo(output, "Output");
                return output;
            }
            return [];
        case CLEAR_STATE_UPDATES:
            return [];
        default:
            return data;
    }
};
