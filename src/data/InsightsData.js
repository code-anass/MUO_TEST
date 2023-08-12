import { ROUTE_LOCAL, ROUTE_NATIONAL, ROUTE_REGION, ROUTE_STATE } from "../utils/Constants"

const basePath ='assets/images/insights/'

export const insightsData = [
    {
        desc: "insights.national_desc",
        image: "https://quantela-preprod3-dashboard.quantela.com/qp-core-service/1.0.0/containers/helper/download/quantelademo.com/CITIZEN/bendera.jpg",
        imageLocal: basePath+"national.jpg",
        nav: ROUTE_NATIONAL,
        order: 1,
        title: "insights.national"
    },
    {
        desc: "insights.regional_desc",
        image: "https://quantela-preprod3-dashboard.quantela.com/qp-core-service/1.0.0/containers/helper/download/quantelademo.com/CITIZEN/wilayah.jpg",
        imageLocal: basePath+"regional.jpg",
        nav: ROUTE_REGION,
        order: 2,
        title: "insights.regional"
    },
    {
        desc: "insights.state_desc",
        image: "https://quantela-preprod3-dashboard.quantela.com/qp-core-service/1.0.0/containers/helper/download/quantelademo.com/CITIZEN/state.jpg",
        imageLocal: basePath+"state.jpg",
        nav: ROUTE_STATE,
        order: 3,
        title: "insights.state"
    },
    {
        desc: "insights.local_desc",
        image: "https://quantela-preprod3-dashboard.quantela.com/qp-core-service/1.0.0/containers/helper/download/quantelademo.com/CITIZEN/tempatan.jpg",
        imageLocal: basePath+"local.jpg",
        nav: ROUTE_LOCAL,
        order: 4,
        title: "insights.local"
    }
]