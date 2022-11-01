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
// fuerza, calorias,ritmo,ritmo2
const postearCalorias = (bodFuerza,id)=>{

    const words = bodFuerza.split(',');
    const myJSON = { "caloriasQuem": words[1].replace('\r',''), "fecha": fechaAct,"usuarioID":id };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Proyecto2/Calorias'
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

const postearFuerza = (bodRitmo, id)=>{

    const words = bodRitmo.split(',');
    if (words[0] != '0.00') {
        const myJSON = { "fuerza_imp": words[0].replace('\r',''), "fecha": fechaAct,"usuarioID": id };
        //console.log(myJSON)
    
        var promise = new Promise(function(resolve, reject) {
            fetch('http://localhost:4000/api/Proyecto2/FuerzaImp'
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
    }
 
};

const postearRitmo = (bodVelocidad, id)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "ritmo": words[2].replace('\r',''), "fecha": fechaAct,"usuarioID": id };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Proyecto2/Ritmo'
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

const postearPeso = (bodVelocidad, id)=>{

    const words = bodVelocidad.split(',');
    const myJSON = { "peso": words[0].replace('\r',''), "fecha": fechaAct,"usuarioID":id };
    //console.log(myJSON)

    var promise = new Promise(function(resolve, reject) {
        fetch('http://localhost:4000/api/Proyecto2/Peso'
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
        fetch('http://localhost:4000/api/Proyecto2/DataUsu'
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
        fetch('http://localhost:4000/api/Proyecto2/Usuario'
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
    postearFuerza,
    postearRitmo,
    postearPeso,
    postearDatUsuario,
    postearUsuario
};