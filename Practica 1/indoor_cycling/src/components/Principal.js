import { Component } from "react"
import React from 'react';
import Experimetos from './Experimentos'
import User from './user'
import Graficos from './graficos'

export default class Principal extends Component{
    

    render(){
        return(
            <React.Fragment>
            <header align="center"><h1>Indoor Cycling Smart </h1></header>
            < User nameUser={this.props.nameUser}/>
            < Experimetos/>
            < Graficos />
            </React.Fragment> 
            
        )
    }


    
}