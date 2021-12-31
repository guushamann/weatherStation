
import fetch from 'node-fetch'
import formatDate from "intl-dateformat"
export const getCurrentSolarData = async () =>{
    
    const now = new Date()
    const nowMinus24 = new Date(new Date().getTime() - (60 * 60 * 24 * 1000));
    const nowStr= formatDate(now, "YYYY-MM-DD hh:mm:ss");
    const nowMinus24Str= formatDate(nowMinus24, "YYYY-MM-DD hh:mm:ss");
    const url = `https://monitoringapi.solaredge.com/site/2643271/power?startTime=${nowMinus24Str}&endTime=${nowStr}&api_key=7PLGIAAOAT0XGUB1B4V5IJKSU21WEUXI`
    console.log(url);
    const res = await fetch(url)
    return res.json();
}
