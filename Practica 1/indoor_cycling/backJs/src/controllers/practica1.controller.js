import {getConnection} from "../database/database"

const getCalorias= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT caloriasQuem,fecha FROM Calorias");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getDistancia= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT distancia,fecha FROM Distancia");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getFrecCard= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT pulsoCard,fecha FROM Frec_Card");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getOxigeno= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT pulsoConOxigeno,fecha FROM Oxigeno");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getTempCorp= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT temperatura,fecha FROM Temp_Corp");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getVelocidad= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT vel,fecha FROM Velocidad");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getCalorias,
    getDistancia,
    getFrecCard,
    getOxigeno,
    getTempCorp,
    getVelocidad
    
};