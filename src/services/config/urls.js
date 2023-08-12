
/**
 * Author: Anitha Gorli
 * Date: 25th Nov 2022
 */


export const baseConfigArray = {
    dev: {
        baseUrl: 'https://muostag.planmalaysia.gov.my/',
        tenantId:'planmalaysia.gov.my'
    },
    qa: {
        baseUrl: 'https://quantela-preprod3-dashboard.quantela.com/',
        tenantId:'planmalaysia.gov.my'
    }

}


const DYNAMIC_BASE_URL = baseConfigArray.dev.baseUrl;
const DYNAMIC_BASE_TENANT_ID = baseConfigArray.dev.tenantId;

export const URLS =  {
    BASE_URL : DYNAMIC_BASE_URL,
    CMS : 'cms/1.0.0/cms-contents/',
    CMS_SCHEMA : 'cms/1.0.0/schemas/',
    CORE : 'qp-core-service/1.0.0/',
    WEBHOOK: 'webhooks/',
    ENTITY_TYPE : 'entity-types/planmalaysia.gov.my',
    LOGIN : '/ds/1.0.0/public/token',

    BASE_URL_LOGIN : `${DYNAMIC_BASE_URL}{0}`,

    BASE_URL_CMS : `${DYNAMIC_BASE_URL}{0}{1}?filter={2}`,


    BASE_URL_WEBHOOK : `${DYNAMIC_BASE_URL}qp-core-service/1.0.0/webhooks/{0}/{1}?apikey={2}`,
    
    BASE_URL_DATASET : `${DYNAMIC_BASE_URL}abstraction/1.0.0/dashboard/getData/{0}`,

    TENANT_ID : DYNAMIC_BASE_TENANT_ID


}

export function FormatString(str, ...params) {
    /**
     * Usage of this function is like 
     * FormatString(URLS.DEMO,tenantID)
    */

    for (let index = 0; index < params.length; index++) {
        str = str.replace(`{${index}}`, params[index]);
    }

    return str;
}