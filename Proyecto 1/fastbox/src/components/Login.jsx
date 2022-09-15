
import { Component, useEffect } from "react"
import React,{useState,useRef} from 'react';
import {Link} from 'react-router-dom'


export default class Login extends Component{
    
    constructor() {
        super();
        this.state={
            Nombre:"Juan",
            Edad:"18",
            Peso:"150",
            Genero:"",
            Estatura:"1.82",
            PageSol:"login"

        }
        
    }
    render(){
        return(
            <React.Fragment>
            <header align="center"><h1>FastBox Login</h1></header>
            
                <form className="container col-6 mx-auto text-center">
                    <label className="row">
                        Nombre: 
                        <input  onChange={(e)=>{this.setState({Nombre:e.target.value})}}  className="text-dark"></input>
                    </label>
                    <label className="row">
                        Edad: 
                        <input onChange={(e)=>{this.setState({Edad:e.target.value})}} className="text-dark"></input>
                    </label>
                    <label className="row">
                        Peso: 
                        <input onChange={(e)=>{this.setState({Peso:e.target.value})}}  className="text-dark"></input>
                    </label>
                    <label className="row">
                        Genero: 
                        <div className="radio">
                            <label>
                                <input type="radio" value="Masculino" checked={this.state.Genero === "Masculino"}  onChange={(e)=>{this.setState({Genero:e.target.value})}}/>Masculino
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                               <input type="radio" value="Femenino"  checked={this.state.Genero === "Femenino"} onChange={(e)=>{this.setState({Genero:e.target.value})}}  /> Femenino
                            </label>
                        </div>
                        
                    </label>
                    <label className="row mb-4">
                        Estatura: 
                        <input onChange={(e)=>{this.setState({Estatura:e.target.value})}}  className="text-dark"></input>
                    </label>
                    <Link className="btn btn-dark" to={{pathname: `/pAux`}}
                        state={this.state}
                    >Login</Link>
                </form>
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
