import { ROUTE_COMMING_SOON } from '../utils/Constants'
import { CommingSoon } from './Home'
import PageNotFound from './PageNotFound/PageNotFound'

export const RoutesList = [

    {
        path: ROUTE_COMMING_SOON,
        component: CommingSoon,
        element : CommingSoon

    },
    {
        path: "/notfound",
        component: PageNotFound,
        element : PageNotFound
    }
]
