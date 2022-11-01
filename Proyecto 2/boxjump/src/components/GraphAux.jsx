import { Component, useEffect } from "react"
import React,{useState,useRef} from 'react';
import {Link,useLocation,useParams} from 'react-router-dom'
import Graficas from './Graficas'

const lista=[]

const GraphAux = props => {
    const location = useLocation().state
    return <Graficas location={location}/> // your component
}
export default GraphAux;