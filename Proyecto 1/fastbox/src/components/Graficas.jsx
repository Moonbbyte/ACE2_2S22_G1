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

  
  
  const labels = ["2022-08-15T06:00:00.000Z","2022-08-16T07:00:00.000Z",  "2022-08-16T06:00:00.000Z"];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Unidad',
        data:   [15,25,10],
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
        options:options,
        Data:data,
        dateInit:"2022-09-01",
        dateFinish:"2022-09-10",
        PageSol:"graficas"
    }
  }
    render(){
        return (
            <React.Fragment>
                <Link id="BtnHome" className="btn btn-dark" to={{pathname: `/pAux`}}
                  state={this.state}
                >Home</Link>
            
                <button className="btn btn-dark btnEffect" id="ActualizarGraph" onClick={()=>this.Actualizar()}>Actualizar</button>
                <div className="container" id="GraphP">
                  <div className="row">
                    <div className="col-4 ml-2">
                        <div className='row ' id="">
                            <h5>Rango de Fecha: </h5>
                            <hr></hr>
                            <div className='row'>Inicio: </div>
                            <div className='row'>
                              <input type="date" id="fechaInit" className="btn btn-dark col-9" min="2020-01-01" max="2023-12-31"
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
                                <button className="btnEffect btn btn-dark" onClick={()=>this.FvTiempo()} >Delta Fuerza</button>
                                <button className="btnEffect btn btn-dark" onClick={()=>this.VvTiempo()} >Delta Velta</button>
                                <button className="btnEffect btn btn-dark" onClick={()=>this.RvTiempo()}>Tiempo Zona Ritmo</button>
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
  
    FvTiempo=async()=>{
      const url="http://localhost:4000/api/Proyecto1/Fuerza"
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
      let datosGraph=this.datos_graph(data_res)
      if (datosGraph[0].length==0){
        alert("No existen datos en esas fechas")
      }
      this.setState({
        Data:  {
          labels:datosGraph[0], //cambiar esto 
          datasets:[
            {
              label:"Fuerza", //cambiar esto 
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
              text: 'Fuerza vs Tiempo', //cambia esto 
              color:"white"
              
            },
          },
        }
      })  
  }
  VvTiempo=async()=>{
    const url="http://localhost:4000/api/Proyecto1/Velocidad"
    let config={
        method:'GET',       //ELEMENTOS A ENVIAR
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }

    const res= await fetch(url,config)
    const data_res =await res.json()
    let datosGraph=this.datos_graphvel(data_res)
    console.log(data_res)
    this.setState({
      Data:  {
        labels:datosGraph[0], //cambiar esto 
        datasets:[
          {
            label:" Velocidad", //cambiar esto 
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
            text: 'Velocidad vs Tiempo', //cambia esto 
            color:"white"
            
          },
        },
      }
    })  
  }

  RvTiempo=async()=>{
    const url="http://localhost:4000/api/Proyecto1/Ritmo"
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
    this.setState({
      Data:  {
        labels:[], //cambiar esto 
        datasets:[
          {
            label:" Ritmo ", //cambiar esto 
            data:   "dataExp[2][0]", //cambiar esto 
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

  datos_graph(datos){
    let datos_g=[]
    let labels=[]
    let values=[]
    let di= this.state.dateInit.split("-")
    let df= this.state.dateFinish.split("-")
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
        if (datos[i].fecha.includes(fecha)){
          values.push(datos[i].fuerza_g)
          labels.push(datos[i].fecha)
        }
      }
    }  
    datos_g=[labels,values]
    return datos_g
  }

  datos_graphvel(datos){
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
        if (datos[i].fecha.includes(fecha)){
          values.push(datos[i].vel_g)
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
