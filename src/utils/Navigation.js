import { logInfo } from "./QLogger";



export const redirectPage = (link) => {

    logInfo(link, "Navigation Link")

    window.open(link, '_blank');
}



export function loadRefreshContent() {
    window.location.reload();
}
