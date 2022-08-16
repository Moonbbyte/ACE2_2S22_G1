import { Component } from "react"
import React from 'react';
import {Route,BrowserRouter,Routes,Link,useHref} from 'react-router-dom';
import { Alert } from "bootstrap";
import Graficos from './graficos'

export const dataExp1=function(){
    Data.splice()
    while(Data.length>0){
        Data.pop();
    }
    Data.push("Calorias vs Tiempo")
    Data.push("Calorias")

    const data = [{
        "CaloriasQuem":13,
        "fecha":"2022-08-15T06:00:00.000"
    }, {
        "CaloriasQuem":18,
        "fecha":"2022-08-15T07:00:00.000"
    },
    {
        "CaloriasQuem":24,
        "fecha":"2022-08-15T06:32:00.000"
    },{
        "CaloriasQuem":5,
        "fecha":"2022-08-15T04:00:00.000"
    },{
        "CaloriasQuem":17,
        "fecha":"2022-08-15T02:00:00.000"
    },{
        "CaloriasQuem":22,
        "fecha":"2022-08-15T02:00:00.000"
    },{
        "CaloriasQuem":12,
        "fecha":"2022-08-15T02:00:00.000"
    }
    ]
    const Valores=[]
    const Fechas=[]
    data.forEach((e)=>{
        Valores.push(e["CaloriasQuem"])
        Fechas.push(e["fecha"]);
    })
    Data.push([Valores])
    Data.push(Fechas)
}

export const dataExp2=function(){
    while(Data.length>0){
        Data.pop();
    }
    //Velo
    //
    Data.push("Distancia vs Tiempo")
    Data.push("Velocidad")

    const data = [{
        "vel":22,
        "fecha":"2022-08-15T06:00:00.000"
    }, {
        "vel":15,
        "fecha":"2022-08-15T07:00:00.000"
    },
    {
        "vel":24,
        "fecha":"2022-08-15T06:32:00.000"
    },{
        "vel":13,
        "fecha":"2022-08-15T04:00:00.000"
    },{
        "vel":11,
        "fecha":"2022-08-15T02:00:00.000"
    },{
        "vel":8,
        "fecha":"2022-08-15T02:00:00.000"
    },{
        "vel":12,
        "fecha":"2022-08-15T02:00:00.000"
    }
    ]
    const Valores=[]
    const Fechas=[]
    data.forEach((e)=>{
        Valores.push(e["vel"])
        Fechas.push(e["fecha"]);
    })
    Data.push([Valores])
    Data.push(Fechas)
}

export const dataExp3=function(){
    while(Data.length>0){
        Data.pop();
    }
    //Velo
    //
    Data.push("Pulso y Oxigeno vs Tiempo")

    Data.push("Pulso")
    // [{{},{}},{{},{}}]
    const data =[{
        "Oxigeno":10,
        "fecha":"2022-08-15T06:00:00.000",
        "Pulso":12
    }, {
        "Oxigeno":5,
        "fecha":"2022-08-15T07:00:00.000",
        "Pulso":14
    },
    {
        "Oxigeno":12,
        "fecha":"2022-08-15T06:32:00.000",
        "Pulso":5
    },{
        "Oxigeno":27,
        "fecha":"2022-08-15T04:00:00.000",
        "Pulso":22
    },{
        "Oxigeno":24,
        "fecha":"2022-08-15T02:00:00.000",
        "Pulso":14
    },{
        "Oxigeno":15,
        "fecha":"2022-08-15T02:00:00.000",
        "Pulso":21
    },{
        "Oxigeno":2,
        "fecha":"2022-08-15T02:00:00.000",
        "Pulso":14
    }
    ]
    const Valores1=[]
    const Valores2=[]
    const Valores=[]
    const Fechas=[]
    data.forEach((e)=>{
        Valores1.push(e["Oxigeno"])
        Fechas.push(e["fecha"]);
        Valores2.push(e["Pulso"])
    })
    Valores.push(Valores1)
    Valores.push(Valores2)
    Data.push(Valores)
    Data.push(Fechas)
    console.log(Valores)
}
export let Data=["","",[0,0,0,0],["","","","hola"]]


export default class Experimentos extends Component{
    render(){
        return(
                <React.Fragment>
                     <div className="btn-group-vertical col-2" id="Exp-Component">
                    <button className="btnEffect btn btn-dark" onClick={()=>{dataExp1()}}>Experimento 1</button>
                    <button className="btnEffect btn btn-dark" onClick={()=>{dataExp2()}} >Experimento 2</button>
                    <button className="btnEffect btn btn-dark" onClick={()=>{dataExp3()}}>Experimento 3</button>
                    </div>
                    < Graficos dataExp={Data} />
                </React.Fragment>
        ) 
        
        

                   
        
        
    }
    
}