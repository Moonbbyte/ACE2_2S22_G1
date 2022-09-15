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
        text: 'Calorias vs Tiempo',
        color:"white"
        
      },
    },
  };

  
  
  const labels = ["2022-08-15T06:00:00.000Z","2022-08-16T07:00:00.000Z",  "2022-08-16T06:00:00.000Z"];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Titulo',
        data:   [15,25,10],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132,1)',
        color:"white"
        
      }
    ],
  };

  
  

export default class Graficas extends Component{
  constructor() {
    super();
    this.state={
        options:options,
        Data:data,
        dateInit:"2022-09-01",
        dateFinish:"2022-10-10",
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
                                <button className="btnEffect btn btn-dark" >Delta Fuerza</button>
                                <button className="btnEffect btn btn-dark"  >Delta Velta</button>
                                <button className="btnEffect btn btn-dark" >Tiempo Zona Ritmo</button>
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
  
    componentDidMount() {

      this.setState({
        
      })

    }
  
    Actualizar(){
      this.setState({
        
      })
    }
    

}