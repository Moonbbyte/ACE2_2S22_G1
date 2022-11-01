import express from "express";
import morgan from "morgan";
import SerialPort from "serialport";
import { methods as practica } from "./controllers/proyecto2.serialport";
import fetch from 'cross-fetch';

var login = 1;

// Import dependencies
const port = new SerialPort('COM3',{baudRate: 9600});

const parser = new SerialPort.parsers.Readline();
port.pipe(parser);

parser.on('data', (line)=>{
    console.log(line);
    const words = line.split(',');
    console.log(words);
    if (words.length == 4) {
        practica.postearCalorias(line,login);
        practica.postearFuerza(line,login);
        practica.postearRitmo(line,login);
        //practica.postearFrecCard(line,login);
        console.log(line);
    }else if (words.length == 6) {
        practica.postearUsuario(line);
        var datos;
        var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Proyecto2/Usuario')
        .then(res => res.json())
        .then(data =>{console.log(data);
            datos = JSON.stringify(data);

            var idus = Object.keys(data).length;
            
          practica.postearDatUsuario(line ,data[idus-1].id );
        });
        })
        promise.then(bool => console.log('Bool is true'))          
       
    }else if (words.length == 2 ) {
        practica.postearPeso(line,login);
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
app.use("/api/Proyecto2",languageRoutes);




export default app;