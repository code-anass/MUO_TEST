import { logError, logInfo } from "./QLogger";

export async function fetchIp() {
  try{
  const response = await fetch("https://api.ipify.org/?format=json");
  if (response.ok) {
    const data = await response.json();
    logInfo(data);
    return data.ip;
  }}catch(e){
    logError("Not able to fetch Ip")
  }
  return "NA";
}

export const fetchCountry = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    if (response.ok) {
      const data = await response.json();
      return data?.country_name;
    }
  } catch (error) {
    logInfo("Error fetching country:", error);
    return "NA";
  }
};
