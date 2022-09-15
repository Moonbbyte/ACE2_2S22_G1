
import { Component, useEffect } from "react"
import React,{useState,useRef} from 'react';
import {Link,useLocation} from 'react-router-dom'

const _nombre=""
const _edad=""
const _peso=""
const _genero=""
const _estatura=""

export const ObtDatos=()=>{  //con esto se obtienen datos mandados al hacer clic a algun boton de algun otro componente
                             //mandandose desde la etiqueta "Link" otros valores 
    const location = useLocation()
   
}

export default class Principal extends Component{
    
    constructor() {
        super();
        this.state={
            Nombre:"Juan",
            Edad:"18",
            Peso:"150",
            Genero:"Masculino",
            Estatura:"1.82",
            dateInit:"2022-09-01",
            dateFinish:"2022-10-10",
            //Tiempo total de entrenamiento
            tentr:"3h 30min",
            nentr:10,
            fgolpe:10,
            vgolpe:11,
            ritmo:10

        }
        
    }
    render(){
        return(
            <React.Fragment>
            <header align="center"><h1>FastBox</h1></header>
            <Link id="BtnGraph" to="/graficas" className="btn btn-dark">Graficas</Link>
            <Link id="BtnLogOut" to="/" className="btn btn-dark">LogOut</Link>
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
                <div className='row'> Inicio:</div>
                <div className='row'>
                    <input type="date" id="fechaInit" className="btn btn-dark col-9" min="2020-01-01" max="2023-12-31"
                    value={this.state.dateInit}
                    onChange={(e)=>{this.setState({dateInit:e.target.value}); console.log(this.state.dateInit)}}/>      
                </div>
                <div className='row'> Final:</div>
                <div className='row'>
                <input type="date" id="fechaInit" className="btn btn-dark col-9" min="2020-01-01" max="2023-12-31"
                    value={this.state.dateFinish}
                    onChange={(e)=>{this.setState({dateFinish:e.target.value});}}     
                />       
                </div>
                
            </div>
            <div className='container bg-dark col-8' id="Dashboard">
                <div className='row'>
                    <div className='col-5' id="tEntr">   
                        <h5>Tiempo Total de Entrenamiento</h5>
                        <hr></hr>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'><img id="" width="100%"  src={require("../images/time.png")} /></div>
                                <div className='col-6'><h5>{this.state.tentr}</h5></div>
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
                                <div className='col-6'><h5>{this.state.nentr}</h5></div>
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
                                <div className='row'><h5>{this.state.fgolpe}</h5></div>
                            </div>
                            <div className='col-4'>
                                <div><img id="a" width="70%" height="70%" src={require("../images/fast.png")} /></div>
                                <div className='row'><h5>{this.state.vgolpe}</h5></div>
                            </div>
                            <div className='col-4'>
                                <div><img id="b" width="100%" height="50%" src={require("../images/ritmo.png")} /></div>
                                <div className='row'><h5>{this.state.ritmo}</h5></div>
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
        ObtDatos()
        this.setState({
            Nombre:_nombre,
            Edad:_edad,
            Peso:_peso,
            Genero:_genero,
            Estatura:_estatura,
         
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
