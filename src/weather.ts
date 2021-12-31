import { Iweather } from './Iweather'
import api from './api'

const cacheTime: number = 100000;


const apiKey: string = '1e3d40d0f20de84eed4bbfabbc153b07'
const cityName: string = '2755994'
const weatherApiUrl: string = `http://api.openweathermap.org/data/2.5/weather?id=${cityName}&appid=${apiKey}`

let cacheTimer = 0;

function getCacheTimer(time: number) {
  const now = new Date().getTime();
  if (cacheTimer < now + time) {
    cacheTimer = now + time;
  }
  return cacheTimer;
}





export async function fetchWeatherInfo(cityName: string) {
  let weatherInfo = await api.get<Iweather>(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=metric`
  )

  return weatherInfo;
}

export function dayStatusText() {
  var today = new Date()
  var curHr = today.getHours()

  if (curHr < 18) {
    return "day"
  } else {
    return "night"
  }
}