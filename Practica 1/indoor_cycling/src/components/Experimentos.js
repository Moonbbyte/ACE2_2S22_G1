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
    }
    ]
    const Valores=[]
    const Fechas=[]
    data.forEach((e)=>{
        Valores.push(e["CaloriasQuem"])
        Fechas.push(e["fecha"]);
    })
    Data.push(Valores)
    Data.push(Fechas)
}
export let Data=["","",[0,0,0,0],["","","","hola"]]


export default class Experimentos extends Component{
    render(){
        return(
                <React.Fragment>
                     <div className="btn-group-vertical col-2" id="Exp-Component">
                    <button className="btnEffect btn btn-dark" onClick={()=>{dataExp1()}}>Experimento 1</button>
                    <button className="btnEffect btn btn-dark">Experimento 2</button>
                    <button className="btnEffect btn btn-dark">Experimento 3</button>
                    </div>
                    < Graficos dataExp={Data} />
                </React.Fragment>
        ) 
        
        

                   
        
        
    }
    
}