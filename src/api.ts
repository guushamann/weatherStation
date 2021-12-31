// Standard variation
async function get<T>(url: string): Promise<T> {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await (response.json() as Promise<T>)
}
const cache: any = {};
// async function fetchWithCache(cityName: string, time: number) {
//     const now = new Date().getTime();
//     if (!cache[cityName] || cache[cityName].cacheTimer < now) {
//         cache[cityName] = await fetchWeatherInfo(cityName);
//         cache[cityName].cacheTimer = getCacheTimer(time);
//     }
//     return cache[cityName];
// }
export default { get }
