import { Component } from "react"
import React from 'react';
import {Bar,Line} from 'react-chartjs-2';
import Chart from 'chart.js'

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
import { Button } from "bootstrap";
import { Data, dataExp1 } from "./Experimentos";
  
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
                color: 'black',
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

  
  export const UpdateChartjs=function(dataExp){
    options.plugins.title.text=dataExp[0]
    if(dataExp[2].length==1){
      data.datasets= [
        {
          label: dataExp[1],
          data:   dataExp[2][0],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: ' rgba(255, 99, 132,1)',
          color:"white"
          
        }
      ]
    }else{
      console.log("XDXDXD")
      data.datasets= [
        {
          label: "Oxigeno",
          data:   dataExp[2][0],
          borderColor: 'rgb(155, 99, 132)',
          backgroundColor: ' rgba(155, 99, 132,1)',
          color:"white"
          
        },
        {
          label: "Pulso",
          data:   dataExp[2][1],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: ' rgba(255, 99, 132,1)',
          color:"white"
          
        }
      ]


    }
    
    data.labels=dataExp[3]
    //[titleG,parametroName,Parametros,Fechas]
    return data
  }
  export const UpdateChartjs2=function(){
    return options
  }

export default class Graficos extends Component{
  constructor() {
    super();
    this.state={
        options:options,
        Data:data,
    }
  }
    render(){
        return (
            <div>
                <button className="btn btn-dark btnEffect" id="ActualizarGraph" onClick={()=>this.Actualizar()}>Actualizar</button>
                <div className="col-8  container" id="Graphic-Component" align="center">
                <div>
                 <Line options={this.state.options} data={this.state.Data} />;
                </div>     
                </div>
            </div>
            
        ); 
    }
  
    componentDidMount() {

      this.setState({
        Data: UpdateChartjs( this.props.dataExp),
        options:UpdateChartjs2(this.props.dataExp)
      })

    }
  
    Actualizar(){
      this.setState({
        Data: UpdateChartjs( this.props.dataExp),
        options:UpdateChartjs2(this.props.dataExp)
      })
      console.log(this.state.Data)
    }
    

}