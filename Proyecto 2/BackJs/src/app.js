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
        practica.postearFrecuenciaRep(line,login);
        practica.postearRango(line,login);
        practica.postearFrecCard(line,login);
        console.log(line);
    }else if (words.length == 6) {
        practica.postearUsuario(line);
        var datos;
        var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Usuario')
        .then(res => res.json())
        .then(data =>{console.log(data);
            datos = JSON.stringify(data);

            var idus = Object.keys(data).length;
            
          practica.postearDatUsuario(line ,data[idus-1].id );
        });
        })
        promise.then(bool => console.log('Bool is true'))          
       
    }else if (words.length == 3 && words[0].length > 1) {

        var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Practica2/Usuario')
        .then(res => res.json())
        .then(data =>{console.log(data);
            words[2].replace('\r','');

            var idus = Object.keys(data).length;
            for (let index = 0; index < idus; index++) {
                if (data[index].nombreUsu == words[0] && data[index].pass == words[1] ) {
                    console.log(data[index]);
                    login = data[index].id;
                    console.log(login);
                    port.write("1");
                    break;
                }else {
                    login = 0;
                }
                
            }
            /*
            data.forEach(element => {
                if (element.nombreUsu == words[0] && element.pass == words[1] ) {
                    console.log(element);
                    login = element.id;
                    console.log(login);
                    port.write("1");
                  
                }else {
                    login = 0;
                }
            });
            */
            if(login == 0){
                port.write("0");
                console.log(login);
            }
            
        });
        })
        promise.then(bool => console.log('Bool is true'))    
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