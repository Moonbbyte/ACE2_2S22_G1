
import { Component, useEffect } from "react"
import React,{useState,useRef} from 'react';
import {Link,Navigate} from 'react-router-dom'


function Login (props){
    const [user,setUser]=useState(0)
    const [password,setPass]=useState(0)
    const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link className="btn btn-dark btnEffect" to={to}>{children}</Link>
      : <>{children}</>;

    return(
        <React.Fragment>
        <header align="center"><h1>FlexBar Login</h1></header>
            <div className="container col-6 mx-auto text-center">
            <form className="">
                <label className="row">
                    Nombre de Usuario: 
                    <input  onChange={(e)=>{setUser(e.target.value)}}  className="text-dark"></input>
                </label>
                <label className="row mb-5">
                    Contraseña: 
                    <input onChange={(e)=>{setPass(e.target.value)}} className="text-dark"></input>
                </label>
            
                <button className="btn btn-dark btnEffect" onClick={()=>LogM()}>Login</button>
            </form>
        
            </div>
        </React.Fragment> 
            
    );

    const LogM=async()=>{
        const url="http://localhost:4000/api/Practica2/Usuario"
         let config={
            method:'GET',       //ELEMENTOS A ENVIAR
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
        }
        const res= await fetch(url,config)
        const data_res =await res.json()
        try{
            for(let i; i<data_res.length;i++){
                if(data_res[i].nombreUsu==user && data_res[i].pass==password){
                    <Navigate to={"/pAux"} state={{ id:data_res[i].id,PageSol:"login"}} />
                }
            }
            alert("Contraseña o Usuario Incorrectos")
        }catch(e){console.log(e)}
    }
}

  
export default Login;