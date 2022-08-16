import {request, Router} from "express";
import { methods as practica1Controller } from "../controllers/practica1.controller";

const router = Router();


router.get("/Calorias", practica1Controller.getCalorias);
router.get("/Velocidad", practica1Controller.getVelocidad);
router.get("/Temperatura", practica1Controller.getTempCorp);
router.get("/Distancia", practica1Controller.getDistancia);
router.get("/Frecuencia", practica1Controller.getFrecCard);
router.get("/Oxigeno", practica1Controller.getOxigeno);

export default router;
