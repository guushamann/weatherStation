import  Bme680Pkg  from 'bme680-sensor'
import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
const Bme680 = Bme680Pkg.Bme680
export const startTempSensor = (socket:Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>)=>{

    const bme680 = new Bme680(1, 0x76);

    bme680.initialize().then(async () => {
        console.info('Sensor initialized');
        bme680.setTempOffset(-12)
    
    });

    setInterval(async () => {

        let sensorData = await bme680.getSensorData()
        socket.send(sensorData.data);

    }, 3000);


}