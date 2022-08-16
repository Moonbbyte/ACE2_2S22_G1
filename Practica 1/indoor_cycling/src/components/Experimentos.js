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

    var data
    const Valores=[]
      const Fechas=[]
    var promise = new Promise(function(resolve, reject) {
      fetch('http://localhost:4000/api/Practica1/Calorias'
      ,{
      headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
      }
      )
      .then(function(response){
          console.log(response)
          return response.json();
      })
      .then(function(myJson) {
          console.log(myJson);
          data = myJson;
          data.forEach((e)=>{
              Valores.push(e["caloriasQuem"])
              Fechas.push(e["fecha"]);
          })
          Data.push([Valores])
          Data.push(Fechas)
      });
      resolve(true);
 
    })
    promise.then(bool => console.log('Bool is true'))

}

export const dataExp2=function(){
    while(Data.length>0){
        Data.pop();
    }
    //Velo
    //
    Data.push("Distancia vs Tiempo")
    Data.push("Distancia")

    var data
    const Valores=[]
      const Fechas=[]
    var promise = new Promise(function(resolve, reject) {
      fetch('http://localhost:4000/api/Practica1/Distancia'
      ,{
      headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
      }
      )
      .then(function(response){
          console.log(response)
          return response.json();
      })
      .then(function(myJson) {
          console.log(myJson);
          data = myJson;
          data.forEach((e)=>{
              Valores.push(e["distancia"])
              Fechas.push(e["fecha"]);
          })
          Data.push([Valores])
          Data.push(Fechas)
      });
      resolve(true);
 
    })
    promise.then(bool => console.log('Bool is true'))
}

export const dataExp3=function(){
    while(Data.length>0){
        Data.pop();
    }
    //Velo
    //
    Data.push("Pulso y Oxigeno vs Tiempo")

    Data.push("Pulso")

    var data
    const Valores=[]
    const Valores1=[]
    const Valores2=[]
    const Fechas=[]
    var promise = new Promise(function(resolve, reject) {
      fetch('http://localhost:4000/api/Practica1/Oxigeno'
      ,{
      headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
      }
      )
      .then(function(response){
          console.log(response)
          return response.json();
      })
      .then(function(myJson) {
          console.log(myJson);
          data = myJson;
          data.forEach((e)=>{
              Valores1.push(e["pulsoConOxigeno"])
              Fechas.push(e["fecha"]);
          })
          Data.push([Valores1])
          Data.push(Fechas)
      });
      resolve(true);

      fetch('http://localhost:4000/api/Practica1/Frecuencia'
      ,{
      headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
      }
      )
      .then(function(response){
          console.log(response)
          return response.json();
      })
      .then(function(myJson) {
          console.log(myJson);
          data = myJson;
          data.forEach((e)=>{
              Valores2.push(e["pulsoCard"])
          })
          Data.push([Valores2])
      });
      resolve(true);
 
      Valores.push(Valores1)
      Valores.push(Valores2)
      Data.push(Valores)
    })
    promise.then(bool => console.log('Bool is true'))
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