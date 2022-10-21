
import { Component, useEffect } from "react"
import React,{useState,useRef} from 'react';
import {Link,useLocation,useParams} from 'react-router-dom'


export default class Principal extends Component{
    
    constructor() {
        super();
        this.state={
            Nombre:"Osmar Peña",
            Edad:"21",
            Peso:"150",
            Genero:"Masculino",
            Estatura:"1.82",
            dateInit:"2022-10-20",
            dateFinish:"2022-10-22",
            //Tiempo total de entrenamiento
            Nent: 8,
            tent: "30min",
            fimpulso: 123,
            vimpulso:0,
            ritmo:13,
            calorias:12,
            peso:16,
            id:-1
        }
    }
    render(){
        return(
            <React.Fragment>
            <header align="center"><h1>Box Jump Burpees</h1></header>
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
         
            <button className="btn btn-dark btnEffect col-2"  id="UpdateDash" 
            onClick={()=>{this.DatosDash()}}>Actualizar datos</button>

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
                        <h4>Tiempo total de Entrenamiento</h4>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                <img  width="80%" height="80%" src={require("../images/time.png")}    />
                            </div>
                            <div className="col-6">
                                {this.state.tent}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h4>Numero total de entrenamientos</h4>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                <img width="80%" height="80%" src={require("../images/boxjump.png")} />
                            </div>
                            <div className="col-6">
                                {this.state.Nent}
                            </div>
                        </div>
                    </div>
               </div>
               <div className="row">
                    <div className="col-4">
                        <h5>Fuerza de Impulso</h5>
                        <hr></hr>
                        <div className="row">
                            <div className="col-6">
                                <img width="50%" height="60%" src={require("../images/force.png")} />
                            </div>
                            <div className="col-6">
                                {this.state.fimpulso}
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h5>Velocidad de Impulso</h5>
                        <hr></hr>
                        <div className="row">
                            <div className="col-6">
                                <img width="50%" height="60%" src={require("../images/fast.png")} />
                            </div>
                            <div className="col-6">
                                {this.state.vimpulso}
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h5>Ritmo</h5>
                        <hr></hr>
                        <div className="row">
                            <div className="col-6">
                                <img width="50%" height="60%" src={require("../images/ritmo.png")} />
                            </div>
                            <div className="col-6">
                                {this.state.ritmo}
                            </div>
                        </div>
                    </div>
               </div>
               <div className="row">
                    <div className="col-4">
                        <h5>Calorias</h5>
                        <hr></hr>
                        <div className="row">
                            <div className="col-6">
                                <img width="40%" height="60%" src={require("../images/calquem.png")} />
                            </div>
                            <div className="col-6">
                                {this.state.calorias}
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-4">
                        <h5>Peso</h5>
                        <hr></hr>
                        <div className="row">
                            <div className="col-6">
                                <img width="50%" height="60%" src={require("../images/cardio.png")} />
                            </div>
                            <div className="col-6">
                                {this.state.peso}
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            </React.Fragment> 
        )


    }
    componentDidMount() { /*SE EJECUTA AL INICIO O AL RECARGAR PAGINA */
    }


    DatosDash=async()=>{
        let id = ""
        /*
            {fuerza_imp: 12336, fecha: '2022-10-20T21:52:49.000Z', usuarioID: 1}
            const url="http://localhost:4000/api/Proyecto2/FuerzaImp"
            ritmo
            const url="http://localhost:4000/api/Proyecto2/Ritmo"

            //{caloriasQuem:14.99, fecha: fecha, usuarioId: 1}
               //http sin la s (https) por aca
            const url="http://localhost:4000/api/Proyecto2/Calorias"
        */
        //Frecuencia: {pulsoCard: 150, fecha: '2022-10-01T21:24:35.000Z', usuarioID: 1}
        //Rango: {rango: 96, fecha: '2022-10-01T21:24:35.000Z', usuarioID: 1}
        //Calorias: {caloriasQuem: 14.83, fecha: '2022-10-01T21:24:35.000Z', usuarioID: 1
        let fimp=0
        let ritmo_=0
        let calorias_=0

        let url="http://localhost:4000/api/Proyecto2/FuerzaImp"
        let config={
            method:'GET',      
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
        let res= await fetch(url,config)
        let data =await res.json()
        console.log(data)
        data=this.clear_list(data,id)
        fimp = data.length
        /* ------------------ */
        const url2="http://localhost:4000/api/Proyecto2/Ritmo"
        const res2= await fetch(url2,config)
        let data2 =await res2.json()
        data2=this.clear_list(data2,id)
        
        ritmo_=data2.length
        /* ------------------ */
        const url3="http://localhost:4000/api/Proyecto2/Calorias"
        const res3= await fetch(url3,config)
        let data3 =await res3.json()
        data3=this.clear_list(data3,id)
        calorias_=data3.length
        
        this.setState({
            fimpulso: fimp,
            ritmo: ritmo_,
            calorias: calorias_,
            Nent: fimp+ritmo_+calorias_
        })
        
    }
    
    clear_list(array,id){
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
