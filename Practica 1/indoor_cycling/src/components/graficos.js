import { Component } from "react"
import React from 'react';
import {Bar,Line} from 'react-chartjs-2';
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
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ["2022-08-15T06:00:00.000Z","2022-08-16T07:00:00.000Z",  "2022-08-16T06:00:00.000Z"];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:   [15,25,10],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data:   [22,15,22],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  


export default class Graficos extends Component{
    render(){
        return (
            <div className="col-8 container" id="Graphic-Component" align="center">
                <div>
                 <Line options={options} data={data} />;
                </div>
                
               
                    
            </div>
        ); 
    }

}