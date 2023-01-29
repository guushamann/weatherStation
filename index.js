import express from 'express'
import pug from 'pug'
import { createWeatherClass } from './utils.js'
import { getImage } from './puppet.js'
const app = express()
const port = 1337



function createInterface(envSensor) {
    let weatherClass = createWeatherClass(210)
    let indoorTemp = Math.round(envSensor.temperature * 100) / 100
    let indoorHumidity = Math.round(envSensor.humidity * 100) / 100
    var html = pug.renderFile('main.pug', { weatherClass, indoorTemp, indoorHumidity });
    return html
}


const envSensor = {
    gas_index: 0,
    gas_resistance: 12946860.58570794,
    heat_stable: false,
    humidity: 38.272,
    meas_index: 0,
    pressure: 1027.39,
    status: 32,
    temperature: 18.75,
}
const html = createInterface(envSensor)

app.get('/', (req, res) => {
    res.send(html)
})
app.use(express.static('public'))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    getImage()
})