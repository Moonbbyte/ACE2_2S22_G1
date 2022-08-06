import { Component } from "react"
import React from 'react';


export default class Dashboard extends Component{
    render(){
        return(
            <React.Fragment>
                <header><h2>Dashboard</h2></header>
                <div className="container-fluid " id="Exp-Component">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-5"> 
                                <img id="imageCardio" className="col-3" src={require("../images/cardio.png")} />
                                <div >
                                    <p align="center"> RITMO CARDIACO </p>
                                </div>
                            </div>
                            <div className="col-5">
                                <img id="imageTemp" className="col-3" src={require("../images/temperatura.png")} />
                                <div >
                                    <p align="center"> TEMPERATURA CORPORAL </p>
                                </div>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-5"> 
                            <img id="imageQuemCal" className="col-3" src={require("../images/calquem.png")} />
                                    <div >
                                        <p align="center"> RITMO CARDIACO </p>
                                    </div>       
                        </div>
                    </div>
                    </div>
                    <img id="Ciclista-Dash" src={require("../images/ciclistadash.jpg")} />
                    
                </div>
            </React.Fragment> 
            )
    }
}