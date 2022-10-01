import express from "express";
import morgan from "morgan";
import SerialPort from "serialport";
import { methods as practica } from "./controllers/practica2.serialport";


let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

let fechaAct = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds

// Import dependencies
const port = new SerialPort('COM3',{baudRate: 9600});

const parser = new SerialPort.parsers.Readline();
port.pipe(parser);

parser.on('data', (line)=>{
    //console.log('Arduino dice: '+line);
    const words = line.split(',');
    
    if (words.length == 4) {
       // postearRitmo(line);
        practica.postearCalorias(line);
        practica.postearFrecuenciaRep(line);
        practica.postearRango(line);
        practica.postearFrecCard(line);
        console.log(line);
    }else if (words.length == 3) {
        //postearFuerza(line);
    }else if (words[0]=="3") {
        //postearVelocidad(line);
    }

});

//Routes de Practica2
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
app.use("/api/Practica2",languageRoutes);




export default app;