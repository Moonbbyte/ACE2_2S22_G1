import express from "express";
import morgan from "morgan";
import SerialPort from "serialport";
import { methods as proyecto1Controller } from "./controllers/proyecto1.controller";

// Import dependencies
const port = new SerialPort('COM3',{baudRate: 9600});

const parser = new SerialPort.parsers.Readline();
port.pipe(parser);

parser.on('data', (line)=>{
    console.log('Arduino dice: '+line);
//    port.write('Desde Node');
    const words = line.split(',');
    const myJSON = { "fuerza_g": words[1], "fecha": "38","usuarioID":"1" };
    proyecto1Controller.addFuerza(myJSON,);

});

//Routes de Practica1
import languageRoutes from "./routes/language.routes";
var cors = require('cors');
const app = express();




//Settings
app.set("port", 4000);

//Middelware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Rutas
app.use("/api/Proyecto1",languageRoutes);

export default app;