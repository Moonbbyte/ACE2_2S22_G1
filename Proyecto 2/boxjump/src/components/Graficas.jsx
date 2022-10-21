import { Component } from "react"
import React from 'react';
import {Bar,Line} from 'react-chartjs-2';
import Chart from 'chart.js'
import {Link} from 'react-router-dom'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    scales: {
        yAxes:{
            grid: {
                drawBorder: true,
                color: '#FFFFFF',
            },
            ticks:{
                beginAtZero: true,
                color: 'white',
                fontSize: 12,
            }
        },
        xAxes: {
            grid: {
                drawBorder: true,
                color: '#FFFFFF',
            },
            ticks:{
                beginAtZero: true,
                color: 'white',
                fontSize: 12,
            }
        },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
            color: "white", 
            font: {
              size: 18
            }
          }
      },
      title: {
        display: true,
        text: 'Experimento',
        color:"white"
        
      },
    },
  };

  
  
  const labels = ["Date Init","Mid Date","Date finish"];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Unidad',
        data:   [0,0,0],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132,1)',
        color:"white"
        
      }
    ],
  };

  export const UpdateChartjs=function(dataExp){
    options.plugins.title.text=dataExp[0]
   
      data.datasets= [
        {
          label: dataExp[1],
          data:   dataExp[2][0],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: ' rgba(255, 99, 132,1)',
          color:"white"
          
        }
      ]
    
    data.labels=dataExp[3]
    //[titleG,parametroName,Parametros,Fechas]
    return data
  }
  

export default class Graficas extends Component{
  constructor() {
    super();
    this.state={
        Nombre:"usuario",
        Fecha:"",
        id:1,
        options:options,
        Data:data,
        dateInit:"2022-10-20",
        dateFinish:"2022-10-22",
        PageSol:"graficas"
    }
  }
  render(){
        return (
            <React.Fragment>
                <Link id="BtnHome" className="btn btn-dark btnEffect" to={{pathname: `/pAux`}}
                  state={this.state}
                >Home</Link>
                <div className="container" id="GraphP">
                  <div className="row">
                    <div className="col-4 ml-2">
                        <div className="row">
                          <div className="row">
                            <h5>Usuario: {this.state.Nombre}</h5>
                            <h5>Fecha:</h5>
                            <h5>{this.state.Fecha}</h5>
                          </div> 
                          
                        </div>
                        <div className='row ' id="">
                            <h5>Rango de Fecha: </h5>
                            <hr></hr>
                            <div className='row'>Inicio: </div>
                            <div className='row'>
                              <input type="date" id="fechaInit" className=" btn btn-dark col-9" min="2020-01-01" max="2023-12-31"
                              value={this.state.dateInit}
                              onChange={(e)=>{this.setState({dateInit:e.target.value}); console.log(this.state.dateInit)}}/> 
                            </div>
                            <div className='row'>Final: </div>
                            <div className='row'>
                              <input type="date" id="fechaInit" className="btn btn-dark col-9" min="2020-01-01" max="2023-12-31"
                              value={this.state.dateFinish}
                              onChange={(e)=>{this.setState({dateFinish:e.target.value});}}     
                />              
                            </div>
                        </div>
                       
                        <div className="row mt-5" id="buttonsExp">
                            <div className="btn-group-vertical col-9" id="Exp-Component">
                                <button className="btnEffect btn btn-dark" onClick={()=>this.FimpvTiempo()} >Delta Fuerza</button>
                                <button className="btnEffect btn btn-dark" onClick={()=>this.CalquemvTiempo()} >Delta Calorias</button>
                                <button className="btnEffect btn btn-dark" onClick={()=>this.RmvTiempo()}>Tiempo Zona de Ritmo</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div>
                            <Line options={this.state.options} data={this.state.Data} />
                        </div>     
                    </div>
                  </div>  
                </div>
            </React.Fragment>
            
            
        ); 
  }
  componentDidMount() { /*SE EJECUTA AL INICIO O AL RECARGAR PAGINA */
    /*
    this.setState({
        Nombre:this.props.location.Nombre,
        id: this.props.location.id
    }) */
    this.ActFechaM()
    this.actFecha()
  }
  
  actFecha(){
    setInterval(() => {
        this.ActFechaM()
      }, 10000);
  }
  ActFechaM(){
    let fecha=new Date()
    let year = fecha.getFullYear();
    let month = fecha.getMonth() + 1;
    let day = fecha.getDate();
    let horas=fecha.getHours()
    let minutos=fecha.getMinutes()
    let strF=`${day}/${month}/${year} - ${horas}h ${minutos}min`
    this.setState({
        Fecha:strF
    })
  }
  //---------------------------------------------------------------------------------------------//
  
  /*
    
    
    
  
  */
  
  FimpvTiempo=async()=>{
   //{fuerza_imp: 12336, fecha: '2022-10-20T21:52:49.000Z', usuarioID: 1}
    const url="http://localhost:4000/api/Proyecto2/FuerzaImp"
    let config={
        method:'GET',       //ELEMENTOS A ENVIAR
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }

    const res= await fetch(url,config)
    const data_res =await res.json()
    let datosGraph=this.datos_graphFimp(data_res)
   
    console.log(data_res)
    console.log(datosGraph)
    this.setState({
      Data:  {
        labels:datosGraph[0], //cambiar esto 
        datasets:[
          {
            label:"Fuerza Impulso", //cambiar esto 
            data:  datosGraph[1], //cambiar esto 
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ' rgba(255, 99, 132,1)',
            color:"white"
          
          }
        ],
      },
      options:  {
        responsive: true,
        scales: {
            yAxes:{
                grid: {
                    drawBorder: true,
                    color: '#FFFFFF',
                },
                ticks:{
                    beginAtZero: true,
                    color: 'white',
                    fontSize: 12,
                }
            },
            xAxes: {
                grid: {
                    drawBorder: true,
                    color: '#FFFFFF',
                },
                ticks:{
                    beginAtZero: true,
                    color: 'white',
                    fontSize: 12,
                }
            },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
                color: "white", 
                font: {
                  size: 18
                }
              }
          },
          title: {
            display: true,
            text: 'Fuerza de Impulso vs Tiempo', //cambia esto 
            color:"white"
            
          },
        },
      }
    })  
  }

  RmvTiempo=async()=>{
    //
    console.log("respuesta dle server")
    const url="http://localhost:4000/api/Proyecto2/Ritmo"
    let config={
        method:'GET',       //ELEMENTOS A ENVIAR
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }

    const res= await fetch(url,config)
    const data_res =await res.json()
    
    console.log(data_res)
    let datosGraph=this.datos_graphRm(data_res)
    this.setState({
      Data:  {
        labels:datosGraph[0], //cambiar esto 
        datasets:[
          {
            label:"Ritmo", //cambiar esto 
            data:   datosGraph[1], //cambiar esto 
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ' rgba(255, 99, 132,1)',
            color:"white"
          
          }
        ],
      },
      options:  {
        responsive: true,
        scales: {
            yAxes:{
                grid: {
                    drawBorder: true,
                    color: '#FFFFFF',
                },
                ticks:{
                    beginAtZero: true,
                    color: 'white',
                    fontSize: 12,
                }
            },
            xAxes: {
                grid: {
                    drawBorder: true,
                    color: '#FFFFFF',
                },
                ticks:{
                    beginAtZero: true,
                    color: 'white',
                    fontSize: 12,
                }
            },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
                color: "white", 
                font: {
                  size: 18
                }
              }
          },
          title: {
            display: true,
            text: 'Ritmo vs Tiempo', //cambia esto 
            color:"white"
            
          },
        },
      }
    })  
  }
  CalquemvTiempo=async()=>{
     //{caloriasQuem:14.99, fecha: fecha, usuarioId: 1}
               //http sin la s (https) por aca
    const url="http://localhost:4000/api/Proyecto2/Calorias"
    let config={
        method:'GET',       //ELEMENTOS A ENVIAR
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }
     //la url
     //la forma en la que vienen los datos 
    const res= await fetch(url,config)
    const data_res =await res.json()
    console.log(data_res)
    console.log(typeof(data_res[0].fecha))
    let datosGraph=this.datos_graphCq(data_res)
    if (datosGraph[0].length==0){
      alert("No existen datos en esas fechas")
    }
    this.setState({
      Data:  {
        labels:datosGraph[0], //cambiar esto 
        datasets:[
          {
            label:"Calorias", //cambiar esto 
            data:   datosGraph[1], //cambiar esto 
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ' rgba(255, 99, 132,1)',
            color:"white"
          
          }
        ],
      },
      options:  {
        responsive: true,
        scales: {
            yAxes:{
                grid: {
                    drawBorder: true,
                    color: '#FFFFFF',
                },
                ticks:{
                    beginAtZero: true,
                    color: 'white',
                    fontSize: 12,
                }
            },
            xAxes: {
                grid: {
                    drawBorder: true,
                    color: '#FFFFFF',
                },
                ticks:{
                    beginAtZero: true,
                    color: 'white',
                    fontSize: 12,
                }
            },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
                color: "white", 
                font: {
                  size: 18
                }
              }
          },
          title: {
            display: true,
            text: 'Calorias quemadas vs Tiempo', //cambia esto 
            color:"white"
            
          },
        },
      }
    })  
}

  datos_graphFimp(datos){
    let datos_g=[]
    let labels=[]
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

        if (datos[i].fecha.includes(fecha) && datos[i].usuarioID==this.state.id){
          values.push(datos[i].fuerza_imp)
          labels.push(datos[i].fecha)
        }
      }
    }  
    datos_g=[labels,values]
    return datos_g
  }

  datos_graphRm(datos){
    let datos_g=[]
    let labels=[]
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
      console.log(fecha)
      for(let i=0; i<datos.length;i++){
        if (datos[i].fecha.includes(fecha) && datos[i].usuarioID==this.state.id){
          values.push(datos[i].ritmo)
          labels.push(datos[i].fecha)
        }
      }
    }  
    datos_g=[labels,values]
    return datos_g
  }

  datos_graphCq(datos){
    let datos_g=[]
    let labels=[]
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
      console.log(fecha)
      for(let i=0; i<datos.length;i++){
        if (datos[i].fecha.includes(fecha) && datos[i].usuarioID==this.state.id){
          values.push(datos[i].caloriasQuem)
          labels.push(datos[i].fecha)
        }
      }
    }  
    datos_g=[labels,values]
    return datos_g
  }
}
//2022-09-17T23:48:21.000Z    17/09-18/09
//2022-09-18T00:14:57.000Z
