
import { Component, useEffect } from "react"
import React,{useState,useRef} from 'react';
import {Link,useLocation,useParams} from 'react-router-dom'


export default class Principal extends Component{
    
    constructor() {
        super();
        this.state={
            Nombre:"Default",
            Edad:"18",
            Peso:"150",
            Genero:"Masculino",
            Estatura:"1.82",
            dateInit:"2022-09-16",
            dateFinish:"2022-09-18",
            //Tiempo total de entrenamiento
            nrep:10, //numero de repeticiones
            rmaxMov:11,
            calQuem:13,
            tent: 8,
            rpromMov:12,
            inicio:true

        }
    }
    render(){
        return(
            <React.Fragment>
            <header align="center"><h1>FlexBar</h1></header>
            <Link id="BtnGraph" className="btn btn-dark btnEffect" to={{pathname: `/gAux`}}
                        state={this.state}>Graficas</Link>
            <Link id="BtnLogOut" to="/" className="btn btn-dark btnEffect" >LogOut</Link>
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
                    onChange={(e)=>{this.setState({dateInit:e.target.value}); }}/>      
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
                <div className="row">
                    <div className="col-6">
                        <div className="row mb-5">
                            <div className="row">
                                <h4>Numero de Repeticiones</h4>
                                <hr></hr>
                            </div>
                            <div className="row">
                                <h4 align="center">{this.state.nrep}</h4>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="row">
                                <h4>Rango Maximo de Movimiento</h4>
                                <hr></hr>
                            </div>
                            <div className="row">
                                <h4 align="center">{this.state.rmaxMov}</h4>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="row">
                                <h4>Calorias Quemadas</h4>
                                <hr></hr>
                            </div>
                            <div className="row">
                                <h4 align="center">{this.state.calQuem}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row mb-5">
                            <div className="row">
                                <h4>Tiempo total de entrenamiento</h4>
                                <hr></hr>
                            </div>
                            <div className="row">
                                <h4 align="center">{this.state.tent}</h4>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="row">
                                <h4>Rango Promedio de Movimiento</h4>
                                <hr></hr>
                            </div>
                            <div className="row">
                                <h4 align="center">{this.state.rpromMov}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <img  src={require("../images/flex.png")} width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment> 
        )


    }
    componentDidMount() { /*SE EJECUTA AL INICIO O AL RECARGAR PAGINA */
        this.setState({
            Nombre:this.props.location.Nombre,
            Edad:this.props.location.Edad,
            Peso:this.props.location.Peso,
            Genero:this.props.location.Genero,
            Estatura:this.props.location.Estatura
        })  
        //this.datosP1()

    }

    FvR=async()=>{
        const url="http://localhost:4000/api/Proyecto1/Fuerza"
        let config={
            method:'GET',      
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
    
        const res= await fetch(url,config)
        const data =await res.json()
        if(data.length>0){
            this.setState({
                fgolpe:data[data.length-1].fuerza_g,
                nentr:this.datos_graph(data).length
            })
        }

        const url1="http://localhost:4000/api/Proyecto1/Velocidad"
        const res1= await fetch(url1,config)
        const data1 =await res1.json()
        if(data1.length>0){
            this.setState({
                vgolpe:data1[data1.length-1].vel_g
            })
        }
        const url2="http://localhost:4000/api/Proyecto1/Ritmo"
        const res2= await fetch(url2,config)
        const data2 =await res2.json()
       
        if(data2.length>0){
            this.setState({
                
                ritmo:data2[data2.length-1].ritmo_g
            })
        }

    }
    
    datosP1(){
        if(this.state.inicio==true){
            this.FvR()
            this.state.inicio=false
        }else{
            setInterval(() => {
                this.FvR()
              }, 4000);
        }
    }

    
    datos_graph(datos){
        let datos_g=[]
        let values=[]
        let date_i=new Date(this.state.dateInit.replace(/-/g, '\/'))
        let date_f=new Date(this.state.dateFinish.replace(/-/g, '\/'))    
        for (let x=date_i; x<=date_f; date_i.setDate(date_i.getDate() + 1)){
          let mes=String(date_i.getMonth()+1)
          let dia=String(date_i.getDate())
          if(mes.length==1){
            mes="0"+mes
          }
          if(dia.length==1){
            dia="0"+dia
          }
        
          let fecha=`${date_i.getFullYear()}-${mes}-${dia}`
          for(let i=0; i<datos.length;i++){
            if (datos[i].fecha.includes(fecha)){
              values.push(datos[i].fuerza_g)
            }
          }
        }  
        return values
      }
    
    
}
