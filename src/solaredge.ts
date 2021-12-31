const dateFormat = await import("dateformat");

export const getCurrentSolarData = async () =>{
    const now:Date = new Date()
    const nowMinus24 = new Date(new Date().getTime() - (60 * 60 * 24 * 1000));
    const nowStr= dateFormat(now, "yyyy-mm-dd HH:MM:00");
    const nowMinus24Str= dateFormat(nowMinus24, "yyyy-mm-dd HH:MM:00");
    const url:string = `https://monitoringapi.solaredge.com/site/2643271/power?startTime=${nowMinus24Str}&endTime=${nowStr}&api_key=7PLGIAAOAT0XGUB1B4V5IJKSU21WEUXI`
    return await fetch(url,{
        mode: 'cors',
      })
}
