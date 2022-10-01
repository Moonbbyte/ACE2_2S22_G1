import express from "express";
import morgan from "morgan";
import SerialPort from "serialport";
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


//metodos para post en la API

const postearCalorias = (bodFuerza)=>{

    const words = bodFuerza.split(',');
    const myJSON = { "caloriasQuem": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Calorias'
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

const postearFrecuenciaRep = (bodRitmo)=>{

    const words = bodRitmo.split(',');
    const myJSON = { "vel_rep": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/FrecuenciaRep'
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

const postearRango = (bodVelocidad)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "rango": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Rango'
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

const postearFrecCard = (bodVelocidad)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "pulsoCard": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Frecuencia'
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

const postearDatUsuario = (bodVelocidad)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "edad": words[1].replace('\r',''), "peso": fechaAct,"genero":"1", "estatura": "", "usuarioID": ""};
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/DataUsu'
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

const postearUsuario = (bodVelocidad)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "nombreUsu": words[1].replace('\r',''), "pass": fechaAct };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Usuario'
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