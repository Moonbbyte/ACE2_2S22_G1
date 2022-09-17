import express from "express";
import morgan from "morgan";
import SerialPort from "serialport";
import { methods as proyecto1Controller } from "./controllers/proyecto1.controller";
import fetch from 'cross-fetch';

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
    
    if (words[0]=="1") {
        postearRitmo(line);
    }else if (words[0]=="2") {
        postearFuerza(line);
    }else if (words[0]=="3") {
        postearVelocidad(line);
    }

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


//metodos para post en la API

const postearFuerza = (bodFuerza)=>{

    const words = bodFuerza.split(',');
    const myJSON = { "fuerza_g": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Proyecto1/Fuerza'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            
        },
        method: "POST",
        body: JSON.stringify(myJSON)
        }
        )
        .then(function(res){  })
        .catch(function(res){ })
   
      })
      promise.then(bool => console.log('Bool is true'))
};

const postearRitmo = (bodRitmo)=>{

    const words = bodRitmo.split(',');
    const myJSON = { "ritmo_g": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Proyecto1/Ritmo'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            
        },
        method: "POST",
        body: JSON.stringify(myJSON)
        }
        )
        .then(function(res){  })
        .catch(function(res){ })
   
      })
      promise.then(bool => console.log('Bool is true'))
};

const postearVelocidad = (bodVelocidad)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "vel_g": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Proyecto1/Velocidad'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            
        },
        method: "POST",
        body: JSON.stringify(myJSON)
        }
        )
        .then(function(res){  })
        .catch(function(res){ })
   
      })
      promise.then(bool => console.log('Bool is true'))
};


export default app;