import express from "express";
import morgan from "morgan";
import SerialPort from "serialport";
import { methods as practica } from "./controllers/practica2.serialport";
import fetch from 'cross-fetch';


// Import dependencies
const port = new SerialPort('COM3',{baudRate: 9600});

const parser = new SerialPort.parsers.Readline();
port.pipe(parser);

parser.on('data', (line)=>{
    const words = line.split(',');
    console.log(words);
    if (words.length == 4) {
        practica.postearCalorias(line);
        practica.postearFrecuenciaRep(line);
        practica.postearRango(line);
        practica.postearFrecCard(line);
        console.log(line);
    }else if (words.length == 6) {
        practica.postearUsuario(line);
        var datos;
        var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Usuario')
        .then(res => res.json())
        .then(data =>{console.log(data);
            datos = JSON.stringify(data);

            console.log("datos");
            
            console.log(datos);
            console.log(Object.keys(datos.id).length);

            var myJson = JSON.parse(datos);
            console.log("mi variable: "+myJson["id"]);

            var idus = datos.id;
            console.log(idus);
          practica.postearDatUsuario(line ,idus );
        });
        })
        promise.then(bool => console.log('Bool is true'))          
       
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