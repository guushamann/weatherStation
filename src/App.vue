<script setup lang="ts">
import { useSocketIo } from "./service/socket";
import Card from './components/Card.vue'
import { ref } from 'vue'
import {fetchWeatherInfo,dayStatusText} from './weather'
import iconMaps from './iconMap'
import type { Iweather } from './Iweather'
import type { Isensor } from './Isensor'
import {getCurrentSolarData} from './solaredge'
const socket = useSocketIo(3000);
const weatherRef = ref<Iweather>()
const mappedcssClass =ref('sunny') 
const temp = ref(0)

const getWeather= async()=>{
  let weatherData = await fetchWeatherInfo('Etten-Leur,NB,NL')

  weatherRef.value= weatherData
  const weatherID:number = weatherData.weather[0].id
  console.log(weatherData)
  let css:string = iconMaps[`wi-owm-${weatherID}` as keyof typeof iconMaps] 
  let dayStatus=dayStatusText()
  mappedcssClass.value = `wi-${dayStatus}-${css}`
}
socket.on("message",(e)=>console.log(e))
getWeather()
let data= await getCurrentSolarData()
console.log(data)
</script>

<template lang="pug">
div
  .container.mx-auto(v-if="weatherRef")
    .flex.bg-gray-900.justify-center.h-36.items-stretch
      Card 
        i.wi.text-6xl(:class='mappedcssClass')
      Card 
        span
          span.text-4xl {{weatherRef.main.temp.toFixed(2)}}
          span.text-2xl &deg;C    
  div {{}}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
