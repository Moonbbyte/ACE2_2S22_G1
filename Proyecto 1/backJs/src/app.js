import express from "express";
import morgan from "morgan";
import { SerialPortMock } from 'serialport'

//Routes de Practica1
import languageRoutes from "./routes/language.routes";
var cors = require('cors');
const app = express();

// Import dependencies
SerialPortMock.binding.createPort('/dev/robot')
const port = new SerialPortMock({ path: '/dev/robot', baudRate: 9600 })

port.write('Robot power on')

port.on('open', (lista) => {
  port.port.emitData('data')
  console.log(lista);
})

//Settings
app.set("port", 4000);

//Middelware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Rutas
app.use("/api/Proyecto1",languageRoutes);

export default app;