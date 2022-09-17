import express from "express";
import morgan from "morgan";
import { SerialPortMock } from 'serialport'

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 9600 });

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
parser.on('data', console.log);

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