import {Link, resolvePath} from 'react-router-dom'
import { Component, useEffect } from "react"
import React,{useState,useRef} from 'react';



export default class Principal extends Component{
    
    constructor() {
        super();
        this.state={
            consola:"consola",
            entrada:"",
            Nombre:"",
            Edad:"",
            Peso:"",
            Genero:"",
            Estatura:"",
            dateInit:"",
            dateFinish:""

        }
        
    }
    render(){
        return(
            <React.Fragment>
            <header align="center"><h1>FastBox</h1></header>
            <div className='container bg-dark col-3' id="DatosUser">
                <h5>Perfil: </h5>
                <hr></hr>
                <h5>Nombre: {this.state.Nombre} </h5>
                <h5>Edad: {this.state.Edad}</h5>
                <h5>Peso: {this.state.Peso} </h5>
                <h5>Genero: {this.state.Genero}</h5>
                <h5>Estatura: {this.state.Estatura} </h5>
            </div>
            <div className='container bg-dark col-3' id="RangoFecha">
                <h5>Rango de Fecha: </h5>
                <hr></hr>
                <h5>Inicio: {this.state.Nombre} </h5>
                <h5>Fin: {this.state.Edad}</h5>
            </div>
            <div className='container bg-dark col-8' id="Dashboard">
                <div className='row'>
                    <div className='col-5' id="tEntr">   
                        <h5>Tiempo Total de Entrenamiento</h5>
                        <hr></hr>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'><img id="" width="100%"  src={require("../images/time.png")} /></div>
                                <div className='col-6'><h5>30h 30min</h5></div>
                            </div>
                            
                        </div>  
                    </div>
                    <div className='col-1'></div>
                    <div className='col-5' id="numEntr">
                        <h5>Numero de Entrenamientos</h5>
                        <hr></hr>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'><img id="" width="45%" height="100%" src={require("../images/box.png")} /></div>
                                <div className='col-6'><h5>10</h5></div>
                            </div>
                            
                        </div>  
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12' id="numEntr">
                        <h5>Entrenamiento por Tipo</h5>
                        <hr></hr>
                        <div className='container'>
                            <div className='row'>
                            <div className='col-4'>
                                <div ><img id="" width="70%" height="70%" src={require("../images/force.png")} /></div>
                                <div className='row'><h5>10</h5></div>
                            </div>
                            <div className='col-4'>
                                <div><img id="a" width="70%" height="70%" src={require("../images/fast.png")} /></div>
                                <div className='row'><h5>10</h5></div>
                            </div>
                            <div className='col-4'>
                                <div><img id="b" width="100%" height="50%" src={require("../images/ritmo.png")} /></div>
                                <div className='row'><h5>10</h5></div>
                            </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            </React.Fragment> 
        )


    }
    componentDidMount() { /*SE EJECUTA AL INICIO O AL RECARGAR PAGINA */
        this.setState({
            consola:""
        })  
    }
    Execute=async()=>{
        const url="http://localhost:5000/DataAnalisis"
        let config={
            method:'POST',       //ELEMENTOS A ENVIAR
            body:JSON.stringify([{entrada:this.state.entrada}]),
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
    
        const res= await fetch(url,config)
        const data =await res.json()
        this.setState({
            consola:data.Contenido
        })
        //esto lo devuelve como una lista {hola: "pureba"}
    }


    
}
