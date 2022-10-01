
import { Component, useEffect } from "react"
import React,{useState,useRef} from 'react';
import {Link,useLocation,useParams} from 'react-router-dom'
import Principal from './Principal'

const lista=[]

const PrincipalAux = props => {
    const location = useLocation().state
    if (location.PageSol==="login"){
        lista.splice(0)
        lista.push(location)
    }
    let locationAux=lista[0]
    return <Principal location={locationAux}/> // your component
}
export default PrincipalAux;