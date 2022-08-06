import { Component } from "react"
import React from 'react';


export default class User extends Component{
    render(){
        return  <div className="col-3" id="User-Component" align="center">
                    <img id="imageBiker" className="col-3" src={require("../images/ciclista.png")} />
                    <div >
                        <p align="center"> NOMBRE DE USUARIO </p>
                        <p align="center"><h3>{this.props.nameUser}</h3></p>
                    </div>
                </div>
        
        
    }
}