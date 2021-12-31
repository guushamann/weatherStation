import express from 'express'
import cors from 'cors'
import http from 'http'
import {startTempSensor} from './tempSensor'
import {Server} from "socket.io"
import {getCurrentSolarData} from './solarEdge'


const app = express();
app.use(cors())
const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
    }
});


app.get('/solar', async (req, res) => {
    const data = await getCurrentSolarData()
    console.log(data);
    res.json(data);
});
io.on('connection', (socket) => {
    //startTempSensor(socket)
    console.log('a user connected');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});