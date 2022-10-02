//metodos para post en la API  rangomov,repeticiones,calorias,ritmocardiaco
import fetch from 'cross-fetch';

let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

let fechaAct = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds

const postearCalorias = (bodFuerza)=>{

    const words = bodFuerza.split(',');
    const myJSON = { "caloriasQuem": words[2].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
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
    const myJSON = { "rango": words[0].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
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
    const myJSON = { "pulsoCard": words[3].replace('\r',''), "fecha": fechaAct,"usuarioID":"1" };
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

const postearDatUsuario = (bodVelocidad , idUs)=>{
    const words = bodVelocidad.split(',');
    //console.log(words);
    const myJSON = { "edad": words[2], "peso": words[3],"genero":words[4], "estatura": words[5].replace('\r',''), "usuarioID": idUs};
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
    //console.log(words);
    const myJSON = { "nombreUsu": words[0], "pass": words[1] };
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

export const methods = {
    postearCalorias,
    postearFrecuenciaRep,
    postearRango,
    postearFrecCard,
    postearDatUsuario,
    postearUsuario
};