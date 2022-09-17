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

const getFuerza= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT fuerza_g ,fecha, usuarioID FROM Fuerza");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getVelocidad= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT vel_g ,fecha, usuarioID FROM Velocidad");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getRitmo= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT ritmo_g, fecha, usuarioID FROM Ritmo");
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

const addFuerza = async(req, res) => {
    try {
        const { fuerza_g, fecha, usuarioID } = req.body;
        const fuerza = {fuerza_g, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Fuerza SET ?",fuerza);
        res.json("addFuerza");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addVelocidad = async(req, res) => {
    try {
        const { vel_g, fecha, usuarioID } = req.body;
        const velocidad = {vel_g, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Velocidad SET ?",velocidad);
        res.json("addVelocidad");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addRitmo = async(req, res) => {
    try {
        const { ritmo_g, fecha, usuarioID } = req.body;
        const ritmo = {ritmo_g, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Ritmo SET ?",ritmo);
        res.json("addRitmo");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getUsuario,
    getDataUsu,
    getFuerza,
    getVelocidad,
    getRitmo,
    
    addUsuario,
    addDataUsu,
    addFuerza,
    addVelocidad,
    addRitmo
};