
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
            dateInit:"2022-09-30",
            dateFinish:"2022-10-02",
            //Tiempo total de entrenamiento
            nrep:10, //numero de repeticiones
            rmaxMov:0,
            calQuem:13,
            tent: 8,
            rpromMov:12,
            id:-1
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
            id:this.props.location.id
        })
        this.DatosUser(this.props.location.id,this.props.location.Nombre)
        this.DatosDash(this.props.location.id)
        setInterval(() => {
            this.DatosDash(this.props.location.id)
        }, 10000);
        
    }
    DatosUser=async(id,nombre)=>{
        const url="http://localhost:4000/api/Practica2/DataUsu"
        let config={
           method:'GET',       //ELEMENTOS A ENVIAR
               headers : { 
                   'Content-Type': 'application/json',
                   'Accept': 'application/json'
               },
       }
       const res= await fetch(url,config)
       const data_res =await res.json()
       for(let i=0; i<data_res.length;i++){
        if(data_res[i].usuarioID==id){
            this.setState({
                Nombre:nombre,
                Edad:data_res[i].edad,
                Peso:data_res[i].peso,
                Estatura:data_res[i].estatura
            })
            if(data_res[i].genero==1){
                this.setState({Genero:"Masculino"})
            }else{
                this.setState({Genero:"Femenino"})
            }
            break;
        }
       }
      


    }

    DatosDash=async(id)=>{
        console.log("aaaa")
        //Frecuencia: {pulsoCard: 150, fecha: '2022-10-01T21:24:35.000Z', usuarioID: 1}
        //Rango: {rango: 96, fecha: '2022-10-01T21:24:35.000Z', usuarioID: 1}
        //Calorias: {caloriasQuem: 14.83, fecha: '2022-10-01T21:24:35.000Z', usuarioID: 1
        let n_entr=0
        let tent=0  //aun no usado por falta de metodos backend
        let rmax_mov=0
        let prom_mov=0

        const url="http://localhost:4000/api/Practica2/Frecuencia"
        let config={
            method:'GET',      
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
        const res= await fetch(url,config)
        let data =await res.json()
        data=this.clear_list(data,id)
        n_entr+=data.length
        /* ------------------ */
        const url2="http://localhost:4000/api/Practica2/Rango"
        const res2= await fetch(url2,config)
        let data2 =await res2.json()
        data2=this.clear_list(data2,id)
        
        n_entr+=data2.length
          //rango maximo de movimiento
        data2.forEach((e)=>{
            if(e.rango>rmax_mov){
                rmax_mov=e.rango
            }
            prom_mov+=e.rango
        })
        prom_mov=prom_mov/data2.length

        this.setState({
            rpromMov:prom_mov,
            rmaxMov:rmax_mov
        })



        if(data2.length>0){
            this.setState({
                ritmo:data2[data2.length-1].ritmo_g
            })
        }
        /* ------------------ */
        const url3="http://localhost:4000/api/Practica2/Calorias"
        const res3= await fetch(url3,config)
        let data3 =await res3.json()
        data3=this.clear_list(data3,id)
        n_entr+=data3.length
        if(data3.length>0){
            this.setState({
                calQuem:data3[data3.length-1].caloriasQuem
            })
        }

        this.setState({
            nrep:n_entr
        })
    }
    
    clear_list(array,id){
        for(let i=array.length-1; i>=0;i--){
            if (array[i].usuarioID!=id){
                array.splice(i,1)
            }
        }  
        array=this.datos_rfecha(array)
        return array
    }

    
    datos_rfecha(datos){
        console.log(datos)
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
                values.push(datos[i])
            }
          }
        }  
        return values
    }
    //USUARIO:  id:1, nombreUsu: 'Juan', pass: '123'      http://
    //DataUsu:  edad: 25, peso:65, genero:'1', estatura:168,usuarioId:1    http://
    //Frecuencia: {pulsoCard: 150, fecha: '2022-10-01T21:24:35.000Z', usuarioID: 1}
    //Rango: {rango: 96, fecha: '2022-10-01T21:24:35.000Z', usuarioID: 1}
    // FrecuenciaRep: {vel_rep: 1, fecha: '2022-10-01T21:24:35.000Z', usuarioID: 1}
    //CaloriasQuemadas: {caloriasQuem: 14.83, fecha: '2022-10-01T21:24:35.000Z', usuarioID: 1
    
    
}
