import express from "express";
import morgan from "morgan";

//Routes de Practica1
import languageRoutes from "./routes/language.routes";
var cors = require('cors');
const app = express();


//Settings
app.set("port", 4000);

//Middelware
app.use(morgan("dev"));
app.use(cors())

//Rutas
app.use("/api/Practica1",languageRoutes);

export default app;