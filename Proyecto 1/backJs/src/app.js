import express from "express";
import morgan from "morgan";
import { SerialPortMock } from 'serialport'

const { SerialPort, ReadlineParser } = require('serialport')
const port = new SerialPort({ path:'/dev/robot', baudRate: 9600 })
const parser = new ReadlineParser()
port.pipe(parser)
parser.on('data', console.log)
port.write('ROBOT PLEASE RESPOND\n')

   
        

//Routes de Practica1
import languageRoutes from "./routes/language.routes";
var cors = require('cors');
const app = express();

// Import dependencies


//Settings
app.set("port", 4000);

//Middelware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Rutas
app.use("/api/Proyecto1",languageRoutes);

export default app;