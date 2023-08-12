import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { ANALYTICS_SESSION, ANALYTICS_TIME } from "./Constants";
import { getCurrentDate } from './DateAndTimeUtils';
import { fetchCountry, fetchIp } from "./IPAddress";
import { isDataAvailable } from "./OperationUtils";
import { logInfo } from "./QLogger";

export const generateFingerprint = async () => {
  const uniqueBrowserId = await localStorage.getItem("uniqueBrowserId");

  if (isDataAvailable(uniqueBrowserId)) {
    return uniqueBrowserId;
  }

    const fp = await FingerprintJS.load();

    const { visitorId } = await fp.get();

    localStorage.setItem("uniqueBrowserId", visitorId);

    return visitorId;


};

export const isTimePassed = async () => {
  const analyticsLastRequest = await localStorage.getItem(ANALYTICS_SESSION);

  if(!isDataAvailable(analyticsLastRequest)){
    return true;
  }

  if (isDataAvailable(analyticsLastRequest)) {
    const timeDiff = (Date.now() - analyticsLastRequest) / 1000
    logInfo("Seconds Passed" , timeDiff)
    if (timeDiff < ANALYTICS_TIME) {
      logInfo("Session active.");
      return false;
    } else {
      // localStorage.setItem(ANALYTICS_SESSION, Date.now());
      logInfo("time is expired.");
      return true;
    }
  }

  return false;
};

export const getAnalyticsBody = async () => {
  const uniqueid = await generateFingerprint();
  const deviceIp = await fetchIp();
  const country = await fetchCountry();

logInfo("Analytics", uniqueid, deviceIp, country)
  const body = {
    deviceIp: deviceIp,
    uniqueid: uniqueid,
    region: country,
    agent: navigator.userAgent,
    date: getCurrentDate(),
    pagename: 'HomePage' ,
  };

  logInfo(body, "Analytics Body");

  return body;
};
