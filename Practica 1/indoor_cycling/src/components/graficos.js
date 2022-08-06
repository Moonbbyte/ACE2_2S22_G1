import { Component } from "react"
import React from 'react';


export default class Graficos extends Component{
    render(){
        return  <div className="col-8 container" id="Graphic-Component" align="center">
                    <img width="100%" height="100%" src={require("../images/ciclismoWall.jpg")}/>
                </div>
    }
}