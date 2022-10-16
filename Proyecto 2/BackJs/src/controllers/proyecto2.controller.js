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

const getFuerzaImp= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT fuerza_imp ,fecha, usuarioID FROM Fuerza_impulso");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getVelImp= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT vel_imp ,fecha, usuarioID FROM Velocidad_impulso");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getFuerzaLleg= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT fuerza_llegada, fecha, usuarioID FROM Fuerza_llegada");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getPeso= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT peso, fecha, usuarioID FROM Peso");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getRitmo= async(req, res)=>{
    try {
        const connection= await getConnection();
        const result= await connection.query("SELECT ritmo, fecha, usuarioID FROM Ritmo");
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

const addFuerzaImp = async(req, res) => {
    try {
        
        const { fuerza_imp, fecha, usuarioID } = req.body;
        const frec = {fuerza_imp, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Fuerza_impulso SET ?",frec);
        res.json("addFuerzaImp");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addVelImp = async(req, res) => {
    try {
        const { vel_imp, fecha, usuarioID } = req.body;
        const rango_m = {vel_imp, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Velocidad_impulso SET ?",rango_m);
        res.json("addVelImp");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addFuerzaLleg = async(req, res) => {
    try {
        const { fuerza_llegada, fecha, usuarioID } = req.body;
        const frec_rep = {fuerza_llegada, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Fuerza_llegada SET ?",frec_rep);
        res.json("addFuerzaLleg");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addPeso = async(req, res) => {
    try {
        const { peso, fecha, usuarioID } = req.body;
        const calor = {peso, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Peso SET ?",calor);
        res.json("addPeso");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addRitmo = async(req, res) => {
    try {
        const { ritmo, fecha, usuarioID } = req.body;
        const calor = {ritmo, fecha, usuarioID};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO Ritmo SET ?",calor);
        res.json("addRitmo");

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
    getFuerzaImp,
    getVelImp,
    getFuerzaLleg,
    getPeso,
    getRitmo,
    getCalorias,
    
    addUsuario,
    addDataUsu,
    addFuerzaImp,
    addVelImp,
    addFuerzaLleg,
    addPeso,
    addRitmo,
    addCalorias
};