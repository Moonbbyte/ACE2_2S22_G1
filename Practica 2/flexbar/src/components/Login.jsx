
import { Component, useEffect } from "react"
import React,{useState,useRef} from 'react';
import {Link,ConditionalLink} from 'react-router-dom'


export default class Login extends Component{
    
    constructor() {
        super();
        this.state={
            Nombre:"",
            Password:""
        }
        
    }
    render(){
        return(
            <React.Fragment>
            <header align="center"><h1>FlexBar Login</h1></header>
            
                <form className="container col-6 mx-auto text-center">
                    <label className="row">
                        Nombre de Usuario: 
                        <input  onChange={(e)=>{this.setState({Nombre:e.target.value})}}  className="text-dark"></input>
                    </label>
                    <label className="row">
                        Contraseña: 
                        <input onChange={(e)=>{this.setState({Edad:e.target.value})}} className="text-dark"></input>
                    </label>
                
                    <Link className="btn btn-dark btnEffect" to={{pathname: `/pAux`}}
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
