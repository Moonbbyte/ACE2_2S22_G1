import express from "express";
import morgan from "morgan";
import SerialPort from "serialport";

const serialPort = require('serialport');

const port = new SerialPort('COM3',{baudRate: 9600});

const parser = new SerialPort.parsers.Readline();
port.pipe(parser);

parser.on('data', (line)=>{
    console.log('Arduino dice: '+line);
    port.write('Desde Node');
});

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