import {getConnection} from "../database/database"

const getUsuario= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT * FROM Usuario");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getDataUsu= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT edad , peso, genero, estatura, usuarioID FROM DataUsu");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getFrecuenica= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT pulsoCard ,fecha, usuarioID FROM Frec_Card");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getRango= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT rango ,fecha, usuarioID FROM Rango_mov");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getFrecRep= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT vel_rep, fecha, usuarioID FROM Frec_rep");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getCalorias= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT caloriasQuem, fecha, usuarioID FROM Calorias");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addUsuario = async(req, res) => {
    try {
        const { nombreUsu, pass } = req.body;
        const usuario = {nombreUsu, pass};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Usuario SET ?",usuario);
        res.json("addUsuario");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addDataUsu = async(req, res) => {
    try {
        const { edad, peso, genero, estatura, usuarioID } = req.body;
        const datUsuario = {edad, peso, genero, estatura, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO DataUsu SET ?",datUsuario);
        res.json("addDataUsu");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addFrecuencia = async(req, res) => {
    try {
        
        const { pulsoCard, fecha, usuarioID } = req.body;
        const frec = {pulsoCard, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Frec_Card SET ?",frec);
        res.json("addFrecuencia");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addRango = async(req, res) => {
    try {
        const { rango, fecha, usuarioID } = req.body;
        const rango_m = {rango, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Rango_mov SET ?",rango_m);
        res.json("addRango");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addFrecRep = async(req, res) => {
    try {
        const { vel_rep, fecha, usuarioID } = req.body;
        const frec_rep = {vel_rep, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Frec_rep SET ?",frec_rep);
        res.json("addFrecRep");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addCalorias = async(req, res) => {
    try {
        const { caloriasQuem, fecha, usuarioID } = req.body;
        const calor = {caloriasQuem, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Calorias SET ?",calor);
        res.json("addCalorias");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getUsuario,
    getDataUsu,
    getFrecuenica,
    getRango,
    getFrecRep,
    getCalorias,
    
    addUsuario,
    addDataUsu,
    addFrecuencia,
    addRango,
    addFrecRep,
    addCalorias
};